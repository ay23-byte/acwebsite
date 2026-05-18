import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

// In-memory storage for demo (persists during server runtime)
let bookingsStorage: any[] = [
  {
    _id: '1',
    customerName: 'Rajesh Kumar',
    phone: '9876543210',
    address: 'Gomti Nagar, Lucknow',
    service: 'AC Repair',
    latitude: 26.8505,
    longitude: 80.9499,
    ownerId: 'admin',
    customerId: 'customer1',
    createdAt: new Date('2026-05-10T10:30:00Z'),
  },
  {
    _id: '2',
    customerName: 'Priya Singh',
    phone: '9876543211',
    address: 'Hazratganj, Lucknow',
    service: 'AC Maintenance',
    latitude: 26.8700,
    longitude: 80.9200,
    ownerId: 'admin',
    customerId: 'customer2',
    createdAt: new Date('2026-05-10T11:00:00Z'),
  },
  {
    _id: '3',
    customerName: 'Amit Sharma',
    phone: '9876543212',
    address: 'Aliganj,Lucknow',
    service: 'AC Installation',
    latitude: 26.8200,
    longitude: 80.9900,
    ownerId: 'admin',
    customerId: 'customer3',
    createdAt: new Date('2026-05-10T11:30:00Z'),
  },
];

// GET - Retrieve bookings based on user role
export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    const user = session?.user;

    // Check if MongoDB is properly configured
    const mongodbUri = process.env.MONGODB_URI;
    const isMongoConfigured =
      mongodbUri &&
      (mongodbUri.startsWith('mongodb://') || mongodbUri.startsWith('mongodb+srv://')) &&
      !mongodbUri.includes('your_mongodb_connection_string') &&
      !mongodbUri.includes('your_mongodb_connection_string_here');

    if (isMongoConfigured) {
      try {
        const { connectDB } = await import('@/lib/db/mongoose');
        const BookingModel = await import('@/lib/db/models/Booking');
        await connectDB();
        const Booking = BookingModel.default || BookingModel;

        let query = {};

        if (!user) {
          // Public access: return only non-sensitive data (no PII)
          const bookings = await Booking.find({})
            .select('-customerName -phone -address -customerId')
            .sort({ createdAt: -1 })
            .lean();
          return NextResponse.json(bookings);
        }

        if (user.role === 'admin') {
          // Admin sees all bookings with full data
          const bookings = await Booking.find({}).sort({ createdAt: -1 }).lean();
          return NextResponse.json(bookings);
        }

        if (user.role === 'technician') {
          // Technician sees only their assigned bookings
          query = { ownerId: user.id };
          const bookings = await Booking.find(query).sort({ createdAt: -1 }).lean();
          return NextResponse.json(bookings);
        }

        if (user.role === 'customer') {
          // Customer sees only their own bookings
          query = { customerId: user.id };
          const bookings = await Booking.find(query).sort({ createdAt: -1 }).lean();
          return NextResponse.json(bookings);
        }

        return NextResponse.json([]);
      } catch (mongoError) {
        console.error('MongoDB error, falling back to in-memory:', mongoError);
        return handleInMemoryFallback(user);
      }
    }

    // Fallback to in-memory storage
    return handleInMemoryFallback(user);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}

function handleInMemoryFallback(user: any) {
  if (!user) {
    // Public: return sanitized data
    const sanitized = bookingsStorage.map(({ customerName, phone, address, customerId, ...rest }) => rest);
    return NextResponse.json(sanitized);
  }

  if (user.role === 'admin') {
    return NextResponse.json(bookingsStorage);
  }

  if (user.role === 'technician') {
    const filtered = bookingsStorage.filter((b) => b.ownerId === user.id);
    return NextResponse.json(filtered);
  }

  if (user.role === 'customer') {
    const filtered = bookingsStorage.filter((b) => b.customerId === user.id);
    return NextResponse.json(filtered);
  }

  return NextResponse.json([]);
}

// POST - Create a new booking
export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    // Validate request body
    const body = await request.json();

    // Validate required fields
    if (!body.customerName || !body.phone || !body.address || !body.service) {
      return NextResponse.json(
        { error: 'Missing required fields: customerName, phone, address, service' },
        { status: 400 }
      );
    }

    // Check if MongoDB is properly configured
    const mongodbUri = process.env.MONGODB_URI;
    const isMongoConfigured =
      mongodbUri &&
      (mongodbUri.startsWith('mongodb://') || mongodbUri.startsWith('mongodb+srv://')) &&
      !mongodbUri.includes('your_mongodb_connection_string') &&
      !mongodbUri.includes('your_mongodb_connection_string_here');

    if (isMongoConfigured) {
      try {
        const { connectDB } = await import('@/lib/db/mongoose');
        const BookingModel = await import('@/lib/db/models/Booking');
        await connectDB();

        const Booking = BookingModel.default || BookingModel;
        const newBooking = new Booking({
          customerName: body.customerName,
          phone: body.phone,
          address: body.address,
          service: body.service,
          latitude: body.latitude || 26.8467,
          longitude: body.longitude || 80.9462,
          customerId: user.id,
          ownerId: body.ownerId || null,
        });

        const savedBooking = await newBooking.save();
        return NextResponse.json(
          {
            _id: savedBooking._id.toString(),
            customerName: savedBooking.customerName,
            phone: savedBooking.phone,
            address: savedBooking.address,
            service: savedBooking.service,
            latitude: savedBooking.latitude,
            longitude: savedBooking.longitude,
            customerId: savedBooking.customerId,
            ownerId: savedBooking.ownerId,
            createdAt: savedBooking.createdAt,
          },
          { status: 201 }
        );
      } catch (mongoError) {
        console.error('MongoDB save error, using in-memory fallback:', mongoError);
        const newBooking = {
          _id: Date.now().toString(),
          ...body,
          customerId: user.id,
          ownerId: body.ownerId || null,
          createdAt: new Date(),
        };
        bookingsStorage.unshift(newBooking);
        return NextResponse.json(newBooking, { status: 201 });
      }
    }

    // In-memory fallback
    const newBooking = {
      _id: Date.now().toString(),
      customerName: body.customerName,
      phone: body.phone,
      address: body.address,
      service: body.service,
      latitude: body.latitude || 26.8467,
      longitude: body.longitude || 80.9462,
      customerId: user.id,
      ownerId: body.ownerId || null,
      createdAt: new Date(),
    };

    bookingsStorage.unshift(newBooking);

    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create booking';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}



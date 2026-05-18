'use client'

import { useState, useEffect } from 'react'
import AirProCoolingService from '@/components/AirProCoolingService'
import BookingForm from '@/components/BookingForm'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const LucknowMap = dynamic(
  () => import('../components/LucknowMap'),
  {
    ssr: false,
    loading: () => <p>Loading map...</p>,
  }
);

interface Booking {
  id: string;
  latitude: number;
  longitude: number;
  service: string;
  customerName?: string;
  address?: string;
  phone?: string;
}

export default function Home() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings');
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleBookingAdded = () => {
    fetchBookings();
  };

  const isAuthenticated = !!session;
  const userRole = session?.user?.role;

  return (
    <>
      <AirProCoolingService />
      <div className='h-0.5'></div>
      <section className='w-full py-16 bg-gray-100'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900'>Our Service Area & Live Bookings</h2>
          <p className='text-center text-gray-600 mb-8'>We serve the entire Lucknow region. Book your service now!</p>
          
          {!isAuthenticated ? (
            <div className='bg-white p-6 rounded-lg shadow-md mb-8 text-center'>
              <p className='text-gray-600 mb-4'>Sign in to view your bookings and manage your account.</p>
              <div className='flex justify-center gap-4'>
                <Link href='/login' className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
                  Sign In
                </Link>
                <Link href='/register' className='px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50'>
                  Register
                </Link>
              </div>
            </div>
          ) : (
            <div className='bg-white p-6 rounded-lg shadow-md mb-8 flex justify-between items-center'>
              <div>
                <p className='text-gray-600'>Welcome, {session.user?.name}</p>
                <Link href='/dashboard' className='text-blue-600 hover:underline'>
                  View Dashboard
                </Link>
              </div>
              <BookingForm onBookingAdded={handleBookingAdded} />
            </div>
          )}

          {isAuthenticated && !isLoading && bookings.length > 0 && (
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
              <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                {userRole === 'admin' ? 'All Bookings' : userRole === 'technician' ? 'Your Assigned Bookings' : 'Your Bookings'} ({bookings.length})
              </h3>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto'>
                {bookings.map((booking) => (
                  <div key={booking.id} className='p-4 bg-red-50 border-l-4 border-red-500 rounded'>
                    <div className='flex items-center gap-2 mb-2'>
                      <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                      <span className='font-semibold text-red-600'>{booking.service}</span>
                    </div>
                    {booking.customerName && <p className='text-sm text-gray-700'><strong>Customer:</strong> {booking.customerName}</p>}
                    {booking.phone && <p className='text-sm text-gray-700'><strong>Phone:</strong> {booking.phone}</p>}
                    {booking.address && <p className='text-sm text-gray-600'>{booking.address}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {isLoading && (
            <div className='text-center text-gray-600 mb-8'>Loading bookings...</div>
          )}

          <div className='rounded-lg overflow-hidden shadow-lg border-2 border-gray-300'>
            <LucknowMap bookings={bookings} showDetails={isAuthenticated} />
          </div>
          
          <p className='text-center text-sm text-gray-600 mt-4'>
            <span className='inline-block w-3 h-3 bg-red-500 rounded-full mr-2'></span>
            Red dots = Service locations | Blue marker = Main office
          </p>
        </div>
      </section>
    </>
  );
}
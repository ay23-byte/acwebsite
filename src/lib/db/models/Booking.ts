import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  customerName: string;
  phone: string;
  address: string;
  service: string;
  latitude: number;
  longitude: number;
  ownerId: mongoose.Types.ObjectId;
  customerId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const bookingSchema = new Schema<IBooking>(
  {
    customerName: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    service: {
      type: String,
      required: [true, 'Service type is required'],
      enum: ['AC Repair', 'AC Maintenance', 'AC Installation', 'AC Cleaning', 'Gas Refill'],
    },
    latitude: {
      type: Number,
      required: [true, 'Latitude is required'],
    },
    longitude: {
      type: Number,
      required: [true, 'Longitude is required'],
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Owner ID is required'],
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Customer ID is required'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Booking || mongoose.model<IBooking>('Booking', bookingSchema);

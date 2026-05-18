'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Red marker icon for bookings (SVG data URL)
const redMarkerUrl = new URL(
  'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-ff0000.png'
);

const redIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDI1IDQxIj48cGF0aCBkPSJNMTIuNSAwQzUuNiAwIDAgNS42IDAgMTIuNWMwIDEyLjUgMTIuNSAyOC4xIDEyLjUgMjhzMTIuNS0xNS42IDEyLjUtMjhDMjUgNS42IDE5LjQgMCAxMi41IDB6TTEyLjUgMTYuNWMtMi4zIDAtNC00LjItNC00cy4yLTQgNC00IDQgMS43IDQgNFMxNC44IDE2LjUgMTIuNSAxNi41eiIgZmlsbD0iI2ZmMzMzMyIvPjwvc3ZnPg==',
  shadowUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDQxIDQxIj48cGF0aCBkPSJNMzYuMyAzNy43YzAgMi4zLTE4LjEgMy4zLTMyIDMuM1MwIDQwIDAgMzcuN1MxMC4yIDI3IDIwLjIgMjdzMTYuMSA4IDI2LjEgOHoiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

// Blue marker icon for main office
const blueIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDI1IDQxIj48cGF0aCBkPSJNMTIuNSAwQzUuNiAwIDAgNS42IDAgMTIuNWMwIDEyLjUgMTIuNSAyOC4xIDEyLjUgMjhzMTIuNS0xNS42IDEyLjUtMjhDMjUgNS42IDE5LjQgMCAxMi41IDB6TTEyLjUgMTYuNWMtMi4zIDAtNC00LjItNC00cy4yLTQgNC00IDQgMS43IDQgNFMxNC44IDE2LjUgMTIuNSAxNi41eiIgZmlsbD0iIzMzNjZmZiIvPjwvc3ZnPg==',
  shadowUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDQxIDQxIj48cGF0aCBkPSJNMzYuMyAzNy43YzAgMi4zLTE4LjEgMy4zLTMyIDMuM1MwIDQwIDAgMzcuN1MxMC4yIDI3IDIwLjIgMjdzMTYuMSA4IDI2LjEgOHoiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

interface Booking {
  id: string;
  latitude: number;
  longitude: number;
  service: string;
  customerName?: string;
  address?: string;
  phone?: string;
}

interface LucknowMapProps {
  bookings?: Booking[];
  showDetails?: boolean;
}

const LucknowMap = ({ bookings = [], showDetails = false }: LucknowMapProps) => {
  return (
    <MapContainer center={[26.8467, 80.9462]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      
      {/* Main office marker */}
      <Marker position={[26.8467, 80.9462]} icon={blueIcon}>
        <Popup>
          <div className='font-semibold'>Air Pro Cooling Service</div>
          <div className='text-sm'>Main Office - Lucknow</div>
        </Popup>
      </Marker>

      {/* Booking markers */}
      {bookings && bookings.length > 0 && bookings.map((booking: any) => (
        <Marker 
          key={booking._id || booking.id} 
          position={[booking.latitude, booking.longitude]}
          icon={redIcon}
        >
          <Popup>
            <div style={{ fontWeight: 'bold', color: '#ef4444' }}>{booking.service}</div>
            {showDetails && (
              <>
                {booking.customerName && <div style={{ fontSize: '0.875rem' }}><strong>Customer:</strong> {booking.customerName}</div>}
                {booking.phone && <div style={{ fontSize: '0.875rem' }}><strong>Phone:</strong> {booking.phone}</div>}
                {booking.address && <div style={{ fontSize: '0.875rem' }}><strong>Address:</strong> {booking.address}</div>}
              </>
            )}
            {!showDetails && <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Service location</div>}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LucknowMap;
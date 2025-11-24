'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, DollarSign, Users, Wifi, Car } from 'lucide-react';
import { translations } from '@/lib/translations';

export default function ExplorePage() {
  const router = useRouter();
  const [language, setLanguage] = useState('English');
  const text = translations[language];

  const preventCopy = (e) => {
    e.preventDefault();
    return false;
  };

  // Sample room data - replace with real data later
  const rooms = [
    {
      id: 1,
      title: 'Cozy Studio Apartment',
      location: 'Thamel, Kathmandu',
      price: 'NPR 15,000',
      capacity: '2 people',
      amenities: ['WiFi', 'Parking'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    },
    {
      id: 2,
      title: 'Spacious 2BHK',
      location: 'Lazimpat, Kathmandu',
      price: 'NPR 25,000',
      capacity: '4 people',
      amenities: ['WiFi', 'Parking'],
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    },
    {
      id: 3,
      title: 'Modern Single Room',
      location: 'Pulchowk, Lalitpur',
      price: 'NPR 10,000',
      capacity: '1 person',
      amenities: ['WiFi'],
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800'
    }
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      onCopy={preventCopy}
      onCut={preventCopy}
      style={{ 
        userSelect: 'none',
        background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute rounded-full opacity-20"
          style={{
            width: '600px',
            height: '600px',
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            filter: 'blur(60px)',
            top: '-100px',
            left: '-100px',
            animation: 'blob 12s infinite ease-in-out'
          }}
        ></div>
        <div 
          className="absolute rounded-full opacity-20"
          style={{
            width: '600px',
            height: '600px',
            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
            filter: 'blur(60px)',
            bottom: '-100px',
            right: '-100px',
            animation: 'blob 12s infinite ease-in-out 4s'
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition mb-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{text.back}</span>
          </button>

          <div className="text-center mb-12">
            <h1 
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ animation: 'fadeIn 0.5s ease-out' }}
            >
              {text.exploreRoomsTitle}
            </h1>
            <p className="text-white/70 text-xl">{text.roomsNearYou}</p>
          </div>
        </div>
      </div>

      {/* Room Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        {rooms.length === 0 ? (
          <div 
            className="text-center py-20 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <p className="text-white/60 text-xl">{text.noRoomsYet}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className="rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`,
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Room Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${room.image})` }}
                  ></div>
                  <div 
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                  >
                    {room.price}/month
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{room.title}</h3>
                  
                  <div className="flex items-center gap-2 text-white/70 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{room.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-white/70 mb-4">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{room.capacity}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs text-white flex items-center gap-1"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        {amenity === 'WiFi' && <Wifi className="w-3 h-3" />}
                        {amenity === 'Parking' && <Car className="w-3 h-3" />}
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                    style={{
                      background: 'linear-gradient(to right, #a855f7, #ec4899)',
                      boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
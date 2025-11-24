"use client";
import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit, Heart, History, Settings, Bell } from 'lucide-react';

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState('saved');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sita Sharma',
    email: 'sita.sharma@example.com',
    phone: '+977 9812345678',
    location: 'Kathmandu, Nepal',
    joinDate: 'January 2024',
    avatar: 'https://i.pravatar.cc/150?img=5'
  });

  const savedProperties = [
    {
      id: 1,
      title: 'Spacious 2BHK Apartment',
      location: 'Thamel, Kathmandu',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400'
    },
    {
      id: 2,
      title: 'Cozy Studio Room',
      location: 'Pulchowk, Lalitpur',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1502672260066-6bc35f0a1493?w=400'
    }
  ];

  const bookingHistory = [
    {
      id: 1,
      property: 'Modern 1BHK in Baluwatar',
      date: 'Dec 15, 2024',
      duration: '6 months',
      status: 'active',
      amount: 18000
    },
    {
      id: 2,
      property: 'Studio Apartment in Jhamsikhel',
      date: 'Jun 20, 2024',
      duration: '6 months',
      status: 'completed',
      amount: 15000
    }
  ];

  return (
    <div 
      className="min-h-screen py-24 px-6"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div 
          className="rounded-3xl p-8 mb-8"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img 
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
              />
              {isEditing && (
                <button 
                  className="absolute bottom-0 right-0 p-2 rounded-full"
                  style={{
                    background: 'linear-gradient(to right, #3b82f6, #a855f7)'
                  }}
                >
                  <Edit className="w-4 h-4 text-white" />
                </button>
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="text-3xl font-bold mb-2 px-4 py-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              ) : (
                <h1 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(to right, #ffffff, #dbeafe, #e9d5ff)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  {profile.name}
                </h1>
              )}

              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-4 h-4" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {profile.joinDate}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105"
                style={{
                  background: isEditing 
                    ? 'linear-gradient(to right, #10b981, #059669)'
                    : 'linear-gradient(to right, #3b82f6, #a855f7)',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                }}
              >
                {isEditing ? 'Save Profile' : 'Edit Profile'}
              </button>
              <button 
                className="p-3 rounded-xl hover:bg-white/10 transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Settings className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'saved'
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
            style={activeTab === 'saved' ? {
              background: 'linear-gradient(to right, #3b82f6, #a855f7)',
              boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
            } : {
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Heart className="w-5 h-5" />
            Saved Properties
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'history'
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
            style={activeTab === 'history' ? {
              background: 'linear-gradient(to right, #3b82f6, #a855f7)',
              boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
            } : {
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <History className="w-5 h-5" />
            Booking History
          </button>
        </div>

        {/* Content */}
        {activeTab === 'saved' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProperties.map((property) => (
              <div 
                key={property.id}
                className="rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button 
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-red-500/80 transition-all"
                  >
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                  <div className="flex items-center gap-2 text-white/60 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span 
                      className="text-2xl font-bold"
                      style={{
                        background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                      }}
                    >
                      NPR {property.price.toLocaleString()}
                    </span>
                    <span className="text-white/60 text-sm">/month</span>
                  </div>
                  <button 
                    className="w-full mt-4 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-all"
                    style={{
                      background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            {bookingHistory.map((booking) => (
              <div 
                key={booking.id}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{booking.property}</h3>
                    <div className="flex flex-wrap gap-4 text-white/60 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{booking.date}</span>
                      </div>
                      <span>•</span>
                      <span>Duration: {booking.duration}</span>
                      <span>•</span>
                      <span>NPR {booking.amount.toLocaleString()}/month</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span 
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        booking.status === 'active'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}
                    >
                      {booking.status === 'active' ? 'Active' : 'Completed'}
                    </span>
                    <button 
                      className="px-4 py-2 rounded-xl text-white font-semibold hover:bg-white/10 transition-all"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
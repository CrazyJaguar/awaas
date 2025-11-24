'use client';
import { useState } from 'react';
import { Edit, Trash2, Eye, MapPin, Bed, Bath, DollarSign, Plus } from 'lucide-react';

export default function MyPropertiesPage() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: 'Spacious 2BHK Apartment',
      type: 'Apartment',
      location: 'Thamel, Kathmandu',
      price: 25000,
      bedrooms: 2,
      bathrooms: 1,
      area: 850,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      bookingRequests: 3,
      status: 'active'
    },
    {
      id: 2,
      title: 'Cozy Studio Room',
      type: 'Studio',
      location: 'Pulchowk, Lalitpur',
      price: 12000,
      bedrooms: 1,
      bathrooms: 1,
      area: 350,
      image: 'https://images.unsplash.com/photo-1502672260066-6bc35f0a1493?w=400',
      bookingRequests: 1,
      status: 'active'
    },
    {
      id: 3,
      title: 'Luxury 3BHK House',
      type: 'House',
      location: 'Budhanilkantha, Kathmandu',
      price: 45000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1500,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400',
      bookingRequests: 5,
      status: 'inactive'
    }
  ]);

  const [showRequests, setShowRequests] = useState({});

  const toggleRequests = (id) => {
    setShowRequests(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const deleteProperty = (id) => {
    if (confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter(p => p.id !== id));
    }
  };

  const mockRequests = [
    { id: 1, name: 'Ram Kumar', date: '2024-12-01', message: 'Interested in viewing' },
    { id: 2, name: 'Sita Sharma', date: '2024-12-03', message: 'Need for 6 months' }
  ];

  return (
    <div className="min-h-screen py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              My Properties
            </h1>
            <p className="text-white/60">Manage your listed properties</p>
          </div>
          <a 
            href="/add-property"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30"
          >
            <Plus className="w-5 h-5" />
            Add Property
          </a>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-white/60 mb-1">Total Properties</p>
            <p className="text-3xl font-bold text-white">{properties.length}</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-white/60 mb-1">Active Listings</p>
            <p className="text-3xl font-bold text-white">
              {properties.filter(p => p.status === 'active').length}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-white/60 mb-1">Total Requests</p>
            <p className="text-3xl font-bold text-white">
              {properties.reduce((sum, p) => sum + p.bookingRequests, 0)}
            </p>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      property.status === 'active' 
                        ? 'bg-green-500/80 text-white' 
                        : 'bg-gray-500/80 text-white'
                    }`}
                  >
                    {property.status}
                  </span>
                  {property.bookingRequests > 0 && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/80 text-white">
                      {property.bookingRequests} requests
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-white/60 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-white/60 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{property.area} sq.ft</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    NPR {property.price.toLocaleString()}
                  </span>
                  <span className="text-white/60 text-sm">/month</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleRequests(property.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all bg-white/5 border border-white/10"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">View</span>
                  </button>
                  <button 
                    className="flex items-center justify-center px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all bg-white/5 border border-white/10"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => deleteProperty(property.id)}
                    className="flex items-center justify-center px-4 py-2 rounded-xl text-white hover:bg-red-500/20 transition-all bg-white/5 border border-white/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Booking Requests */}
                {showRequests[property.id] && (
                  <div className="mt-4 space-y-2">
                    <p className="text-white/80 font-semibold text-sm mb-2">Booking Requests:</p>
                    {mockRequests.map((req) => (
                      <div 
                        key={req.id}
                        className="p-3 rounded-xl bg-white/5 border border-white/10"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-white font-medium text-sm">{req.name}</span>
                          <span className="text-white/50 text-xs">{req.date}</span>
                        </div>
                        <p className="text-white/60 text-xs">{req.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
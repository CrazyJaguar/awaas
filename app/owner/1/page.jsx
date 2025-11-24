'use client';
import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Star, Building2, Eye, MessageCircle } from 'lucide-react';

export default function OwnerProfilePage() {
  const [showAll, setShowAll] = useState(false);

  const owner = {
    name: 'Ram Kumar Sharma',
    email: 'ram.sharma@example.com',
    phone: '+977 9812345678',
    location: 'Kathmandu, Nepal',
    joinDate: 'March 2023',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 4.8,
    totalReviews: 24,
    totalProperties: 8,
    bio: 'Professional property owner with 5+ years of experience in rental management. All my properties are well-maintained and located in prime locations.'
  };

  const properties = [
    {
      id: 1,
      title: 'Spacious 2BHK Apartment',
      location: 'Thamel, Kathmandu',
      price: 25000,
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      views: 450
    },
    {
      id: 2,
      title: 'Cozy Studio Room',
      location: 'Pulchowk, Lalitpur',
      price: 12000,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1502672260066-6bc35f0a1493?w=400',
      views: 320
    },
    {
      id: 3,
      title: 'Luxury 3BHK House',
      location: 'Budhanilkantha, Kathmandu',
      price: 45000,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400',
      views: 680
    },
    {
      id: 4,
      title: 'Modern 1BHK in Baluwatar',
      location: 'Baluwatar, Kathmandu',
      price: 22000,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400',
      views: 290
    },
    {
      id: 5,
      title: 'Penthouse in Lazimpat',
      location: 'Lazimpat, Kathmandu',
      price: 65000,
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400',
      views: 520
    },
    {
      id: 6,
      title: 'Affordable Room in Patan',
      location: 'Patan Dhoka, Lalitpur',
      price: 8000,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
      views: 180
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sita Sharma',
      rating: 5,
      date: 'Dec 2024',
      comment: 'Excellent landlord! Very responsive and property is exactly as described.'
    },
    {
      id: 2,
      name: 'Hari Prasad',
      rating: 5,
      date: 'Nov 2024',
      comment: 'Great experience. Highly professional and maintains properties well.'
    },
    {
      id: 3,
      name: 'Maya Gurung',
      rating: 4,
      date: 'Oct 2024',
      comment: 'Good property owner. Quick to resolve any issues.'
    }
  ];

  const displayedProperties = showAll ? properties : properties.slice(0, 3);

  return (
    <div className="min-h-screen py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Owner Profile Header */}
        <div className="rounded-3xl p-8 mb-8 bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image & Basic Info */}
            <div className="flex flex-col items-center">
              <img 
                src={owner.avatar}
                alt={owner.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white/20 mb-4"
              />
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-bold text-xl">{owner.rating}</span>
                <span className="text-white/60">({owner.totalReviews} reviews)</span>
              </div>
              <button className="w-full px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105 mb-2 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30">
                <MessageCircle className="w-5 h-5 inline mr-2" />
                Contact Owner
              </button>
              <button className="w-full px-6 py-3 rounded-xl text-white font-semibold hover:bg-white/10 transition-all bg-white/5 border border-white/10">
                Report User
              </button>
            </div>

            {/* Detailed Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                {owner.name}
              </h1>

              <div className="grid md:grid-cols-2 gap-3 mb-4 text-white/70">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{owner.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{owner.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{owner.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Member since {owner.joinDate}</span>
                </div>
              </div>

              <p className="text-white/70 mb-6 leading-relaxed">
                {owner.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl text-center bg-white/5 border border-white/10">
                  <Building2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{owner.totalProperties}</p>
                  <p className="text-white/60 text-sm">Properties</p>
                </div>
                <div className="p-4 rounded-xl text-center bg-white/5 border border-white/10">
                  <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{owner.rating}</p>
                  <p className="text-white/60 text-sm">Rating</p>
                </div>
                <div className="p-4 rounded-xl text-center bg-white/5 border border-white/10">
                  <MessageCircle className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{owner.totalReviews}</p>
                  <p className="text-white/60 text-sm">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Listed Properties
            </h2>
            {!showAll && properties.length > 3 && (
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2 rounded-xl text-white font-semibold hover:bg-white/10 transition-all bg-white/5 border border-white/10"
              >
                Show All ({properties.length})
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProperties.map((property) => (
              <div 
                key={property.id}
                className="rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md flex items-center gap-2">
                    <Eye className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">{property.views}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                  <div className="flex items-center gap-2 text-white/60 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-3 text-white/60 text-sm">
                    <span>{property.bedrooms} Bed</span>
                    <span>•</span>
                    <span>{property.bathrooms} Bath</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      NPR {property.price.toLocaleString()}
                    </span>
                    <span className="text-white/60 text-sm">/month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showAll && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(false)}
                className="px-6 py-3 rounded-xl text-white font-semibold hover:bg-white/10 transition-all bg-white/5 border border-white/10"
              >
                Show Less
              </button>
            </div>
          )}
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Reviews
          </h2>

          <div className="space-y-4">
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <p className="text-white/60 text-sm">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-white/70">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
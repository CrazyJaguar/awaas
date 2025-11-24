'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, SlidersHorizontal, MapPin, Bed, Bath, DollarSign, Heart, Eye, Star, Filter, X, Share2, Calendar, Phone, Mail, User, Wifi, Car, Utensils, Droplet, Zap, Wind, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SearchResultsPage() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: 'all',
    bedrooms: 'all',
    propertyType: 'all',
    sortBy: 'newest'
  });

  // Mock search results
  const properties = [
    {
      id: 1,
      title: 'Spacious 2BHK Apartment',
      location: 'Thamel, Kathmandu',
      price: 25000,
      bedrooms: 2,
      bathrooms: 1,
      area: 850,
      type: 'Apartment',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        'https://images.unsplash.com/photo-1502672260066-6bc35f0a1493?w=800',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
      ],
      rating: 4.5,
      reviews: 12,
      views: 450,
      verified: true,
      amenities: ['WiFi', 'Parking', 'Kitchen', '24/7 Water', 'Power Backup'],
      description: 'Beautiful and spacious 2BHK apartment in the heart of Thamel. Perfect for families or working professionals. Fully furnished with modern amenities. Close to restaurants, shopping centers, and public transport.',
      availableFrom: 'Dec 15, 2024',
      owner: {
        name: 'Ram Kumar Sharma',
        phone: '+977 9812345678',
        email: 'ram@example.com',
        avatar: 'https://i.pravatar.cc/150?img=12',
        verified: true
      }
    },
    {
      id: 2,
      title: 'Cozy Studio in Pulchowk',
      location: 'Pulchowk, Lalitpur',
      price: 12000,
      bedrooms: 1,
      bathrooms: 1,
      area: 350,
      type: 'Studio',
      images: [
        'https://images.unsplash.com/photo-1502672260066-6bc35f0a1493?w=800',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
      ],
      rating: 4.8,
      reviews: 8,
      views: 320,
      verified: true,
      amenities: ['WiFi', '24/7 Water', 'AC'],
      description: 'Cozy studio apartment perfect for students or single professionals. Located near IOE Pulchowk campus.',
      availableFrom: 'Immediately',
      owner: {
        name: 'Sita Sharma',
        phone: '+977 9823456789',
        email: 'sita@example.com',
        avatar: 'https://i.pravatar.cc/150?img=5',
        verified: true
      }
    },
    {
      id: 3,
      title: 'Luxury 3BHK House',
      location: 'Budhanilkantha, Kathmandu',
      price: 45000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1500,
      type: 'House',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
      ],
      rating: 4.9,
      reviews: 15,
      views: 680,
      verified: true,
      amenities: ['WiFi', 'Parking', 'Kitchen', '24/7 Water', 'Power Backup', 'Garden'],
      description: 'Luxurious 3BHK house with garden in peaceful Budhanilkantha area.',
      availableFrom: 'Jan 1, 2025',
      owner: {
        name: 'Hari Prasad',
        phone: '+977 9834567890',
        email: 'hari@example.com',
        avatar: 'https://i.pravatar.cc/150?img=33',
        verified: false
      }
    },
    {
      id: 4,
      title: 'Modern 1BHK in Baluwatar',
      location: 'Baluwatar, Kathmandu',
      price: 22000,
      bedrooms: 1,
      bathrooms: 1,
      area: 600,
      type: 'Apartment',
      images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
      rating: 4.6,
      reviews: 10,
      views: 290,
      verified: false,
      amenities: ['WiFi', 'Parking'],
      description: 'Modern apartment in prime Baluwatar location.',
      availableFrom: 'Dec 20, 2024',
      owner: {
        name: 'Maya Gurung',
        phone: '+977 9845678901',
        email: 'maya@example.com',
        avatar: 'https://i.pravatar.cc/150?img=9',
        verified: true
      }
    },
    {
      id: 5,
      title: 'Penthouse in Lazimpat',
      location: 'Lazimpat, Kathmandu',
      price: 65000,
      bedrooms: 4,
      bathrooms: 3,
      area: 2000,
      type: 'Penthouse',
      images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800'],
      rating: 5.0,
      reviews: 20,
      views: 520,
      verified: true,
      amenities: ['WiFi', 'Parking', 'Kitchen', '24/7 Water', 'Power Backup', 'AC', 'Gym'],
      description: 'Premium penthouse with stunning views.',
      availableFrom: 'Available Now',
      owner: {
        name: 'Bikram Thapa',
        phone: '+977 9856789012',
        email: 'bikram@example.com',
        avatar: 'https://i.pravatar.cc/150?img=15',
        verified: true
      }
    },
    {
      id: 6,
      title: 'Affordable Room in Patan',
      location: 'Patan Dhoka, Lalitpur',
      price: 8000,
      bedrooms: 1,
      bathrooms: 1,
      area: 250,
      type: 'Room',
      images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
      rating: 4.3,
      reviews: 5,
      views: 180,
      verified: false,
      amenities: ['WiFi', '24/7 Water'],
      description: 'Budget-friendly room in historic Patan area.',
      availableFrom: 'Dec 10, 2024',
      owner: {
        name: 'Anjana Shakya',
        phone: '+977 9867890123',
        email: 'anjana@example.com',
        avatar: 'https://i.pravatar.cc/150?img=20',
        verified: false
      }
    }
  ];

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const openPropertyModal = (property) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closePropertyModal = () => {
    setSelectedProperty(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      );
    }
  };

  const amenityIcons = {
    'WiFi': Wifi,
    'Parking': Car,
    'Kitchen': Utensils,
    '24/7 Water': Droplet,
    'Power Backup': Zap,
    'AC': Wind,
    'Garden': '🌳',
    'Gym': '💪'
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ 
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
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition mb-6"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Back</span>
          </button>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location, property type..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl text-white font-semibold hover:bg-white/15 transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div 
              className="rounded-2xl p-6 mb-6"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                animation: 'fadeIn 0.3s ease-out'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5 text-white/60 hover:text-white" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">Price Range</label>
                  <select
                    value={selectedFilters.priceRange}
                    onChange={(e) => setSelectedFilters({...selectedFilters, priceRange: e.target.value})}
                    className="w-full px-4 py-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <option value="all">All Prices</option>
                    <option value="0-15000">Under 15,000</option>
                    <option value="15000-30000">15,000 - 30,000</option>
                    <option value="30000-50000">30,000 - 50,000</option>
                    <option value="50000+">50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">Bedrooms</label>
                  <select
                    value={selectedFilters.bedrooms}
                    onChange={(e) => setSelectedFilters({...selectedFilters, bedrooms: e.target.value})}
                    className="w-full px-4 py-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <option value="all">Any</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">Property Type</label>
                  <select
                    value={selectedFilters.propertyType}
                    onChange={(e) => setSelectedFilters({...selectedFilters, propertyType: e.target.value})}
                    className="w-full px-4 py-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <option value="all">All Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="studio">Studio</option>
                    <option value="room">Room</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">Sort By</label>
                  <select
                    value={selectedFilters.sortBy}
                    onChange={(e) => setSelectedFilters({...selectedFilters, sortBy: e.target.value})}
                    className="w-full px-4 py-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-white/80">
              <span className="font-bold text-white text-xl">{properties.length}</span> properties found
            </p>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
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
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                  >
                    {property.type}
                  </span>
                  {property.verified && (
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                    >
                      ✓ Verified
                    </span>
                  )}
                </div>

                {/* Favorite & Views */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(property.id);
                    }}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all"
                  >
                    <Heart 
                      className={`w-5 h-5 ${favorites.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                    />
                  </button>
                  <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Eye className="w-4 h-4 text-white" />
                    <span className="text-white text-xs font-semibold">{property.views}</span>
                  </div>
                </div>

                {/* Price */}
                <div 
                  className="absolute bottom-3 right-3 px-4 py-2 rounded-full text-sm font-bold text-white"
                  style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)' }}
                >
                  NPR {property.price.toLocaleString()}/mo
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-bold">{property.rating}</span>
                    <span className="text-white/60 text-sm">({property.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-2 text-white/70 mb-4">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm line-clamp-1">{property.location}</span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-white/60 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} Bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} Bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{property.area} sq.ft</span>
                  </div>
                </div>

                <button
                  className="w-full py-3 rounded-xl text-white font-semibold transition-all hover:scale-105"
                  onClick={() => openPropertyModal(property)}
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

        {/* Load More */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            Load More Properties
          </button>
        </div>
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ 
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={closePropertyModal}
        >
          <div 
            className="w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl"
            style={{
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePropertyModal}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-96 bg-black">
              <img
                src={selectedProperty.images[currentImageIndex]}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {selectedProperty.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProperty.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                >
                  {selectedProperty.type}
                </span>
                {selectedProperty.verified && (
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                  >
                    ✓ Verified
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedProperty.title}
                      </h2>
                      <div className="flex items-center gap-2 text-white/70 mb-3">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">{selectedProperty.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span className="text-white font-bold text-lg">{selectedProperty.rating}</span>
                          <span className="text-white/60">({selectedProperty.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(selectedProperty.id);
                        }}
                        className="p-3 rounded-full hover:bg-white/10 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Heart 
                          className={`w-5 h-5 ${favorites.includes(selectedProperty.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                        />
                      </button>
                      <button
                        className="p-3 rounded-full hover:bg-white/10 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div 
                    className="p-6 rounded-2xl mb-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-baseline gap-2 mb-2">
                      <span 
                        className="text-4xl font-bold"
                        style={{
                          background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent'
                        }}
                      >
                        NPR {selectedProperty.price.toLocaleString()}
                      </span>
                      <span className="text-white/60 text-xl">/month</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <Calendar className="w-4 h-4" />
                      <span>Available from: {selectedProperty.availableFrom}</span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div 
                    className="p-6 rounded-2xl mb-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4">Property Details</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-xl bg-white/5">
                        <Bed className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">{selectedProperty.bedrooms}</p>
                        <p className="text-white/60 text-sm">Bedrooms</p>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/5">
                        <Bath className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">{selectedProperty.bathrooms}</p>
                        <p className="text-white/60 text-sm">Bathrooms</p>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/5">
                        <span className="text-2xl mx-auto mb-2 block">📐</span>
                        <p className="text-2xl font-bold text-white">{selectedProperty.area}</p>
                        <p className="text-white/60 text-sm">sq.ft</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div 
                    className="p-6 rounded-2xl mb-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-3">Description</h3>
                    <p className="text-white/70 leading-relaxed">
                      {selectedProperty.description}
                    </p>
                  </div>

                  {/* Amenities */}
                  <div 
                    className="p-6 rounded-2xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4">Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedProperty.amenities.map((amenity, index) => {
                        const IconComponent = amenityIcons[amenity];
                        return (
                          <div 
                            key={index}
                            className="flex items-center gap-2 p-3 rounded-xl bg-white/5"
                          >
                            {typeof IconComponent === 'string' ? (
                              <span className="text-xl">{IconComponent}</span>
                            ) : IconComponent ? (
                              <IconComponent className="w-5 h-5 text-blue-400" />
                            ) : (
                              <span className="text-xl">✓</span>
                            )}
                            <span className="text-white text-sm">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Owner Info & Actions */}
                <div className="lg:col-span-1">
                  <div 
                    className="sticky top-8 p-6 rounded-2xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-4">Property Owner</h3>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={selectedProperty.owner.avatar}
                        alt={selectedProperty.owner.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-white font-semibold">{selectedProperty.owner.name}</p>
                          {selectedProperty.owner.verified && (
                            <span className="text-xs text-green-400">✓</span>
                          )}
                        </div>
                        <p className="text-white/60 text-sm">Property Owner</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <a
                        href={`tel:${selectedProperty.owner.phone}`}
                        className="flex items-center gap-3 p-3 rounded-xl text-white hover:bg-white/10 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Phone className="w-5 h-5 text-green-400" />
                        <span className="text-sm">{selectedProperty.owner.phone}</span>
                      </a>
                      <a
                        href={`mailto:${selectedProperty.owner.email}`}
                        className="flex items-center gap-3 p-3 rounded-xl text-white hover:bg-white/10 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Mail className="w-5 h-5 text-blue-400" />
                        <span className="text-sm">{selectedProperty.owner.email}</span>
                      </a>
                    </div>

                    <div className="space-y-3">
                      <button
                        className="w-full py-3 rounded-xl text-white font-bold transition-all hover:scale-105"
                        style={{
                          background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                        }}
                      >
                        Book Now
                      </button>
                      <button
                        className="w-full py-3 rounded-xl text-white font-semibold hover:bg-white/15 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        Schedule Visit
                      </button>
                      <button
                        className="w-full py-3 rounded-xl text-white font-semibold hover:bg-white/15 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        Send Message
                      </button>
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                      <p className="text-yellow-400 text-sm">
                        💡 <strong>Tip:</strong> Schedule a visit to view the property before booking!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
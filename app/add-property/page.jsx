"use client";
import { useState } from 'react';
import { Upload, X, MapPin, Home, DollarSign, Bed, Bath, Wifi, Car, Utensils, Droplet, Zap, Wind } from 'lucide-react';

export default function AddPropertyPage() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    propertyType: 'apartment',
    address: '',
    city: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    amenities: []
  });

  const amenitiesList = [
    { id: 'wifi', label: 'WiFi', icon: Wifi },
    { id: 'parking', label: 'Parking', icon: Car },
    { id: 'kitchen', label: 'Kitchen', icon: Utensils },
    { id: 'water', label: '24/7 Water', icon: Droplet },
    { id: 'electricity', label: 'Power Backup', icon: Zap },
    { id: 'ac', label: 'AC', icon: Wind }
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Math.random(),
      url: URL.createObjectURL(file),
      file
    }));
    setImages([...images, ...newImages]);
  };

  const removeImage = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  const toggleAmenity = (amenityId) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter(a => a !== amenityId)
        : [...prev.amenities, amenityId]
    }));
  };

  const handleSubmit = () => {
    console.log('Property added:', formData, images);
    alert('Property added successfully!');
  };

  return (
    <div 
      className="min-h-screen py-24 px-6"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div 
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-2 text-center"
            style={{
              background: 'linear-gradient(to right, #ffffff, #dbeafe, #e9d5ff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Add New Property
          </h1>
          <p className="text-white/60 text-center mb-8">Fill in the details to list your property</p>

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-white/80 mb-2 font-medium">Property Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="e.g., Spacious 2BHK Apartment"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-white/80 mb-2 font-medium">Property Type</label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                className="w-full px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="room">Single Room</option>
                <option value="studio">Studio</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-white/80 mb-2 font-medium">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe your property..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>

            {/* Location */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 mb-2 font-medium">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Street address"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-medium">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  placeholder="City name"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
            </div>

            {/* Property Details */}
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-white/80 mb-2 font-medium">Price (NPR)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  placeholder="15000"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-medium">Bedrooms</label>
                <input
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                  placeholder="2"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-medium">Bathrooms</label>
                <input
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                  placeholder="1"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-medium">Area (sq.ft)</label>
                <input
                  type="number"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  placeholder="800"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
            </div>

            {/* Amenities */}
            <div>
              <label className="block text-white/80 mb-3 font-medium">Amenities</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {amenitiesList.map((amenity) => (
                  <button
                    key={amenity.id}
                    type="button"
                    onClick={() => toggleAmenity(amenity.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                      formData.amenities.includes(amenity.id)
                        ? 'bg-blue-500/30 border-blue-400'
                        : 'bg-white/5 border-white/10'
                    }`}
                    style={{
                      border: '1px solid'
                    }}
                  >
                    <amenity.icon className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">{amenity.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-white/80 mb-3 font-medium">Property Images</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative group">
                    <img 
                      src={image.url} 
                      alt="Property" 
                      className="w-full h-32 object-cover rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="absolute top-2 right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ))}
                
                <label 
                  className="flex flex-col items-center justify-center h-32 rounded-xl cursor-pointer hover:bg-white/10 transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '2px dashed rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Upload className="w-8 h-8 text-white/60 mb-2" />
                  <span className="text-white/60 text-sm">Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
              }}
            >
              Add Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
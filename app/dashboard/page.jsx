'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, User, Building2, MessageSquare, Heart, Calendar, Settings, LogOut, Plus, Eye } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [userRole, setUserRole] = useState('landowner'); // or 'customer'
  
  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+977 9841234567',
    location: 'Kathmandu, Nepal',
    joinedDate: 'Nov 2024',
    profileImage: 'https://ui-avatars.com/api/?name=John+Doe&size=200&background=a855f7&color=fff'
  };

  // Mock stats
  const stats = {
    landowner: {
      properties: 5,
      bookings: 12,
      revenue: 'NPR 45,000'
    },
    customer: {
      bookings: 3,
      favorites: 8,
      reviews: 2
    }
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div 
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            filter: 'blur(60px)',
            top: '0',
            right: '0',
            animation: 'blob 12s infinite ease-in-out'
          }}
        ></div>
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <div 
          className="w-64 p-6 flex flex-col"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Logo */}
          <div 
            className="flex items-center gap-3 mb-8 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Home className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">Awaas</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <button 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white"
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>

            {userRole === 'landowner' ? (
              <>
                <button 
                  onClick={() => router.push('/dashboard/properties')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white/70"
                >
                  <Building2 className="w-5 h-5" />
                  <span>My Properties</span>
                </button>
                <button 
                  onClick={() => router.push('/dashboard/add-property')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white/70"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Property</span>
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => router.push('/dashboard/bookings')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white/70"
                >
                  <Calendar className="w-5 h-5" />
                  <span>My Bookings</span>
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white/70"
                >
                  <Heart className="w-5 h-5" />
                  <span>Favorites</span>
                </button>
              </>
            )}

            <button 
              onClick={() => router.push('/dashboard/messages')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white/70"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Messages</span>
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white/70">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </nav>

          {/* Logout */}
          <button 
            onClick={() => router.push('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 transition text-red-400 mt-4"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, {userData.name}!
              </h1>
              <p className="text-white/60">
                {userRole === 'landowner' ? 'Manage your properties and bookings' : 'Explore and manage your bookings'}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {userRole === 'landowner' ? (
                <>
                  <div 
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
                      >
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-white">{stats.landowner.properties}</span>
                    </div>
                    <p className="text-white/70 font-medium">Total Properties</p>
                  </div>

                  <div 
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                      >
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-white">{stats.landowner.bookings}</span>
                    </div>
                    <p className="text-white/70 font-medium">Active Bookings</p>
                  </div>

                  <div 
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                      >
                        <span className="text-2xl text-white">₨</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{stats.landowner.revenue}</span>
                    </div>
                    <p className="text-white/70 font-medium">Monthly Revenue</p>
                  </div>
                </>
              ) : (
                <>
                  <div 
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                      >
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-white">{stats.customer.bookings}</span>
                    </div>
                    <p className="text-white/70 font-medium">Active Bookings</p>
                  </div>

                  <div 
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}
                      >
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-white">{stats.customer.favorites}</span>
                    </div>
                    <p className="text-white/70 font-medium">Saved Properties</p>
                  </div>

                  <div 
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                      >
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-white">{stats.customer.reviews}</span>
                    </div>
                    <p className="text-white/70 font-medium">Reviews Written</p>
                  </div>
                </>
              )}
            </div>

            {/* Profile Info */}
            <div 
              className="rounded-3xl p-8"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
              
              <div className="flex items-start gap-8">
                <img 
                  src={userData.profileImage} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-2xl"
                />
                
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="text-white/60 text-sm">Full Name</label>
                    <p className="text-white text-lg font-medium">{userData.name}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-sm">Email</label>
                      <p className="text-white font-medium">{userData.email}</p>
                    </div>
                    <div>
                      <label className="text-white/60 text-sm">Phone</label>
                      <p className="text-white font-medium">{userData.phone}</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-white/60 text-sm">Location</label>
                    <p className="text-white font-medium">{userData.location}</p>
                  </div>
                  
                  <div>
                    <label className="text-white/60 text-sm">Member Since</label>
                    <p className="text-white font-medium">{userData.joinedDate}</p>
                  </div>

                  <button 
                    className="px-6 py-3 rounded-xl font-semibold text-white transition hover:scale-105"
                    style={{
                      background: 'linear-gradient(to right, #a855f7, #ec4899)',
                      boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Role Switcher (for demo) */}
            <div className="mt-8 text-center">
              <p className="text-white/60 text-sm mb-2">Demo: Switch Role</p>
              <button
                onClick={() => setUserRole(userRole === 'landowner' ? 'customer' : 'landowner')}
                className="px-6 py-2 rounded-xl text-white font-medium hover:bg-white/10 transition"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                Switch to {userRole === 'landowner' ? 'Customer' : 'Landowner'} View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
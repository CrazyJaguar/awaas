'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Home, Users, Shield, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  const router = useRouter();

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
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <ArrowLeft className="w-5 h-5 text-white" />
          <span className="text-white font-medium">Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Awaas
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect living space in Nepal
          </p>
        </div>

        {/* Mission Section */}
        <div 
          className="rounded-3xl p-10 mb-8"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="p-4 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
            >
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-white/70 text-lg leading-relaxed">
            Awaas is dedicated to revolutionizing the rental housing market in Nepal. We connect property owners with customers seeking their ideal living spaces, making the process seamless, transparent, and efficient. Our platform empowers landowners to showcase their properties while helping customers find their perfect home with ease.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex justify-center mb-4">
              <div 
                className="p-4 rounded-xl"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
              >
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Trust & Safety</h3>
            <p className="text-white/60">
              Verified properties and secure transactions for peace of mind
            </p>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex justify-center mb-4">
              <div 
                className="p-4 rounded-xl"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
            <p className="text-white/60">
              Building strong connections between owners and renters
            </p>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex justify-center mb-4">
              <div 
                className="p-4 rounded-xl"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Customer Care</h3>
            <p className="text-white/60">
              24/7 support to help you every step of the way
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div 
          className="rounded-3xl p-10"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-white/70 text-lg leading-relaxed">
            <p>
              Founded in 2024, Awaas emerged from a simple observation: finding quality rental housing in Nepal shouldn't be difficult. We recognized the challenges faced by both property owners struggling to reach genuine renters and customers spending countless hours searching for suitable accommodations.
            </p>
            <p>
              Our platform bridges this gap with cutting-edge technology, intuitive design, and a deep understanding of the Nepali rental market. We're committed to making housing accessible, affordable, and hassle-free for everyone.
            </p>
            <p>
              Today, Awaas serves thousands of users across Nepal, from bustling Kathmandu to serene Pokhara, helping people find not just houses, but homes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
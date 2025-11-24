'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Building2, User, Home, Menu, X, Search, Headphones, Globe, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
import { translations } from '@/lib/translations';

export default function HomePage() {
  const router = useRouter();
  const [showLandowner, setShowLandowner] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [language, setLanguage] = useState('English');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLandownerClick = () => {
    setShowLandowner(!showLandowner);
    setShowCustomer(false);
  };

  const handleCustomerClick = () => {
    setShowCustomer(!showCustomer);
    setShowLandowner(false);
  };

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleLanguage = () => setShowLanguage(!showLanguage);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguage(false);
  };

  const preventCopy = (e) => {
    e.preventDefault();
    return false;
  };

  const text = translations[language];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      onCopy={preventCopy}
      onCut={preventCopy}
      style={{ 
        userSelect: 'none', 
        WebkitUserSelect: 'none', 
        MozUserSelect: 'none', 
        msUserSelect: 'none',
        background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute rounded-full opacity-20"
          style={{
            width: '600px',
            height: '600px',
            background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
            filter: 'blur(60px)',
            mixBlendMode: 'multiply',
            top: '-192px',
            left: '-192px',
            animation: 'blob 12s infinite ease-in-out'
          }}
        ></div>
        <div 
          className="absolute rounded-full opacity-20"
          style={{
            width: '600px',
            height: '600px',
            background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
            filter: 'blur(60px)',
            mixBlendMode: 'multiply',
            top: '-192px',
            right: '-192px',
            animation: 'blob 12s infinite ease-in-out 2s'
          }}
        ></div>
        <div 
          className="absolute rounded-full opacity-20"
          style={{
            width: '600px',
            height: '600px',
            background: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
            filter: 'blur(60px)',
            mixBlendMode: 'multiply',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'blob 12s infinite ease-in-out 4s'
          }}
        ></div>
        
        <div 
          className="absolute inset-0 transition-all duration-300"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 50%)`
          }}
        ></div>
        
        {mounted && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float 6s infinite ease-in-out ${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-3 px-6 py-3 rounded-full group hover:bg-white/10 transition-all duration-300 cursor-pointer"
            onClick={() => router.push('/')}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="relative">
              <Home className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span 
              className="text-2xl font-bold"
              style={{
                background: 'linear-gradient(to right, #ffffff, #dbeafe, #e9d5ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >Awaas</span>
          </div>
          
          <div className="flex gap-3">
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="rounded-xl shadow-lg p-3 hover:bg-white/15 transition-all duration-300 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Globe className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </button>

              {showLanguage && (
                <div 
                  className="absolute top-16 right-0 rounded-2xl shadow-2xl overflow-hidden z-50 w-48"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    animation: 'fadeIn 0.3s ease-out'
                  }}
                >
                  <div 
                    onClick={() => selectLanguage('English')}
                    className="w-full px-6 py-3 hover:bg-white/10 transition text-left text-white font-medium cursor-pointer"
                  >
                    English {language === 'English' && '✓'}
                  </div>
                  <div 
                    onClick={() => selectLanguage('नेपाली')}
                    className="w-full px-6 py-3 hover:bg-white/10 transition text-left text-white font-medium cursor-pointer"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    नेपाली {language === 'नेपाली' && '✓'}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleMenu}
                className="rounded-xl shadow-lg p-3 hover:bg-white/15 transition-all duration-300 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {showMenu ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />}
              </button>

              {showMenu && (
                <div 
                  className="absolute top-16 right-0 rounded-2xl shadow-2xl overflow-hidden z-50 w-64"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    animation: 'fadeIn 0.3s ease-out'
                  }}
                >
                  <button 
                  onClick={() => router.push('/search')}
                  className="w-full flex items-center gap-3 px-6 py-4 hover:bg-white/10 transition text-left group">
                    <
                      Search className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium">{text.search}</span>
                  </button>
                  <button 
                    className="w-full flex items-center gap-3 px-6 py-4 hover:bg-white/10 transition text-left group"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <Headphones className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium">{text.customerSupport}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-20" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <div 
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'fadeIn 0.5s ease-out'
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80 font-medium">Perfect Housing Solution</span>
          </div>
          
          <h1 
            className="font-black mb-6"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              animation: 'fadeIn 0.5s ease-out 0.1s backwards'
            }}
          >
            <span 
              style={{
                background: 'linear-gradient(to right, #ffffff, #dbeafe, #e9d5ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))'
              }}
            >
              {text.welcomeTo}
            </span>
          </h1>
          
          <p 
            className="text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed" 
            style={{ 
              fontSize: 'clamp(1.25rem, 2vw, 1.875rem)',
              animation: 'fadeIn 0.5s ease-out 0.2s backwards'
            }}
          >
            {text.tagline}
          </p>

          <div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s backwards' }}
          >
            {[
              { icon: Shield, text: 'Secure', color: 'text-green-400' },
              { icon: Zap, text: 'Fast', color: 'text-yellow-400' },
              { icon: TrendingUp, text: 'Trusted', color: 'text-blue-400' }
            ].map((item, i) => (
              <div 
                key={i}
                className="px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <item.icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-white/80 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {/* Landowner Card */}
          <div 
            className="rounded-3xl shadow-2xl p-10 group relative overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'slideIn 0.6s ease-out',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-50"
                    style={{ 
                      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                      filter: 'blur(30px)',
                      animation: 'pulse 3s infinite'
                    }}
                  ></div>
                  <div 
                    className="relative p-6 rounded-3xl shadow-2xl"
                    style={{ 
                      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                      animation: 'float 6s infinite ease-in-out'
                    }}
                  >
                    <Building2 className="w-14 h-14 text-white" />
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4 text-center group-hover:scale-105 transition-transform">
                {text.landowner}
              </h2>
              <p className="text-white/70 mb-8 text-center text-lg leading-relaxed">
                {text.landownerDesc}
              </p>
              
              <button
                onClick={handleLandownerClick}
                className="w-full text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(to right, #3b82f6, #2563eb, #06b6d4)',
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
                }}
              >
                {text.getStarted}
              </button>

              {showLandowner && (
                <div className="mt-6 space-y-3" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                  <button 
                    onClick={() => router.push('/login')}
                    className="w-full text-white py-4 rounded-2xl font-semibold hover:bg-white/15 transition-all shadow-lg"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {text.login}
                  </button>
                  <button 
                    onClick={() => router.push('/signup')}
                    className="w-full text-white py-4 rounded-2xl font-semibold hover:bg-white/15 transition-all"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {text.signUp}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Customer Card */}
          <div 
            className="rounded-3xl shadow-2xl p-10 group relative overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'slideIn 0.6s ease-out 0.1s backwards',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-50"
                    style={{ 
                      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                      filter: 'blur(30px)',
                      animation: 'pulse 3s infinite'
                    }}
                  ></div>
                  <div 
                    className="relative p-6 rounded-3xl shadow-2xl"
                    style={{ 
                      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                      animation: 'float 6s infinite ease-in-out'
                    }}
                  >
                    <User className="w-14 h-14 text-white" />
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4 text-center group-hover:scale-105 transition-transform">
                {text.customer}
              </h2>
              <p className="text-white/70 mb-8 text-center text-lg leading-relaxed">
                {text.customerDesc}
              </p>
              
              <button
                onClick={handleCustomerClick}
                className="w-full text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(to right, #a855f7, #ec4899, #db2777)',
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.3)'
                }}
              >
                {text.getStarted}
              </button>

              {showCustomer && (
                <div className="mt-6 space-y-3" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                  <button 
                    onClick={() => router.push('/explore')}
                    className="w-full text-white py-4 rounded-2xl font-semibold hover:bg-white/15 transition-all"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {text.exploreRooms}
                  </button>
                  <button 
                    onClick={() => router.push('/login')}
                    className="w-full text-white py-4 rounded-2xl font-semibold hover:bg-white/15 transition-all shadow-lg"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {text.login}
                  </button>
                  <button 
                    onClick={() => router.push('/signup')}
                    className="w-full text-white py-4 rounded-2xl font-semibold hover:bg-white/15 transition-all"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {text.signUp}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-6" style={{ transform: `translateY(-${scrollY * 0.1}px)`, animation: 'fadeIn 0.5s ease-out' }}>
          <div className="flex justify-center gap-8 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors hover:underline">
              {text.termsOfService}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors hover:underline">
              {text.privacyPolicy}
            </a>
          </div>
          <p className="text-white/40 text-sm font-medium">
            {text.designedBy}
          </p>
        </div>
      </main>
    </div>
  );
}
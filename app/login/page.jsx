'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, LogIn } from 'lucide-react';
import { translations } from '@/lib/translations';

export default function LoginPage() {
  const router = useRouter();
  const [language, setLanguage] = useState('English');
  const text = translations[language];

  const preventCopy = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center p-6"
      onCopy={preventCopy}
      onCut={preventCopy}
      style={{ 
        userSelect: 'none',
        background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
      }}
    >
      {/* Background Blobs */}
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
            background: 'linear-gradient(135deg, #9333ea, #ec4899)',
            filter: 'blur(60px)',
            bottom: '-100px',
            right: '-100px',
            animation: 'blob 12s infinite ease-in-out 4s'
          }}
        ></div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition z-10"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <ArrowLeft className="w-5 h-5 text-white" />
        <span className="text-white font-medium">{text.back}</span>
      </button>

      {/* Login Form */}
      <div 
        className="relative z-10 w-full max-w-md rounded-3xl shadow-2xl p-10"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          animation: 'fadeIn 0.5s ease-out'
        }}
      >
        <div className="text-center mb-8">
          <div 
            className="inline-flex p-4 rounded-2xl mb-4"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
          >
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{text.login}</h1>
          <p className="text-white/60">Welcome back to Awaas</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-white/90 mb-2 font-medium">
              {text.phoneUsername}
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder={text.enterPhoneUsername}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                userSelect: 'text',
                WebkitUserSelect: 'text'
              }}
              onCopy={(e) => e.stopPropagation()}
            />
          </div>

          <div>
            <label className="block text-white/90 mb-2 font-medium">
              {text.password}
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder={text.enterPassword}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                userSelect: 'text',
                WebkitUserSelect: 'text'
              }}
              onCopy={(e) => e.stopPropagation()}
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition">
              {text.forgotPassword}
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #3b82f6, #2563eb, #06b6d4)',
              boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
            }}
          >
            {text.loginButton}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-white/60">
            {text.noAccount}{' '}
            <button 
              onClick={() => router.push('/signup')}
              className="text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              {text.createAccount}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
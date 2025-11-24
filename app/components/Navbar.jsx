'use client';
import { useState } from 'react';
import { Home, Search, MessageSquare, Building2, User, LogIn, LogOut, Menu, X, Plus } from 'lucide-react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change based on auth state
  const [userRole, setUserRole] = useState('customer'); // 'customer' or 'landowner'

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-slate-900/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/"
          className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          <Home className="w-6 h-6 text-white" />
          <span 
            className="text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Awaas
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <a 
            href="/explore"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Explore</span>
          </a>
          
          {isLoggedIn && (
            <>
              <a 
                href="/messages"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
              </a>

              {userRole === 'landowner' && (
                <>
                  <a 
                    href="/add-property"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Property</span>
                  </a>
                  <a 
                    href="/my-properties"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all"
                  >
                    <Building2 className="w-4 h-4" />
                    <span>My Properties</span>
                  </a>
                </>
              )}

              <a 
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </a>

              <button 
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white hover:bg-red-500/20 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </>
          )}

          {!isLoggedIn && (
            <a 
              href="/login"
              className="flex items-center gap-2 px-6 py-2 rounded-xl text-white font-semibold transition-all hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-all"
        >
          {showMenu ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div 
          className="md:hidden mt-4 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <a 
            href="/explore"
            className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10"
          >
            <Search className="w-5 h-5" />
            <span>Explore</span>
          </a>

          {isLoggedIn && (
            <>
              <a 
                href="/messages"
                className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Messages</span>
              </a>

              {userRole === 'landowner' && (
                <>
                  <a 
                    href="/add-property"
                    className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Property</span>
                  </a>
                  <a 
                    href="/my-properties"
                    className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10"
                  >
                    <Building2 className="w-5 h-5" />
                    <span>My Properties</span>
                  </a>
                </>
              )}

              <a 
                href="/profile"
                className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </a>

              <button 
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-3 px-6 py-4 text-white hover:bg-red-500/20 transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </>
          )}

          {!isLoggedIn && (
            <a 
              href="/login"
              className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 transition-all"
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
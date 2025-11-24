'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function TermsPage() {
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
            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
            filter: 'blur(60px)',
            top: '-100px',
            left: '-100px',
            animation: 'blob 12s infinite ease-in-out'
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 pb-20">
        <div className="text-center mb-12">
          <div 
            className="inline-flex p-4 rounded-2xl mb-4"
            style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
          >
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/60">Last updated: November 2024</p>
        </div>

        {/* Introduction */}
        <div 
          className="rounded-3xl p-8 mb-8"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <p className="text-white/70 text-lg leading-relaxed">
            Welcome to Awaas. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {/* User Accounts */}
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">1. User Accounts</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p>• You must be at least 18 years old to create an account</p>
              <p>• You are responsible for maintaining the security of your account</p>
              <p>• You must provide accurate and complete information</p>
              <p>• One person or entity may not maintain more than one account</p>
            </div>
          </div>

          {/* Property Listings */}
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">2. Property Listings</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p>• Landowners must have legal authority to list properties</p>
              <p>• All listings must be accurate and not misleading</p>
              <p>• Photos and descriptions must represent the actual property</p>
              <p>• Awaas reserves the right to remove any listing that violates our policies</p>
            </div>
          </div>

          {/* Bookings & Payments */}
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">3. Bookings & Payments</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p>• All bookings are subject to landowner approval</p>
              <p>• Payment terms are set by individual landowners</p>
              <p>• Awaas may charge service fees for facilitating transactions</p>
              <p>• Refund policies vary by property and must be reviewed before booking</p>
            </div>
          </div>

          {/* Prohibited Activities */}
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">4. Prohibited Activities</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p>• Fraudulent or misleading listings</p>
              <p>• Harassment or discrimination against users</p>
              <p>• Attempting to bypass our payment system</p>
              <p>• Scraping or automated data collection</p>
              <p>• Violating any applicable laws or regulations</p>
            </div>
          </div>

          {/* Liability */}
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p>• Awaas acts as a platform connecting landowners and customers</p>
              <p>• We are not responsible for the condition or quality of properties</p>
              <p>• Users assume all risks associated with transactions</p>
              <p>• Our liability is limited to the amount of fees paid to us</p>
            </div>
          </div>

          {/* Termination */}
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-400" />
              <h2 className="text-2xl font-bold text-white">6. Account Termination</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p>• You may close your account at any time</p>
              <p>• We may suspend or terminate accounts that violate these terms</p>
              <p>• Upon termination, you lose access to all account data</p>
              <p>• Certain provisions survive account termination</p>
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div 
          className="rounded-3xl p-8 mt-8"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
          <p className="text-white/70 leading-relaxed">
            We reserve the right to modify these terms at any time. We will notify users of significant changes via email or platform notification. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>
        </div>

        {/* Contact */}
        <div 
          className="rounded-3xl p-8 mt-8 text-center"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">Questions About Terms?</h2>
          <p className="text-white/70 mb-4">
            If you have any questions about these Terms of Service, contact us at:
          </p>
          <a 
            href="mailto:legal@awaas.com" 
            className="text-purple-400 hover:text-purple-300 font-semibold transition"
          >
            legal@awaas.com
          </a>
        </div>
      </div>
    </div>
  );
}
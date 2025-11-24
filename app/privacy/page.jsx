'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPage() {
  const router = useRouter();

  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, including name, email address, phone number, and location when you create an account or list a property. We also collect information about your use of our services, including search queries, property views, and booking history.'
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to process your transactions, to send you technical notices and support messages, and to communicate with you about products, services, and events.'
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: 'We do not sell your personal information. We may share your information with property owners when you make a booking inquiry, with service providers who assist in our operations, and when required by law or to protect our rights.'
    },
    {
      icon: Eye,
      title: 'Your Privacy Rights',
      content: 'You have the right to access, update, or delete your personal information at any time through your account settings. You can also opt out of marketing communications and request a copy of your data.'
    }
  ];

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
            right: '-100px',
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
            style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
          >
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Privacy Policy
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
            At Awaas, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully to understand our practices regarding your personal data.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                >
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-white/70 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div 
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="text-xl font-bold text-white mb-3">Data Security</h3>
            <p className="text-white/60 text-sm">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.
            </p>
          </div>

          <div 
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="text-xl font-bold text-white mb-3">Cookies</h3>
            <p className="text-white/60 text-sm">
              We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content.
            </p>
          </div>

          <div 
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="text-xl font-bold text-white mb-3">Children's Privacy</h3>
            <p className="text-white/60 text-sm">
              Our services are not intended for users under 18 years of age. We do not knowingly collect information from children.
            </p>
          </div>

          <div 
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="text-xl font-bold text-white mb-3">Policy Updates</h3>
            <p className="text-white/60 text-sm">
              We may update this policy periodically. We will notify you of significant changes via email or platform notification.
            </p>
          </div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Questions?</h2>
          <p className="text-white/70 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <a 
            href="mailto:privacy@awaas.com" 
            className="text-blue-400 hover:text-blue-300 font-semibold transition"
          >
            privacy@awaas.com
          </a>
        </div>
      </div>
    </div>
  );
}
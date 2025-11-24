'use client';
import { useState } from 'react';
import { Calendar, User, Mail, Phone, MapPin, Home, DollarSign, CreditCard, CheckCircle } from 'lucide-react';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    moveInDate: '',
    duration: '6',
    fullName: '',
    email: '',
    phone: '',
    message: '',
    paymentMethod: 'card'
  });

  const property = {
    title: 'Spacious 2BHK Apartment',
    location: 'Thamel, Kathmandu',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600'
  };

  const handleSubmit = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Booking confirmed:', bookingData);
    }
  };

  const calculateTotal = () => {
    const months = parseInt(bookingData.duration) || 0;
    const deposit = property.price;
    const rent = property.price * months;
    return {
      deposit,
      rent,
      total: deposit + rent
    };
  };

  const totals = calculateTotal();

  return (
    <div 
      className="min-h-screen py-24 px-6"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'bg-white/10 text-white/40'
                  }`}
                >
                  {step > s ? <CheckCircle className="w-6 h-6" /> : s}
                </div>
                {s < 3 && (
                  <div 
                    className={`w-20 h-1 mx-2 transition-all ${
                      step > s ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-white/10'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-32 mt-4">
            <span className={`text-sm ${step >= 1 ? 'text-white' : 'text-white/40'}`}>Details</span>
            <span className={`text-sm ${step >= 2 ? 'text-white' : 'text-white/40'}`}>Contact</span>
            <span className={`text-sm ${step >= 3 ? 'text-white' : 'text-white/40'}`}>Payment</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div 
            className="lg:col-span-2 rounded-3xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{
                background: 'linear-gradient(to right, #ffffff, #dbeafe, #e9d5ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              {step === 1 && 'Booking Details'}
              {step === 2 && 'Contact Information'}
              {step === 3 && 'Payment & Confirmation'}
            </h2>

            {/* Step 1: Booking Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Move-in Date</label>
                  <input
                    type="date"
                    value={bookingData.moveInDate}
                    onChange={(e) => setBookingData({...bookingData, moveInDate: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-medium">Duration (months)</label>
                  <select
                    value={bookingData.duration}
                    onChange={(e) => setBookingData({...bookingData, duration: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                    <option value="24">24 Months</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-medium">Additional Message (Optional)</label>
                  <textarea
                    value={bookingData.message}
                    onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                    placeholder="Any special requests or questions..."
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    value={bookingData.fullName}
                    onChange={(e) => setBookingData({...bookingData, fullName: e.target.value})}
                    placeholder="Ram Kumar Sharma"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    placeholder="ram@example.com"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                    placeholder="+977 98XXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-3 font-medium">Payment Method</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setBookingData({...bookingData, paymentMethod: 'card'})}
                      className={`p-4 rounded-xl flex items-center gap-3 transition-all ${
                        bookingData.paymentMethod === 'card'
                          ? 'bg-blue-500/30 border-blue-400'
                          : 'bg-white/5 border-white/10'
                      }`}
                      style={{ border: '1px solid' }}
                    >
                      <CreditCard className="w-5 h-5 text-white" />
                      <span className="text-white">Credit/Debit Card</span>
                    </button>
                    <button
                      onClick={() => setBookingData({...bookingData, paymentMethod: 'esewa'})}
                      className={`p-4 rounded-xl flex items-center gap-3 transition-all ${
                        bookingData.paymentMethod === 'esewa'
                          ? 'bg-blue-500/30 border-blue-400'
                          : 'bg-white/5 border-white/10'
                      }`}
                      style={{ border: '1px solid' }}
                    >
                      <DollarSign className="w-5 h-5 text-white" />
                      <span className="text-white">eSewa</span>
                    </button>
                  </div>
                </div>

                {bookingData.paymentMethod === 'card' && (
                  <>
                    <div>
                      <label className="block text-white/80 mb-2 font-medium">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 mb-2 font-medium">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2 font-medium">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 rounded-xl text-white font-semibold hover:bg-white/15 transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  Back
                </button>
              )}
              <button
                onClick={handleSubmit}
                className="flex-1 py-3 rounded-xl text-white font-bold transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
                }}
              >
                {step === 3 ? 'Confirm Booking' : 'Continue'}
              </button>
            </div>
          </div>

          {/* Summary Card */}
          <div className="space-y-6">
            <div 
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-white/60 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span 
                    className="text-2xl font-bold"
                    style={{
                      background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    NPR {property.price.toLocaleString()}
                  </span>
                  <span className="text-white/60">/month</span>
                </div>
              </div>
            </div>

            <div 
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Booking Summary</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Security Deposit</span>
                  <span>NPR {totals.deposit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rent ({bookingData.duration} months)</span>
                  <span>NPR {totals.rent.toLocaleString()}</span>
                </div>
                <div 
                  className="border-t pt-3 mt-3"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-white">Total</span>
                    <span 
                      style={{
                        background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                      }}
                    >
                      NPR {totals.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
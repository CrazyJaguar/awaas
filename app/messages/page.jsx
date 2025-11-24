'use client';
import { useState } from 'react';
import { Send, Search, MoreVertical, Paperclip, Smile } from 'lucide-react';

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Ram Kumar',
      avatar: 'https://i.pravatar.cc/150?img=12',
      lastMessage: 'Is the property still available?',
      time: '2m ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Sita Sharma',
      avatar: 'https://i.pravatar.cc/150?img=5',
      lastMessage: 'Can I visit tomorrow?',
      time: '1h ago',
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: 'Hari Prasad',
      avatar: 'https://i.pravatar.cc/150?img=33',
      lastMessage: 'Thank you for the information',
      time: '3h ago',
      unread: 0,
      online: false
    },
    {
      id: 4,
      name: 'Maya Gurung',
      avatar: 'https://i.pravatar.cc/150?img=9',
      lastMessage: 'What about parking space?',
      time: '1d ago',
      unread: 1,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'them',
      text: 'Hi! I saw your property listing in Thamel.',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'them',
      text: 'Is it still available?',
      time: '10:30 AM'
    },
    {
      id: 3,
      sender: 'me',
      text: 'Yes, it is! Would you like to schedule a visit?',
      time: '10:35 AM'
    },
    {
      id: 4,
      sender: 'them',
      text: 'That would be great! What times work for you?',
      time: '10:37 AM'
    },
    {
      id: 5,
      sender: 'me',
      text: 'I\'m available tomorrow afternoon around 2 PM. Does that work?',
      time: '10:40 AM'
    },
    {
      id: 6,
      sender: 'them',
      text: 'Perfect! See you tomorrow at 2 PM.',
      time: '10:42 AM'
    }
  ];

  const sendMessage = () => {
    if (message.trim()) {
      console.log('Sending:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const currentChat = conversations.find(c => c.id === selectedChat);

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto h-[calc(100vh-120px)]">
        <div className="h-full rounded-3xl overflow-hidden flex bg-white/5 backdrop-blur-xl border border-white/10">
          {/* Sidebar - Conversations List */}
          <div className="w-full md:w-96 border-r border-white/10 flex flex-col bg-black/20">
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 border border-white/10"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`p-4 border-b border-white/10 cursor-pointer transition-all hover:bg-white/5 ${
                    selectedChat === conv.id ? 'bg-white/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src={conv.avatar} 
                        alt={conv.name}
                        className="w-12 h-12 rounded-full"
                      />
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-white font-semibold">{conv.name}</h3>
                        <span className="text-white/40 text-xs">{conv.time}</span>
                      </div>
                      <p className="text-white/60 text-sm truncate">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500">
                        {conv.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={currentChat?.avatar} 
                    alt={currentChat?.name}
                    className="w-10 h-10 rounded-full"
                  />
                  {currentChat?.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{currentChat?.name}</h3>
                  <p className="text-white/60 text-sm">
                    {currentChat?.online ? 'Active now' : 'Offline'}
                  </p>
                </div>
              </div>
              <button className="p-2 rounded-xl hover:bg-white/10 transition-all">
                <MoreVertical className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="max-w-md">
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        msg.sender === 'me'
                          ? 'rounded-br-none bg-gradient-to-r from-blue-500 to-purple-500'
                          : 'rounded-bl-none bg-white/10 backdrop-blur-xl'
                      }`}
                    >
                      <p className="text-white">{msg.text}</p>
                    </div>
                    <p className={`text-white/40 text-xs mt-1 ${
                      msg.sender === 'me' ? 'text-right' : 'text-left'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-white/10 bg-black/20">
              <div className="flex items-end gap-3">
                <button className="p-3 rounded-xl hover:bg-white/10 transition-all">
                  <Paperclip className="w-5 h-5 text-white/60" />
                </button>
                <div className="flex-1 relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    rows="1"
                    className="w-full px-4 py-3 pr-12 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-h-[120px] bg-white/5 border border-white/10"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-white/10 transition-all">
                    <Smile className="w-5 h-5 text-white/60" />
                  </button>
                </div>
                <button 
                  onClick={sendMessage}
                  className="p-3 rounded-xl transition-all hover:scale-110 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
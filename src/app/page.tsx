"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Zap, Globe, Users, Sparkles, Crown, Heart, TrendingUp, MessageCircle, Share2, Bookmark, Plus, Search, Bell, User, Rocket, Star, Trophy } from "lucide-react"
import "./nexus-theme.css"

export default function NexusMindPlatform() {
  const [activeMode, setActiveMode] = useState("intelligence")
  const [userLevel, setUserLevel] = useState("genius")
  const [aiCompanion, setAiCompanion] = useState({ name: "ARIA", mood: "curious", intelligence: 2000 })
  
  const intelligenceModes = [
    { id: "rapid", name: "Rapid Fire", icon: Zap, color: "from-yellow-400 to-orange-500" },
    { id: "intelligence", name: "Deep Think", icon: Brain, color: "from-blue-400 to-purple-500" },
    { id: "social", name: "Empathy Mode", icon: Heart, color: "from-pink-400 to-red-500" },
    { id: "collective", name: "Hive Mind", icon: Globe, color: "from-green-400 to-blue-500" }
  ]
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: { name: "Rahul Vishwanath Dawkhar", handle: "@rahul2daw", verified: true, tier: "founder", intelligence: 2000 },
      content: "Welcome to NexusMind - where human intelligence meets superintelligent AI. This platform represents the future of social interaction, combining quantum-level personalization with revolutionary Web3 tokenomics. Join the evolution of consciousness! 🧠✨",
      type: "thought",
      engagement: { likes: 25247, shares: 5421, comments: 1487, mindSync: 834 },
      aiInsight: "This post demonstrates visionary thinking with exceptional viral potential",
      timeAgo: "1h",
      trending: true,
      tags: ["#FutureOfSocial", "#AIRevolution", "#Web3", "#Innovation", "#NexusMind"]
    }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <div className="relative">
                <Brain className="h-10 w-10 text-blue-400 animate-pulse" />
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  NexusMind
                </h1>
                <p className="text-xs text-gray-400">🚀 Created by Rahul Vishwanath Dawkhar</p>
              </div>
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search consciousness..." 
                  className="pl-10 pr-4 py-2 w-64 bg-white/10 rounded-xl text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                />
              </div>
              
              <div className="relative">
                <Bell className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
                <motion.span 
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  42
                </motion.span>
              </div>
              
              <motion.div 
                className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full px-4 py-2 border border-yellow-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <Crown className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-bold text-yellow-400">Genius Tier</span>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Choose Your Intelligence Mode
            </h2>
            <p className="text-gray-300 text-lg">Adapt your social experience to your current cognitive state</p>
          </motion.div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-2 inline-flex space-x-1 border border-white/10">
              {intelligenceModes.map((mode) => (
                <motion.button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeMode === mode.id 
                      ? `bg-gradient-to-r ${mode.color} text-white shadow-lg shadow-blue-500/25` 
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <mode.icon className="h-5 w-5" />
                  <span>{mode.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-8">
        <motion.div 
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div 
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Companion: {aiCompanion.name}</h3>
                <p className="text-purple-300">Intelligence Level: {aiCompanion.intelligence} IQ • Mood: {aiCompanion.mood}</p>
              </div>
            </div>
            <motion.button 
              className="bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-lg font-semibold"
              whileHover={{ scale: 1.1 }}
            >
              Chat with ARIA
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence>
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="mb-8 bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {post.trending && (
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 text-center font-bold">
                  🔥 TRENDING IN THE NEURAL NETWORK 🔥
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="relative w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center ring-2 ring-yellow-400/50"
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                    >
                      <span className="text-white font-bold text-lg">R</span>
                      <Crown className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400" />
                    </motion.div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-orange-400">{post.author.name}</span>
                        <span className="text-blue-500 text-xl">✓</span>
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                          👑 FOUNDER
                        </span>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {post.author.intelligence} IQ
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="text-blue-400">{post.author.handle}</span> • {post.timeAgo} • <a href="mailto:rahul2daw@gmail.com" className="text-purple-400 hover:underline">rahul2daw@gmail.com</a>
                      </div>
                    </div>
                  </div>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>

                <div className="thought-bubble mb-4">
                  <p className="text-white text-lg leading-relaxed">{post.content}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-3 rounded-lg mb-4 border border-blue-500/20">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-blue-300 font-medium">AI Insight:</span>
                    <span className="text-sm text-gray-300">{post.aiInsight}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <motion.span 
                      key={tag} 
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-6">
                    <motion.button 
                      className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="h-5 w-5" />
                      <span className="font-bold">{post.engagement.likes.toLocaleString()}</span>
                    </motion.button>
                    
                    <motion.button 
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>{post.engagement.comments.toLocaleString()}</span>
                    </motion.button>
                    
                    <motion.button 
                      className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Share2 className="h-5 w-5" />
                      <span>{post.engagement.shares.toLocaleString()}</span>
                    </motion.button>
                    
                    <motion.button 
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Brain className="h-5 w-5" />
                      <span>{post.engagement.mindSync}</span>
                      <span className="text-xs">MindSync</span>
                    </motion.button>
                  </div>
                  
                  <motion.button 
                    className="p-2 rounded-full hover:bg-yellow-500/20 text-gray-400 hover:text-yellow-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <Bookmark className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center z-50 border-2 border-white/20"
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.5)",
            "0 0 40px rgba(168, 85, 247, 0.8)",
            "0 0 20px rgba(59, 130, 246, 0.5)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Rocket className="h-8 w-8 text-white" />
      </motion.button>

      <footer className="mt-20 bg-black/40 backdrop-blur-xl border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Brain className="h-12 w-12 text-blue-400" />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              NexusMind
            </h3>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 mb-8 border border-blue-500/20">
            <h4 className="text-xl font-bold text-yellow-400 mb-2">🚀 Platform Creator & Visionary</h4>
            <h2 className="text-2xl font-bold text-white mb-3">Rahul Vishwanath Dawkhar</h2>
            <div className="flex justify-center space-x-6">
              <a href="mailto:rahul2daw@gmail.com" className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                <span>📧 rahul2daw@gmail.com</span>
              </a>
              <a href="https://github.com/rahul2daw-boop" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <span>🐙 @rahul2daw-boop</span>
              </a>
            </div>
          </div>
          
          <p className="text-sm text-gray-400">
            © 2025 NexusMind - The Superintelligent Social Platform. Created by Rahul Vishwanath Dawkhar.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            🧠 Where Human Intelligence Meets AI Superintelligence • 🌐 Powered by 2000 IQ Technology
          </p>
        </div>
      </footer>
    </div>
  )
}

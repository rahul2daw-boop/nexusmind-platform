"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Zap, Globe, Users, Sparkles, Crown, Heart, TrendingUp, MessageCircle, Share2, Bookmark, Plus, Search, Bell, User, Rocket, Star, Trophy, Send, Image, Video, Mic, Camera, Settings, Edit3 } from "lucide-react"
import "./nexus-theme.css"

export default function NexusMindPlatform() {
  const [activeMode, setActiveMode] = useState("intelligence")
  const [userLevel, setUserLevel] = useState("genius")
  const [aiCompanion, setAiCompanion] = useState({ name: "ARIA", mood: "curious", intelligence: 2000 })
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [newPost, setNewPost] = useState({ content: "", image: null })
  const [showComments, setShowComments] = useState(null)
  const [newComment, setNewComment] = useState("")
  
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
      tags: ["#FutureOfSocial", "#AIRevolution", "#Web3", "#Innovation", "#NexusMind"],
      comments: [
        { id: 1, author: "TechInnovator", content: "This is revolutionary! How do I get early access?", timeAgo: "45m", likes: 23 },
        { id: 2, author: "AIEnthusiast", content: "The quantum personalization concept is mind-blowing! 🚀", timeAgo: "32m", likes: 18 }
      ]
    }
  ])

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, engagement: { ...post.engagement, likes: post.engagement.likes + 1 } }
        : post
    ))
  }

  const handleCreatePost = () => {
    if (newPost.content.trim()) {
      const post = {
        id: posts.length + 1,
        author: { name: "Rahul Vishwanath Dawkhar", handle: "@rahul2daw", verified: true, tier: "founder", intelligence: 2000 },
        content: newPost.content,
        type: "thought",
        engagement: { likes: 0, shares: 0, comments: 0, mindSync: 0 },
        aiInsight: "AI analysis: High engagement potential detected",
        timeAgo: "now",
        trending: false,
        tags: ["#NewPost"],
        comments: []
      }
      setPosts([post, ...posts])
      setNewPost({ content: "", image: null })
      setShowCreatePost(false)
    }
  }

  const handleAddComment = (postId) => {
    if (newComment.trim()) {
      setPosts(posts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              comments: [...post.comments, { 
                id: post.comments.length + 1, 
                author: "You", 
                content: newComment, 
                timeAgo: "now", 
                likes: 0 
              }],
              engagement: { ...post.engagement, comments: post.engagement.comments + 1 }
            }
          : post
      ))
      setNewComment("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Quantum Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Navigation with Search */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <div className="relative">
                <Brain className="h-10 w-10 text-blue-400 animate-pulse cursor-pointer" />
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
                  NexusMind
                </h1>
                <p className="text-xs text-gray-400">🚀 Created by Rahul Vishwanath Dawkhar</p>
              </div>
            </motion.div>
            
            <div className="flex items-center space-x-6">
              {/* Interactive Search Box */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search consciousness..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 bg-white/10 rounded-xl text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm focus:bg-white/20 transition-all"
                />
                {searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl rounded-xl border border-white/20 p-4">
                    <p className="text-sm text-gray-300">Searching for: "{searchQuery}"</p>
                    <div className="mt-2 space-y-2">
                      <div className="p-2 hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                        <p className="text-sm">🧠 AI Topics related to "{searchQuery}"</p>
                      </div>
                      <div className="p-2 hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                        <p className="text-sm">👥 Users interested in "{searchQuery}"</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <motion.div 
                className="relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={() => console.log("Notifications clicked")}
              >
                <Bell className="h-5 w-5 hover:text-blue-400 transition-colors" />
                <motion.span 
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold cursor-pointer"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  42
                </motion.span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full px-4 py-2 border border-yellow-500/30 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => console.log("Genius tier clicked")}
              >
                <Crown className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-bold text-yellow-400">Genius Tier</span>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Intelligence Mode Selector */}
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
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all cursor-pointer ${
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

      {/* Create Post Button */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <motion.button
          onClick={() => setShowCreatePost(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-3">
            <Plus className="h-6 w-6 text-white" />
            <span className="text-white font-semibold text-lg">Share your thoughts with the NexusMind community...</span>
          </div>
        </motion.button>
      </div>

      {/* Create Post Modal */}
      <AnimatePresence>
        {showCreatePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCreatePost(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 w-full max-w-md mx-4 border border-purple-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Create New Post</h3>
                <button 
                  onClick={() => setShowCreatePost(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <textarea
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                placeholder="What revolutionary idea do you want to share?"
                className="w-full h-32 bg-white/10 rounded-lg p-4 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-3">
                  <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Image className="h-5 w-5 text-blue-400" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Video className="h-5 w-5 text-green-400" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Mic className="h-5 w-5 text-purple-400" />
                  </button>
                </div>
                
                <motion.button
                  onClick={handleCreatePost}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg font-semibold text-white cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Post
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Posts Feed */}
      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence>
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="mb-8 bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all cursor-pointer"
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
                      className="relative w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center ring-2 ring-yellow-400/50 cursor-pointer"
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                    >
                      <span className="text-white font-bold text-lg">R</span>
                      <Crown className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400" />
                    </motion.div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-orange-400 cursor-pointer hover:text-orange-300 transition-colors">{post.author.name}</span>
                        <span className="text-blue-500 text-xl">✓</span>
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                          👑 FOUNDER
                        </span>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {post.author.intelligence} IQ
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors">{post.author.handle}</span> • {post.timeAgo} • 
                        <a href="mailto:rahul2daw@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors ml-1">rahul2daw@gmail.com</a>
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
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 cursor-pointer hover:bg-blue-500/30 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      onClick={() => setSearchQuery(tag)}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Interactive Engagement Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-6">
                    <motion.button 
                      className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(post.id)}
                    >
                      <Heart className="h-5 w-5" />
                      <span className="font-bold">{post.engagement.likes.toLocaleString()}</span>
                    </motion.button>
                    
                    <motion.button 
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setShowComments(showComments === post.id ? null : post.id)}
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>{post.engagement.comments.toLocaleString()}</span>
                    </motion.button>
                    
                    <motion.button 
                      className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      onClick={() => console.log("Share clicked")}
                    >
                      <Share2 className="h-5 w-5" />
                      <span>{post.engagement.shares.toLocaleString()}</span>
                    </motion.button>
                    
                    <motion.button 
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      onClick={() => console.log("MindSync clicked")}
                    >
                      <Brain className="h-5 w-5" />
                      <span>{post.engagement.mindSync}</span>
                      <span className="text-xs">MindSync</span>
                    </motion.button>
                  </div>
                  
                  <motion.button 
                    className="p-2 rounded-full hover:bg-yellow-500/20 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    onClick={() => console.log("Bookmark clicked")}
                  >
                    <Bookmark className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Comments Section */}
                <AnimatePresence>
                  {showComments === post.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-4 border-t border-white/10 pt-4"
                    >
                      {/* Existing Comments */}
                      {post.comments.map(comment => (
                        <div key={comment.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">{comment.author[0]}</span>
                              </div>
                              <span className="font-semibold text-white">{comment.author}</span>
                              <span className="text-gray-400 text-sm">• {comment.timeAgo}</span>
                            </div>
                            <motion.button
                              className="text-gray-400 hover:text-pink-400 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              onClick={() => console.log("Like comment")}
                            >
                              <Heart className="h-4 w-4" />
                            </motion.button>
                          </div>
                          <p className="text-gray-300">{comment.content}</p>
                        </div>
                      ))}
                      
                      {/* Add Comment */}
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                          <span className="text-white font-bold">Y</span>
                        </div>
                        <div className="flex-1 flex space-x-3">
                          <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Share your thoughts..."
                            className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <motion.button
                            onClick={() => handleAddComment(post.id)}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Send className="h-5 w-5 text-white" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center z-50 border-2 border-white/20 cursor-pointer"
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowCreatePost(true)}
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.5)",
            "0 0 40px rgba(168, 85, 247, 0.8)",
            "0 0 20px rgba(59, 130, 246, 0.5)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Plus className="h-8 w-8 text-white" />
      </motion.button>

      {/* Footer */}
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
              <a href="mailto:rahul2daw@gmail.com" className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
                <span>📧 rahul2daw@gmail.com</span>
              </a>
              <a href="https://github.com/rahul2daw-boop" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
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

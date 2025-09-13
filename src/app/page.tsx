"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Brain, Zap, Globe, Heart, Crown, Plus, Search, Bell, MessageCircle, Share2, Bookmark } from "lucide-react"
import "./globals.css"

export default function NexusMindPlatform() {
  const [activeMode, setActiveMode] = useState("intelligence")
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [newPost, setNewPost] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  
  const modes = [
    { id: "rapid", name: "Rapid Fire", icon: Zap },
    { id: "intelligence", name: "Deep Think", icon: Brain },
    { id: "social", name: "Empathy Mode", icon: Heart },
    { id: "collective", name: "Hive Mind", icon: Globe }
  ]
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: { name: "Rahul Vishwanath Dawkhar", handle: "@rahul2daw" },
      content: "Welcome to NexusMind - where human intelligence meets superintelligent AI. This platform represents the future of social interaction! 🧠✨",
      engagement: { likes: 25247, comments: 1487 },
      timeAgo: "1h"
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
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: { name: "Rahul Vishwanath Dawkhar", handle: "@rahul2daw" },
        content: newPost,
        engagement: { likes: 0, comments: 0 },
        timeAgo: "now"
      }
      setPosts([post, ...posts])
      setNewPost("")
      setShowCreatePost(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Brain className="h-10 w-10 text-blue-400 animate-pulse" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  NexusMind
                </h1>
                <p className="text-xs text-gray-400">🚀 Created by Rahul Vishwanath Dawkhar</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search consciousness..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 bg-white/10 rounded-xl text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="relative">
                <Bell className="h-5 w-5 hover:text-blue-400 transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  42
                </span>
              </div>
              
              <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full px-4 py-2 border border-yellow-500/30">
                <Crown className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-bold text-yellow-400">Genius Tier</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Intelligence Modes */}
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Choose Your Intelligence Mode
            </h2>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-2 inline-flex space-x-1 border border-white/10">
              {modes.map((mode) => (
                <motion.button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all cursor-pointer ${
                    activeMode === mode.id 
                      ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg" 
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
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
        <button
          onClick={() => setShowCreatePost(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl border border-blue-500/20 hover:scale-105 transition-transform cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <Plus className="h-6 w-6 text-white" />
            <span className="text-white font-semibold text-lg">Share your thoughts with the NexusMind community...</span>
          </div>
        </button>
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 w-full max-w-md mx-4 border border-purple-500/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Create New Post</h3>
              <button 
                onClick={() => setShowCreatePost(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What revolutionary idea do you want to share?"
              className="w-full h-32 bg-white/10 rounded-lg p-4 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCreatePost}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg font-semibold text-white hover:scale-105 transition-transform cursor-pointer"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Posts Feed */}
      <div className="max-w-4xl mx-auto px-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-8 bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all"
          >
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center ring-2 ring-yellow-400/50">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-orange-400">{post.author.name}</span>
                    <span className="text-blue-500 text-xl">✓</span>
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      👑 FOUNDER
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="text-blue-400">{post.author.handle}</span> • {post.timeAgo} • 
                    <a href="mailto:rahul2daw@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors ml-1">
                      rahul2daw@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                <p className="text-white text-lg leading-relaxed">{post.content}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-6">
                  <button 
                    className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors cursor-pointer"
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart className="h-5 w-5" />
                    <span className="font-bold">{post.engagement.likes.toLocaleString()}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                    <MessageCircle className="h-5 w-5" />
                    <span>{post.engagement.comments.toLocaleString()}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors cursor-pointer">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
                
                <button className="p-2 rounded-full hover:bg-yellow-500/20 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center z-50 border-2 border-white/20 hover:scale-110 transition-transform cursor-pointer"
        onClick={() => setShowCreatePost(true)}
      >
        <Plus className="h-8 w-8 text-white" />
      </button>

      {/* Footer */}
      <footer className="mt-20 bg-black/40 backdrop-blur-xl border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 mb-8 border border-blue-500/20">
            <h4 className="text-xl font-bold text-yellow-400 mb-2">🚀 Platform Creator & Visionary</h4>
            <h2 className="text-2xl font-bold text-white mb-3">Rahul Vishwanath Dawkhar</h2>
            <div className="flex justify-center space-x-6">
              <a href="mailto:rahul2daw@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
                📧 rahul2daw@gmail.com
              </a>
              <a href="https://github.com/rahul2daw-boop" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                🐙 @rahul2daw-boop
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

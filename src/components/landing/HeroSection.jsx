import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, ArrowRight } from 'lucide-react';

const HeroSection = ({ onDemoClick, onProductsClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Revolusi Sistem Kasir Digital</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            SOFTWARE
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              HADESOLUTION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transformasi digital untuk bisnis Anda dengan sistem kasir terdepan. 
            Kelola penjualan, stok, dan analitik dalam satu platform yang powerful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl pulse-glow"
              onClick={onProductsClick}
            >
              Lihat Produk Kami
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
              onClick={onDemoClick}
            >
              Demo Gratis
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">10K+</div>
              <div className="text-gray-300">Bisnis Terpercaya</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-20 left-10 floating-animation">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-10 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-600 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, CheckCircle } from 'lucide-react';

const CtaSection = ({ onStartClick }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Siap Revolusi 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Bisnis Anda?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan bisnis yang telah merasakan transformasi digital dengan HADESOLUTION
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-12 py-6 text-xl font-bold rounded-xl pulse-glow"
              onClick={onStartClick}
            >
              Mulai Sekarang
              <Zap className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Setup dalam 5 menit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Training gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Support 24/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
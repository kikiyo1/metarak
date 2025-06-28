import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Apa Kata 
            <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent"> Pelanggan?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 italic">"{testimonial.comment}"</p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-gray-400">{testimonial.business}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
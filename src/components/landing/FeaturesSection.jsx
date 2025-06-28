import React from 'react';
import { motion } from 'framer-motion';
import { features } from '@/data/features.jsx';

const FeaturesSection = () => {
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
            Mengapa Memilih 
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> HADESOLUTION?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fitur-fitur canggih yang dirancang khusus untuk mengoptimalkan operasional bisnis Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
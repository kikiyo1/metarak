import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ShoppingCart, CheckCircle, Award, ShieldCheck, Banknote, Wallet } from 'lucide-react';

const ProductsSection = ({ onPayment }) => {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pilih Paket 
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> Terbaik</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solusi yang disesuaikan dengan kebutuhan dan skala bisnis Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative glass-effect rounded-3xl p-8 flex flex-col hover:scale-105 transition-all duration-300 ${
                index === 1 ? 'lg:scale-110 border-2 border-purple-500' : ''
              }`}
            >
              {product.highlight && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${product.color} px-6 py-2 rounded-full text-sm font-bold text-white`}>
                  {product.highlight}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-black text-white mb-2">{product.price}</div>
                  <div className="text-lg text-gray-400 line-through">{product.originalPrice}</div>
                  <div className="text-green-400 font-semibold">Hemat 40%!</div>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full mt-auto bg-gradient-to-r ${product.color} hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all duration-300`}
                onClick={() => onPayment(product)}
              >
                Beli Sekarang
                <ShoppingCart className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-green-400" />
              <span className="text-lg font-semibold">Pembayaran Aman & Terjamin</span>
            </div>
            <p className="text-gray-300 mb-4">Didukung oleh Mayar.id, semua transaksi Anda dienkripsi dan aman.</p>
            <div className="flex items-center justify-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Banknote className="w-5 h-5" />
                <span>Semua Bank</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                <span>E-Wallet</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-semibold">Garansi 30 Hari</span>
            </div>
            <p className="text-gray-300">
              Tidak puas? Dapatkan refund 100% dalam 30 hari pertama tanpa pertanyaan!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
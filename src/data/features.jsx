import React from 'react';
import { BarChart3, Shield, Smartphone, Users, CreditCard, TrendingUp } from 'lucide-react';

export const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics Real-time",
    description: "Dashboard analitik mendalam dengan visualisasi data yang memukau untuk insight bisnis yang akurat"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Keamanan Terjamin",
    description: "Enkripsi end-to-end dan backup otomatis untuk melindungi data bisnis Anda dengan maksimal"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Multi-Platform",
    description: "Akses dari desktop, tablet, atau smartphone dengan sinkronisasi data real-time"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Multi-User Management",
    description: "Kelola tim dengan role-based access control dan tracking aktivitas pengguna"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payment Gateway",
    description: "Integrasi dengan berbagai metode pembayaran digital dan e-wallet populer"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Forecasting AI",
    description: "Prediksi penjualan dan stok dengan teknologi AI untuk perencanaan bisnis yang optimal"
  }
];
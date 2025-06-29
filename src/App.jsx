import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import ProductsSection from '@/components/landing/ProductsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CtaSection from '@/components/landing/CtaSection';
import PageFooter from '@/components/landing/PageFooter';
import PaymentButton from './components/PaymentButton';

function App() {
  return (
    <div>
      <h1>Selamat Datang</h1>
      <PaymentButton />
    </div>
  );
}

export default App;

function App() {
  const { toast } = useToast();

  const handlePayment = async (product) => {
    const MAYAR_API_KEY = "API_KEY";

    toast({
      title: "🚀 Memproses pembayaran...",
      description: "Anda akan segera diarahkan ke halaman pembayaran.",
    });

    try {
      const response = await fetch('/api/payment-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MAYAR_API_KEY}`
        },
        body: JSON.stringify({
          name: product.name,
          amount: product.priceAmount,
          currency: 'IDR',
          description: product.description,
          customer: {
            name: 'Pelanggan HADESOLUTION',
            email: 'pelanggan@hadesolution.com',
            phone: '081234567890'
          },
          redirect_url: window.location.href,
        })
      });

      const data = await response.json();

      if (response.ok && data.data && data.data.url) {
        window.location.href = data.data.url;
      } else {
        console.error('Mayar API Error:', data);
        toast({
          variant: "destructive",
          title: "❌ Gagal memproses pembayaran",
          description: data.message || "Terjadi kesalahan. API Key mungkin tidak valid. Silakan coba lagi.",
          duration: 7000,
        });
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      toast({
        variant: "destructive",
        title: "❌ Gagal terhubung ke server pembayaran",
        description: "Periksa koneksi internet Anda dan coba lagi.",
        duration: 5000,
      });
    }
  };

  const handleDemoClick = () => {
    toast({
      title: "🚧 Fitur demo belum diimplementasikan",
      description: "Jangan khawatir! Anda bisa meminta implementasinya di prompt berikutnya! 🚀",
      duration: 5000,
    });
  };

  const handleScrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>SOFTWARE HADESOLUTION - Solusi Kasir Modern Terdepan</title>
        <meta name="description" content="Revolusikan bisnis Anda dengan SOFTWARE HADESOLUTION. Sistem kasir modern dengan fitur lengkap, analitik mendalam, dan integrasi pembayaran digital." />
      </Helmet>
      
      <div className="min-h-screen overflow-hidden">
        <HeroSection onDemoClick={handleDemoClick} onProductsClick={handleScrollToProducts} />
        <FeaturesSection />
        <ProductsSection onPayment={handlePayment} />
        <TestimonialsSection />
        <CtaSection onStartClick={handleScrollToProducts} />
        <PageFooter />
        <Toaster />
      </div>
    </>
  );
}

export default App;

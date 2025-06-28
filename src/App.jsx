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

function App() {
  const { toast } = useToast();

  const handlePayment = async (product) => {
    const MAYAR_API_KEY = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwZTg5YTQ1My03YzQ0LTQzZTYtYmY1ZS1hOGU1MzY4N2M1NzQiLCJhY2NvdW50SWQiOiI2ZDQzZDhiMC1kNGVkLTRkMmItOGQwMS1kMmIyZWI4YzJjOWIiLCJjcmVhdGVkQXQiOiIxNzUxMTIzNDEzOTIxIiwicm9sZSI6ImRldmVsb3BlciIsInN1YiI6InNpc3dvcm9tZXRhMTY4QGdtYWlsLmNvbSIsIm5hbWUiOiJyYWsgbWluaW1hcmtldCIsImxpbmsiOiJzaXN3b3JvLTc0Mzk3IiwiaXNTZWxmRG9tYWluIjpudWxsLCJpYXQiOjE3NTExMjM0MTN9.mvlsRbSOKlhdwmhEErEQOmie2qlJZA_yWwSUivmLoNwpax_HofFFcl7vkXQ1eyqt3hzX_EgJujd_-YAyzTmveKaiRAPMH_ji-9r-Wh3C-5X859w-XGaFqJUMmZYWC5-2NMiP_GZS8XfYikv6EZUr1NWni31Ry2JOa0kWQciw_whs0VY1dD_6KDZJ5wTAjzYmieGop2mMoMW0sFOpmxulR_EU4vBbIXzVCUhfXolKhYQizokqiJYL2Tvzd0Uti_fx2TVoGDuU69ic4wwWVCEBUWCCC3Jsp7NVQRqd3fXANzEQZxsFNiQhG-51aENo9I0nj8gntoEzHN69wltosGERag";

    toast({
      title: "🚀 Memproses pembayaran...",
      description: "Anda akan segera diarahkan ke halaman pembayaran.",
    });

    try {
      const response = await fetch('https://api.mayar.id/v1/payment_links', {
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
import { useState } from 'react';

export default function PaymentButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const payload = {
      name: 'Produk Premium',
      amount: 75000,
      currency: 'IDR',
      redirect_url: 'https://software.hadesolution.id/terima-kasih',
    };

    try {
      const res = await fetch('/api/payment-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        alert('Gagal membuat link pembayaran: ' + (data.message || 'Unknown error'));
      }
    } catch (err) {
      alert('Terjadi kesalahan koneksi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? 'Memproses...' : 'Bayar Sekarang'}
    </button>
  );
}

export default async function handler(req, res) {
  const MAYAR_API_KEY = process.env.MAYAR_API_KEY;

  const testPayload = {
    name: 'Tes Produk',
    amount: 50000,
    currency: 'IDR',
  };

  try {
    const r = await fetch('https://api.mayar.id/v1/payment_links', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAYAR_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
    });

    const data = await r.json();
    return res.status(r.status).json({ status: r.status, data });
  } catch (err) {
    return res.status(500).json({ message: 'Error saat mencoba Mayar API', error: err.message });
  }
}

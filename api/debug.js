// api/debug.js
export default async function handler(req, res) {
  const MAYAR_API_KEY = process.env.MAYAR_API_KEY;

  const testPayload = {
    name: 'Tes Produk',
    amount: 50000,
    currency: 'IDR',
  };

  const r = await fetch('https://api.mayar.id/v1/payment_links', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${MAYAR_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testPayload),
  });

  const data = await r.json();
  res.status(r.status).json({ status: r.status, data });
}

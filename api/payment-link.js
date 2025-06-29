export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST method allowed' });
  }

  const MAYAR_API_KEY = process.env.MAYAR_API_KEY;

  if (!MAYAR_API_KEY) {
    return res.status(500).json({ message: 'Missing MAYAR_API_KEY in environment variables' });
  }

  try {
    const response = await fetch('https://api.mayar.id/v1/payment_links', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${MAYAR_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ message: data.message || 'Failed to create payment link' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}

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
      'Authorization': `Bearer ${eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwZTg5YTQ1My03YzQ0LTQzZTYtYmY1ZS1hOGU1MzY4N2M1NzQiLCJhY2NvdW50SWQiOiI2ZDQzZDhiMC1kNGVkLTRkMmItOGQwMS1kMmIyZWI4YzJjOWIiLCJjcmVhdGVkQXQiOiIxNzUxMjA2MjM5NDgzIiwicm9sZSI6ImRldmVsb3BlciIsInN1YiI6InNpc3dvcm9tZXRhMTY4QGdtYWlsLmNvbSIsIm5hbWUiOiJyYWsgbWluaW1hcmtldCIsImxpbmsiOiJzaXN3b3JvLTc0Mzk3IiwiaXNTZWxmRG9tYWluIjpudWxsLCJpYXQiOjE3NTEyMDYyMzl9.S0Ra8vRbe5bCsXr7xJk01OvpPVB-vdGO1zSXl5MAVkw-eE4D6w706KbpjlmkFscbosQIzklxY22_3QdBsJHvuAxvSYbAzp6Xfjk3c71imziI8podfUahSW5TJHviMySzjkWzNzsdarxH9raFji6wbctLp9XXfuDUnTv6t49p9k6yAvkHd1Sl20j1FOF4xTUdfIb8oCY51knVSFDE0RsckGJ1Dw8XzYNHxnU6e4TfStfArkVgGUe2DX_dJQfHc2J85zZIQn8Qec9GaIJEV4x6pAXGpeA262kyWRUPVsiVRAWrDeB_3BtlnPtBdNA2bbjmcH2vFIerNS6H0pkg3kBBWw}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testPayload),
  });

  const data = await r.json();
  res.status(r.status).json({ status: r.status, data });
}

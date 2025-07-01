app.get('/scrape', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).json({ error: 'Missing url param' });

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36'
      }
    });
    res.json({ html: response.data });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch page', detail: err.toString() });
  }
});

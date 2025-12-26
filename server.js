import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Groq API endpoint
app.post('/api/groq', async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing GROQ_API_KEY environment variable' });
  }

  try {
    const { model, messages, max_tokens, temperature, stream } = req.body || {};

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model || 'llama-3.3-70b-versatile',
        messages: messages || [
          { role: 'system', content: 'You are a helpful SQL tutor.' },
          { role: 'user', content: 'Help me understand basic SELECT statements.' }
        ],
        max_tokens: typeof max_tokens === 'number' ? max_tokens : 1000,
        temperature: typeof temperature === 'number' ? temperature : 0.7,
        stream: !!stream
      })
    });

    if (!groqResponse.ok) {
      const text = await groqResponse.text();
      return res.status(groqResponse.status).json({ error: 'Groq API error', details: text });
    }

    const data = await groqResponse.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: err?.message || String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

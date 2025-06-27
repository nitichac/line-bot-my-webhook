// Simple Express webhook receiver
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send('Webhook received');
});

app.get('/', (req, res) => {
  res.send('Webhook server is running. <br/> for development purposes only.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

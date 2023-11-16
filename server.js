// server.js
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const OpenAI = require('openai');

const app = express();
const port = 30000;

// Set your OpenAI API key
const apiKey = process.env.OPENAI_API_KEY;

// Initialize OpenAI
const openai = new OpenAI({ key: apiKey });

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for handling chatbot requests
app.post('/ask', express.json(), async (req, res) => {
  try {
    // Extract user message from the request
    const userMessage = req.body.message;

    // Initial system message to set the behavior of the assistant
    const systemMessage = { role: 'system', content: 'You are a helpful assistant for answering questions about menstruation.' };

    // Send the conversation to the OpenAI API
    const completion = await openai.chat.completions.create({
      messages: [systemMessage, { role: 'user', content: userMessage }],
      model: 'gpt-3.5-turbo',
    });

    // Return the model's response
    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

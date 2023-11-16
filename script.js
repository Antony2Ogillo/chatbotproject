// public/script.js
async function sendMessage() {
    const userMessageInput = document.getElementById('user-message');
    const userMessage = userMessageInput.value;
  
    // Display user message in the chat log
    appendMessage('user', userMessage);
  
    // Send user message to the server for processing
    const response = await fetch('/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });
  
    if (response.ok) {
      // Display the model's response in the chat log
      const data = await response.json();
      const modelResponse = data.response;
      appendMessage('assistant', modelResponse);
    } else {
      console.error('Failed to get a response from the server');
    }
  
    // Clear the input field after 2 seconds (adjust as needed)
    setTimeout(() => {
      userMessageInput.value = '';
    }, 4000);
  }
  
  function appendMessage(role, content) {
    const chatLog = document.getElementById('chat-log');
    const messageContainer = document.createElement('div');
    messageContainer.className = role === 'user' ? 'user-message' : 'assistant-message';
    messageContainer.textContent = content;
    chatLog.appendChild(messageContainer);
  }
  
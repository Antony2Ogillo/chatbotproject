# chatbotproject
# Menstruation Chatbot Project

This project implements a simple chatbot that answers questions related to menstruation using the OpenAI GPT-3.5 Turbo model.

## Project Structure

The project directory structure is as follows:

- **jsbot/**
  - **public/**: Contains HTML, CSS, and JavaScript files for the frontend.
  - **app.js**: Node.js file containing the backend logic.
  - **.env**: File for storing sensitive information (e.g., API key).
  - **.gitignore**: Specifies files and directories to be ignored by Git.

## Dependencies

The following npm packages are used in this project:

- **[express](https://www.npmjs.com/package/express):** Web framework for Node.js.
  ```bash
  npm install express
  npm install openai
  npm install dotenv


  ##Create .env File:
Create a file named .env in the project root and add your OpenAI API key:


OPENAI_API_KEY=your-api-key-here

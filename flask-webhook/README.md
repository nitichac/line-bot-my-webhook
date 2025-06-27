# Webhook Server

This is a simple Express-based webhook receiver.

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm start
   ```

The server will listen on port 3000 by default.

## Usage

- POST your webhook payload to `http://localhost:3000/webhook`
- The server will log the received payload to the console.

## Example curl

```
curl -X POST http://localhost:3000/webhook -H "Content-Type: application/json" -d '{"test":123}'
```

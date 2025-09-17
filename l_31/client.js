const Redis = require('ioredis')

// Create a new Redis client (default: localhost:6379)
const client = new Redis()

module.exports = client

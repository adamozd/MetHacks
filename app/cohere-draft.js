const cohere = require('cohere');

// Initialize the Cohere Client with an API Key
const co = new cohere.Client('YOUR_API_KEY');

// Generate a prediction for a prompt
const prediction = await co.generate({
    model: 'large',
    prompt: 'co:here',
    maxTokens: 10
});

// Print the predicted text
console.log(`Prediction: ${prediction.generations[0].text}`);

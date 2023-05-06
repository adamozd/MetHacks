import cohere

# initialize the Cohere Client with an API Key
co = cohere.Client('YOUR_API_KEY')

# generate a prediction for a prompt
prediction = co.generate(
            model='large',
            prompt='co:here',
            max_tokens=10)

# print the predicted text
print('prediction: {}'.format(prediction.generations[0].text))

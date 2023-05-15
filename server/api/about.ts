import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: useRuntimeConfig().openAiApiKey,
});
const openai = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {"role": "system", "content": "You are a super positive person."},
      {"role": "user", "content": `Tell me what this website/company ${query.site} do in the most loving and epic way. Also sprinkle in some words about how amazing the site looks.`},
    ],
    max_tokens: 100,
    temperature: 0.6
  })
  return response.data.choices[0].message?.content
})
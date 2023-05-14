import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: useRuntimeConfig().openAiApiKey,
});
const openai = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const prompt = `Look at the website ${query.site}. You are an absolut fangirl of this site. Now give a summary of what this site do and looks in the most loving and epic way.`
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 1,
    max_tokens: 1000,
  })
  return response.data.choices[0].text
})
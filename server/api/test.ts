export default defineEventHandler(() => {
  return useRuntimeConfig().openAiApiKey.length
})
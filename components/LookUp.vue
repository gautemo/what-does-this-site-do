<script setup lang="ts">
const site = ref('')
const checkSite = ref('')
const { data, pending, error } = await useFetch(() => `/api/about?site=${checkSite.value}`, { immediate: false, retry: false })
</script>

<template>
  <form @submit.prevent="checkSite = site">
    <input type="url" v-model="site" placeholder="e.g. https://gaute.dev">
    <button :disabled="pending && !site">
      <svg v-if="pending && checkSite" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;.2"/></circle><circle cx="12" cy="12" r="3" fill="currentColor" opacity=".4"><animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" values="1;.2"/></circle><circle cx="20" cy="12" r="3" fill="currentColor" opacity=".3"><animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s" values="1;.2"/></circle></svg>
      <span v-else>explain me plz</span>
    </button>
  </form>
  <p class="info">beware - this can result in a boost of confidence</p>
  <p class="result" v-if="data">{{ data }}</p>
  <p class="error" v-if="error">Something went wrong, maybe I'm out of usage limit and need more money</p>
</template>

<style scoped>
input {
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #333;
  padding: 5px 10px;
}

button {
  background-color: var(--pink);
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  color: black;
}

button:disabled {
  background-color: #ff9bac;
}

.info {
  border-radius: 5px;
  background-color: #9BDEAC;
  padding: 5px 10px;
  color: black;
}

.result {
  background-color: var(--pink);
  border-radius: 5px;
  padding: 1rem;
  max-width: 500px;
  color: black;
}

form {
  display: flex;
  flex-direction: column;
}

.error {
  background-color: #9f0000;
  color: white;
  border-radius: 5px;
  padding: 1rem;
  max-width: 500px;
}
</style>
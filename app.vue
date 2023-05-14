<template>
  <main>
    <h1>explain me</h1>
    <h1>What does this site do?</h1>
    <h2>Using GPT-3.5 to give you a summary</h2>
    <LookUp />
  </main>
  <footer>
    <p>
      Built by <a href="https://twitter.com/GauteMeekOlsen" target="_blank" rel="noopener">@GauteMeekOlsen</a>
    </p>
    <p>
      A kinder version than (inspired by) <a href="https://wtfdoesthiscompanydo.vercel.app/" target="_blank"
        rel="noopener noreferrer">wtfdoesthiscompanydo</a>
    </p>
  </footer>
</template>

<style>
:root {
  --pink: #ff7e94;

  color-scheme: light dark;
}

html, body, #__nuxt {
  margin: 0;
  height: 100%;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
}

#__nuxt {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style scoped>
main {
  flex: 1;
}

main,
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}


h1:first-of-type {
  color: var(--pink);
  margin-bottom: 0;
}

h1:last-of-type {
  margin-top: 0;
  margin-bottom: 1rem;
}

h2 {
  color: rgba(0, 0, 0, 0.8);
  font-weight: normal;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

footer {
  gap: 0.5rem;
  margin-bottom: 1rem;
}

footer p {
  margin: 0;
}

footer a {
  color: #0059b3
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: rgba(255, 255, 255, 0.8);
  }
  
  footer a {
    color: #85c2ff
  }
}
</style>
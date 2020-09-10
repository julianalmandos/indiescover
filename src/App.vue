<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
}
</script>

<style>
:root {
  --backgroundColor: #E7E6CE;
  --red: #CD5249;
  --lightRed: #cf635b;
  --black: #3D3D3D;
  --secondary: #76C3AA;
}

#app {
  font-family: 'Meera Inimai', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.3px;
  min-height: 100vh;
}

button {
  font-family: 'Meera Inimai', sans-serif;
  letter-spacing: 0.3px;
}

body, html {
  width: 100%;
  min-height: 100vh;
  background-color: var(--backgroundColor);
  font-size: 18px;
  color: var(--black);
}
</style>

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

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

#app {
  font-family: 'Meera Inimai', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.3px;
  height: 100%;
}

button {
  font-family: 'Meera Inimai', sans-serif;
  letter-spacing: 0.3px;
}

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: var(--backgroundColor);
  /* background: linear-gradient(180deg, rgba(205,82,73,1) 0%, rgba(61,61,61,1) 98%); */
  font-size: 18px;
  color: var(--black);
}
</style>

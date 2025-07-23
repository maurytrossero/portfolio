<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f2937; /* gris oscuro, texto modo claro */
  margin: 0;
  padding: 0;
  background-color: #f9fafb; /* gris muy claro para modo claro */
}

/* 🌙 MODO OSCURO AUTOMÁTICO */
@media (prefers-color-scheme: dark) {
  #app {
    background-color: #111827; /* gris oscuro (más suave que negro puro) */
    color: #f3f4f6; /* texto claro */
  }
}
</style>

<script setup lang="ts">
import FormItem from './components/FormItem.vue';
import Header from './components/Header.vue'
</script>

<template>
  <header>
    <img alt="Petbnb logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <Header msg="Find the perfect dog or cat sitter" />
    </div>
  </header>
  <FormItem />
</template>

<style scoped>

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  fill: red;
  stroke: red;
}
</style>

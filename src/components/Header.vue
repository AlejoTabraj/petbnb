<script setup lang="ts">
import { useScreens } from 'vue-screen-utils';
const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
const small = mapCurrent({ lg: false }, true);
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings mb-2">
    <h1 class="green" :class="{ 'small-h1': small }">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.small-h1 {
  font-size: 1.6rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  
}
</style>

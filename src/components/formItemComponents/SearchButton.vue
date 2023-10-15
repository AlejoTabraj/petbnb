<script setup lang="ts">
import { useScreens } from 'vue-screen-utils';
defineProps<{
    fullWidth: boolean
}>()
</script>

<template>
      <div class="button" :class="{ 'full-width': fullWidth }">
        <font-awesome-icon icon="fa-solid fa-search" class="seacrh-icon" />
      </div>
</template>

<style scoped>
.button {
    background-color: #e5573f;
    width: 8.2em;
    height: 3.6em;
    padding: 1em;
    display: grid;
    place-items: center;
    cursor: pointer;
}

.full-width {
    width: 100%;
}
.seacrh-icon {
    color: #FFFF;
}
@media (min-width: 1024px) {}
</style>

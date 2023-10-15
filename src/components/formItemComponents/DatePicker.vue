<script setup lang="ts">
import { useScreens } from 'vue-screen-utils';
import { reactive } from 'vue';

const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
const columns = mapCurrent({ lg: 2 }, 1);
const date = new Date()
const range = reactive({
  start: new Date(),
  end: new Date()
})
</script>

<template>
  <VDatePicker v-model="range" is-range :columns="columns" color="green" :min-date="date">
    <template #default="{ inputValue, inputEvents }">
      <div class="wrapper-text-input">
        <font-awesome-icon icon="fa-solid fa-calendar-day" class="calendar-icon" />
        <input  class="text-input" placeholder="Hola" :value="`${inputValue.start} to ${inputValue.end}`" v-on="inputEvents.start" />
      </div>
    </template>
  </VDatePicker>
</template>

<style scoped>
.wrapper-text-input {
    display: flex;
    align-items: center;
    gap: 0.5em;
    border: 1px solid #dbdbdb;
    padding: 0.8em 0.5em;
}
.text-input {
    width: 100%;
    height: 2em;
    border: none;
    outline: none;
}
.calendar-icon {
    color: #425864;
}

@media (min-width: 1024px) {}
</style>

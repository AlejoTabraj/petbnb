<script setup lang="ts">
defineProps<{
  icon: string
  selected?: boolean
  species: string
  large?: boolean
  small?: boolean
}>()
</script>

<template>
  <div :class="{ cartSelected: selected, basicCart: true, 'large-card': large, 'medium-card': small }">
    <font-awesome-icon :icon="icon" :class="{ iconSelected: selected, icon: !selected, basic: true }" />
    <span>
      <h4 :class="{ iconSelected: selected, icon: !selected }">{{ species }}</h4>
    </span>
  </div>
</template>

<style scoped>
.basicCart {
  position: relative;
  border: 1px solid #dbdbdb;
  width: 10rem;
  --card-width: 10rem;
  height: 6em;
  padding: 0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.large-card {
  width: 27rem;
  --card-width: 31rem;
}

.medium-card {
  width: 14rem;
  --card-width: 15rem;
}
.basic {
  top: 1em;
  left: calc(var(--card-width) / 10 * 3.8);
  /* left: 3.8em; */
  position: absolute;
  width: 3em;
  height: auto;
}

.icon {
  color: #519B7A;
}
span {
  width: fit-content;
  height: fit-content;
}
h4 {
  /* bottom: 0;
  left: 4.4em;
  position: absolute; */
  font-size: 14px;
}

.iconSelected {
  color: #FFFF;
}

.cartSelected {
  background-color: #519B7A;
}

@media (min-width: 1024px) {}
</style>

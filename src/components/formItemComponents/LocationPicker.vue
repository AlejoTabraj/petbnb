<template>
      <div class="wrapper-text-input">
        <font-awesome-icon icon="fa-solid fa-map-location-dot" class="calendar-icon" />
        <input  class="text-input" placeholder="Buenos Aires, Argentina"  />
      </div>
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

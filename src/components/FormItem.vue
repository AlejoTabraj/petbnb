<script setup lang="ts">
import { ONLY_CATS_PLACES_INFO, PETS_ICON_NAMES, PLACES_ICON_IMAGES } from '../assets/constants'
import LocationPicker from './formItemComponents/LocationPicker.vue'
import SearchButton from './formItemComponents/SearchButton.vue';
import DatePicker from './formItemComponents/DatePicker.vue';
import Card from './formItemComponents/Card.vue';
import { useScreens } from 'vue-screen-utils';
import { ref } from 'vue';

const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
const small = mapCurrent({ lg: false }, true);

const petIcons = ref(PETS_ICON_NAMES)
const placesInfo = ref(PLACES_ICON_IMAGES)
const onlyCatPlaces = ref(ONLY_CATS_PLACES_INFO)
const petsSelected: Record<string, boolean> = {
  DOG: true,
  CAT: false
}
let onlyCatSelected: boolean = false
let locationSearchText: string = 'Pet spa nearby'
let dateSearchText: string = 'From - Until'

function checkCodes (code: string) {
  console.log({ code, petsSelected })
  return code === 'CAT'
}

function handleCardClickList(index: number) {
  petIcons.value[index].selected = !petIcons.value[index].selected
  petsSelected[petIcons.value[index].code] = !petsSelected[petIcons.value[index].code]
  onlyCatSelected = petsSelected['CAT'] && !petsSelected['DOG']
}

function handleCardClickPlacesCare(groupIndex: number, elementIndex: number, icon: any) {
  (onlyCatSelected ? onlyCatPlaces.value : placesInfo.value).forEach((group, gi) => { group.cardSection.forEach((element: { selected: boolean; }, ei: number) => { element.selected = (gi === groupIndex && ei === elementIndex) ? true : false }) })
  locationSearchText = icon.searchText
  dateSearchText = icon.dateCode
}

</script>

<template>
  <section class="search-section" :class="{ 'center-flex-row': small }">

    <section class="list-pets mb-2" :class="{ 'center-text': small }">
      <h3 class="subtitle"> Mascotas </h3>
      <div class="list-pets__carts" :class="{ 'flex-center': small }">
        <div v-for="(icon, index) in petIcons">
          <Card :icon="icon.name" :species="icon.species" :selected="icon.selected" @click="handleCardClickList(index)" :small="small"/>
        </div>
      </div>
    </section>

    <section class="places mb-2" :class="{ 'flex-center': small }">

      <div v-for="(placeGroup, groupIndex) in (onlyCatSelected ? onlyCatPlaces : placesInfo)" class="places-care" :class="{ 'center-text': small }">
        <h3 class="subtitle"> {{ placeGroup.sectionTitle }} </h3>
        <div class="places-care__carts" :class="{ 'flex-center': small }">
          <div v-for="(icon, elementIndex) in placeGroup.cardSection">
            <Card :icon="icon.name" :species="icon.place" :selected="icon.selected" :large="onlyCatSelected && !small" :small="small"
              @click="handleCardClickPlacesCare(groupIndex, elementIndex, icon)" />
          </div>
        </div>
      </div>

    </section>



    <section class="search">
      <div class="input-basis" :class="{ 'max-basis': small }">
        <h3 class="subtitle">{{ locationSearchText }}</h3>
        <LocationPicker />
      </div>
      <div class="input-basis" :class="{ 'max-basis': small }">
        <h3 class="subtitle">{{ dateSearchText }}</h3>
        <DatePicker />
      </div>
      <div class="button-basis" :class="{ 'max-basis': small }">
        <h3>''</h3>
        <SearchButton :full-width="small" />
      </div>
    </section>
  </section>
</template>

<style scoped>
.list-pets__carts {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}

.search {
  display: flex;
  flex-wrap: wrap;

}

.input-basis {
  flex-basis: 43%;
}

.button-basis {
  flex-basis: 10%
}

/* .search div {
  flex-basis: 43%;
}

.search-button {
  flex-basis: 10%;
} */

.subtitle {
  color: #425864;
  font-weight: bold;
}

.search-section {
  padding: 2em;
  background-color: #FFF;
  border-radius: 5px;
}

.center-flex-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-center {
  justify-content: center;
}

.max-basis {
  flex-basis: 100%;
}

.places,
.places-home__carts,
.places-care__carts {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}

.places {
  gap: 3rem;
}
</style>
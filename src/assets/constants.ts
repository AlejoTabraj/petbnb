export const PETS_ICON_NAMES: {
  name: string;
  selected: boolean;
  species: string;
  code: string;
}[] = [
  { name: "fa-solid fa-dog", selected: true, species: "Dog", code: 'DOG' },
  { name: "fa-solid fa-cat", selected: false, species: "Cat", code: 'CAT' },
];

export const PLACES_ICON_IMAGES: { sectionTitle: string, cardSection: {
  name: string;
  selected: boolean;
  place: string;
  searchText: string;
  dateCode: string;
}[]}[] = [
  { sectionTitle: "At the babysitter's house", cardSection :[
    { name: "fa-solid fa-briefcase", selected: true, place: "Pet spa", searchText: 'Pet spa nearby', dateCode: 'From - Until' },
    { name: "fa-solid fa-sun", selected: false, place: "kindergarten", searchText: 'Kindergartens nearby', dateCode: 'Select at least one day' },
  ]},
  {sectionTitle: 'In your house', cardSection :[
    { name: "fa-solid fa-home", selected: false, place: "Babysitter at home", searchText: 'Babysitters nearby', dateCode: 'From - Until' },
    { name: "fa-solid fa-paw", selected: false, place: "Dog walking service", searchText: 'Dog walking nearby', dateCode: 'Select at least one day' },
    { name: "fa-solid fa-key", selected: false, place: "Pet care", searchText: 'Pet care nearby', dateCode: 'Select at least one day' },
  ]},
];

export const ONLY_CATS_PLACES_INFO: { sectionTitle: string, cardSection: {
  name: string;
  selected: boolean;
  place: string;
  searchText: string;
  dateCode: string;
}[]}[] = [
  {sectionTitle: 'In your house', cardSection :[
    { name: "fa-solid fa-home", selected: false, place: "Babysitter at home", searchText: 'Babysitters nearby', dateCode: 'From - Until' },
    { name: "fa-solid fa-key", selected: false, place: "Pet care", searchText: 'Pet care nearby', dateCode: 'Select at least one day' },
  ]},
];


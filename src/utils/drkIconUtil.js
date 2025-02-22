const images = Object.values(
  import.meta.glob(
    '../assets/icons/abilities/tanks/drk/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const darkmind = {
  name: 'DM',
  img: images[0].default,
};
const livingdead = {
  name: 'LD',
  img: images[1].default,
};
const oblation = {
  name: 'Oblation',
  img: images[2].default,
};
const shadowedvigil = {
  name: 'Vigil',
  img: images[3].default,
};
const theblackestnight = {
  name: 'TBN',
  img: images[4].default,
};

const drkMap = {
  'Dark Mind': darkmind,
  'Living Dead': livingdead,
  Oblation: oblation,
  'Shadowed Vigil': shadowedvigil,
  TBN: theblackestnight,
  'The Blackest Night': theblackestnight,
};
/*
const experiment = () => {
  //console.log(imagesObj);
  console.log('new line-----');
  console.log(images[0].default);
  console.log('new line-----');
  //console.log(Object.values(imagesObj));
};*/

export default drkMap;

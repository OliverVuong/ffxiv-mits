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
const oblationB = {
  name: 'Bud Oblation',
  img: images[2].default,
};
const shadowedvigil = {
  name: 'Vigil',
  img: images[3].default,
};
const shadowwall = {
  name: 'SW',
  img: images[4].default,
};
const theblackestnight = {
  name: 'TBN',
  img: images[5].default,
};
const theblackestnightB = {
  name: 'Bud TBN',
  img: images[5].default,
};

const drkMap = {
  'Dark Mind': darkmind,
  'Living Dead': livingdead,
  Oblation: oblation,
  'Oblation Buddy': oblationB,
  'Shadowed Vigil': shadowedvigil,
  shadowwall,
  'Shadow Wall': shadowwall,
  TBN: theblackestnight,
  'The Blackest Night Buddy': theblackestnightB,
  'TBN Buddy': theblackestnightB,
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

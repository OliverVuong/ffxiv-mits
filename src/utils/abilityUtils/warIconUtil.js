const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/tanks/war/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const bloodwhetting = {
  name: 'BW',
  img: images[0].default,
};
const damnation = {
  name: 'Damnation',
  img: images[1].default,
  captionClass: 'overflow80',
};
const DamnationCo = {
  name: '↪Damnation',
  img: images[1].default,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const equilibrium = {
  name: 'Equilibrium',
  img: images[2].default,
  captionClass: 'overflow80',
};
const holmgang = {
  name: 'Holmgang',
  img: images[3].default,
  captionClass: 'overflow80',
};
const nascentflash = {
  name: 'Nascent',
  img: images[4].default,
};
const shakeitoff = {
  name: 'Shake',
  img: images[5].default,
};
const shakeveil = {
  name: 'Shake/Veil',
  img: images[6].default,
  captionClass: 'overflow80',
};
const shakeveilG = {
  name: 'Shake/Veil',
  img: images[6].default,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const shortmit = {
  name: 'Short Mit',
  img: images[7].default,
  captionClass: 'overflow90',
};
const thrillofbattle = {
  name: 'Thrill',
  img: images[8].default,
};
const ThrillCo = {
  name: '↪Thrill',
  iconClass: 'isGreyscale',
  img: images[8].default,
};
const vengeance = {
  name: 'Vengeance',
  img: images[9].default,
  captionClass: 'overflow80',
};

const warMap = {
  Bloodwhetting: bloodwhetting,
  Damnation: damnation,
  DamnationCo,
  Equilibrium: equilibrium,
  Holmgang: holmgang,
  'Nascent Buddy': nascentflash,
  Nascent: nascentflash,
  shakeitoff,
  Shake: shakeitoff,
  shakeveil,
  'Shake/Veil': shakeveil,
  shakeveilG,
  shortmit,
  Thrill: thrillofbattle,
  ThrillCo,
  vengeance,
  Vengeance: vengeance,
};
/*
const experiment = () => {
  //console.log(imagesObj);
  console.log('new line-----');
  console.log(images[0].default);
  console.log('new line-----');
  //console.log(Object.values(imagesObj));
};*/

export default warMap;

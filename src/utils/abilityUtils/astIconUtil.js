const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/ast/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const cu = {
  name: 'CU',
  img: images[0].default,
};
const horoscope = {
  name: 'Horoscope',
  img: images[1].default,
};
const macrocosmos = {
  name: 'Macro',
  img: images[2].default,
};
const macrocosmosCO = {
  img: images[2].default,
  name: '↪Macro',
  iconClass: 'isGreyscale',
};
const neutralsect = {
  name: 'Neutral',
  img: images[3].default,
};
const neutralsectCO = {
  name: '↪Neutral',
  img: images[3].default,
  iconClass: 'isGreyscale',
};
const star = {
  name: 'Star',
  img: images[4].default,
};
const sunsign = {
  name: 'Sun',
  img: images[5].default,
};
const sunsignCO = {
  name: '↪Sun',
  img: images[5].default,
  iconClass: 'isGreyscale',
};

const astMap = {
  CU: cu,
  horoscope,
  Horoscope: horoscope,
  Macro: macrocosmos,
  Macrocosmos: macrocosmos,
  macrocosmosCO,
  'Neutral Sect': neutralsect,
  Neutral: neutralsect,
  neutralsectCO,
  'Neutral co': neutralsectCO,
  Star: star,
  Sun: sunsign,
  'Sun Sign': sunsign,
  sunsignCO,
  'Sun Sign co': sunsignCO,
};

export default astMap;

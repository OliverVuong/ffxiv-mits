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
  img: images[3].default,
  name: '↪Macro',
};
const neutralsect = {
  name: 'Neutral',
  img: images[4].default,
};
const neutralsectCO = {
  name: '↪Neutral',
  img: images[5].default,
};
const star = {
  name: 'Star',
  img: images[6].default,
};
const sunsign = {
  name: 'Sun',
  img: images[7].default,
};
const sunsignCO = {
  name: '↪Sun',
  img: images[8].default,
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

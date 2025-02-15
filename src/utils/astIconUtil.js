const images = Object.values(
  import.meta.glob(
    '../assets/icons/abilities/ast/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const cu = {
  name: 'CU',
  img: images[0].default,
};
const macrocosmos = {
  name: 'Macro',
  img: images[1].default,
};
const macrocosmosCO = {
  img: images[2].default,
  name: '↪Macro',
};
const neutralsect = {
  name: 'Neutral',
  img: images[3].default,
};
const neutralsectCO = {
  name: '↪Neutral',
  img: images[4].default,
};
const sunsign = {
  name: 'Sun',
  img: images[5].default,
};
const sunsignCO = {
  name: '↪Sun',
  img: images[6].default,
};

const astMap = {
  CU: cu,
  Macro: macrocosmos,
  macrocosmosCO,
  Neutral: neutralsect,
  neutralsectCO,
  Sun: sunsign,
  'Sun Sign': sunsign,
  sunsignCO,
};

export default astMap;

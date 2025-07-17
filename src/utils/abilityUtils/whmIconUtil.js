const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/whm/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const bell = {
  name: 'Bell',
  img: images[0].default,
};
const caress = {
  name: 'Caress',
  img: images[1].default,
};
const divinecaressCO = {
  img: images[1].default,
  name: '↪Caress',
  iconClass: 'isGreyscale',
};
const temperance = {
  name: 'Temp',
  img: images[2].default,
};
const temperanceCO = {
  name: '↪Temp',
  img: images[2].default,
  iconClass: 'isGreyscale',
};

const whmMap = {
  Bell: bell,
  'Lilly Bell': bell,
  Caress: caress,
  divinecaressCO,
  Temperance: temperance,
  'Temperance co': temperanceCO,
  'Temperance CO': temperanceCO,
};

export default whmMap;

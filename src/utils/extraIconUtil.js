const images = Object.values(
  import.meta.glob(
    '../assets/icons/abilities/extras/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const dismantle = {
  name: 'Dismantle',
  img: images[0].default,
};
const magickbarrier = {
  name: 'Barrier',
  img: images[1].default,
};
const mantra = {
  img: images[2].default,
  name: 'Mantra',
};
const naturesminne = {
  name: 'Minne',
  img: images[3].default,
};

const extrasMap = {
  Dismantle: dismantle,
  'Magick Barrier': magickbarrier,
  Barrier: magickbarrier,
  Mantra: mantra,
  'Natures Minne': naturesminne,
};

export default extrasMap;

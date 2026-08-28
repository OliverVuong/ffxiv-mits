const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/extras/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const dismantle = {
  name: 'Dismantle',
  img: images[0].default,
  captionClass: 'overflow90-with-note',
};
const dismantleG = {
  name: 'Dismantle',
  img: images[0].default,
  iconClass: 'isGreyscale',
  captionClass: 'overflow90-with-note',
};
const Check = {
  name: '✔',
  img: images[1].default,
};
const magickbarrier = {
  name: 'Barrier',
  img: images[2].default,
};
const magickbarrierC = {
  name: '↪Barrier',
  img: images[2].default,
  iconClass: 'isGreyscale',
};
const mantra = {
  img: images[3].default,
  name: 'Mantra',
};
const naturesminne = {
  name: 'Minne',
  img: images[4].default,
};

const extrasMap = {
  Dismantle: dismantle,
  dismantleG,
  Check,
  'Dismantle grey': dismantleG,
  'Magick Barrier': magickbarrier,
  'Magick Barrier co': magickbarrierC,
  Barrier: magickbarrier,
  Mantra: mantra,
  'Natures Minne': naturesminne,
  "Nature's Minne": naturesminne,
};

export default extrasMap;

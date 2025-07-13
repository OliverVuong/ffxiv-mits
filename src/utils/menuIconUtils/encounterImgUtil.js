const images = Object.values(
  import.meta.glob(
    '../../assets/encounterImg/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const DSR = {
  name: 'DSR',
  img: images[0].default,
};
const DSRopaque = {
  name: 'DSR',
  img: images[1].default,
};
const FRU = {
  name: 'FRU',
  img: images[2].default,
};
const FRUopaque = {
  name: 'FRU',
  img: images[3].default,
};
const TOP = {
  name: 'TOP',
  img: images[4].default,
};
const TOPopaque = {
  name: 'TOP',
  img: images[5].default,
};

const encounterImgMap = {
  DSR,
  DSRopaque,
  FRU,
  FRUopaque,
  TOP,
  TOPopaque,
};

export default encounterImgMap;

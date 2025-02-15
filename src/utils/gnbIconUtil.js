const images = Object.values(
  import.meta.glob(
    '../assets/icons/abilities/tanks/gnb/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const aurora = {
  name: 'Aurora',
  img: images[0].default,
};
const camouflage = {
  name: 'Camo',
  img: images[1].default,
};
const greatnebula = {
  name: 'Nebula',
  img: images[2].default,
};
const heartofcorrundum = {
  name: 'HoC',
  img: images[3].default,
};
const superbolide = {
  name: 'Superbolide',
  img: images[4].default,
};

const gnbMap = {
  aurora,
  Camo: camouflage,
  'Great Nebula': greatnebula,
  HoC: heartofcorrundum,
  Superbolide: superbolide,
};

export default gnbMap;

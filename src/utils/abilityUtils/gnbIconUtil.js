const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/tanks/gnb/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const aurora = {
  name: 'Aurora',
  img: images[0].default,
};
const auroraB = {
  name: 'Buddy Aurora',
  img: images[0].default,
};
const auroraG = {
  name: 'Aurora',
  img: images[1].default,
};
const camouflage = {
  name: 'Camo',
  img: images[2].default,
};
const camouflageCO = {
  name: '↪Camo',
  img: images[3].default,
};
const greatnebula = {
  name: 'Nebula',
  img: images[4].default,
};
const greatnebulaCO = {
  name: '↪Nebula',
  img: images[5].default,
};
const heartofcorundum = {
  name: 'HoC',
  img: images[6].default,
};
const heartofcorundumCO = {
  name: '↪HoC',
  img: images[7].default,
};
const heartofcorundumB = {
  name: 'Bud HoC',
  img: images[6].default,
};
const heartoflight = {
  name: 'HoL',
  img: images[8].default,
};
const heartoflightCO = {
  name: '↪HoL',
  img: images[9].default,
};
const heartofstone = {
  name: 'HoS',
  img: images[10].default,
};
const heartofstoneB = {
  name: 'Bud HoS',
  img: images[10].default,
};
const heartofstoneCO = {
  name: '↪HoS',
  img: images[11].default,
};
const nebula = {
  name: 'Nebula',
  img: images[12].default,
};
const nebulaCO = {
  name: '↪Nebula',
  img: images[13].default,
};
const superbolide = {
  name: 'Bolide',
  img: images[14].default,
};
const superbolideCO = {
  name: '↪Bolide',
  img: images[15].default,
};

const gnbMap = {
  Aurora: aurora,
  'Aurora bud': auroraB,
  auroraG,
  Camouflage: camouflage,
  Camo: camouflage,
  camouflageCO,
  'Camo co': camouflageCO,
  'Great Nebula': greatnebula,
  'Great Nebula CO': greatnebulaCO,
  HoC: heartofcorundum,
  heartofcorundumCO,
  'HoC Buddy': heartofcorundumB,
  heartoflight,
  heartoflightCO,
  heartofstone,
  'HoS Buddy': heartofstoneB,
  heartofstoneCO,
  Nebula: nebula,
  nebula,
  nebulaCO,
  Superbolide: superbolide,
  superbolideCO,
};

export default gnbMap;

const images = Object.values(
  import.meta.glob(
    '../../assets/icons/extras/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const dismantle = {
  name: 'Dismantle',
  img: images[0].default,
};
const dismantleG = {
  name: 'Dismantle',
  img: images[1].default,
};
const extracheck = {
  name: 'Extras',
  img: images[2].default,
};
const extracheckG = {
  name: 'Extras',
  img: images[3].default,
};
const magickbarrier = {
  name: 'Magick Barrier',
  img: images[4].default,
};
const magickbarrierG = {
  name: 'Magick Barrier',
  img: images[5].default,
};
const mantra = {
  img: images[6].default,
  name: 'Mantra',
};
const mantraG = {
  img: images[7].default,
  name: 'Mantra',
};
const naturesminne = {
  name: "Nature's Minne",
  img: images[8].default,
};
const naturesminneG = {
  name: "Nature's Minne",
  img: images[9].default,
};
const passage = {
  name: 'Passage of Arms',
  img: images[10].default,
};
const passageG = {
  name: 'Passage of Arms',
  img: images[11].default,
};
const caster2 = {
  name: 'Double Caster',
  img: images[12].default,
};
const caster2G = {
  name: 'Double Caster',
  img: images[13].default,
};
const range2 = {
  name: 'Double PRange',
  img: images[14].default,
};
const range2G = {
  name: 'Double PRange',
  img: images[15].default,
};

const extrasSelectorMap = {
  MCH: dismantle,
  MCHG: dismantleG,
  EXTRA: extracheck,
  EXTRAG: extracheckG,
  RDM: magickbarrier,
  RDMG: magickbarrierG,
  MNK: mantra,
  MNKG: mantraG,
  BRD: naturesminne,
  BRDG: naturesminneG,
  PLD: passage,
  PLDG: passageG,
  CASTER2: caster2,
  CASTER2G: caster2G,
  PRange2: range2,
  PRange2G: range2G,
};

export default extrasSelectorMap;

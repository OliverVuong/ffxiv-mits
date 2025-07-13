const images = Object.values(
  import.meta.glob(
    '../../assets/icons/jobs/*.{webp,png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const ast = {
  name: 'AST',
  img: images[0].default,
};
const brd = {
  name: 'BRD',
  img: images[1].default,
};
const drk = {
  name: 'DRK',
  img: images[2].default,
};
const gnb = {
  name: 'GNB',
  img: images[3].default,
};
const mch = {
  name: 'MCH',
  img: images[4].default,
};
const mnk = {
  name: 'MNK',
  img: images[5].default,
};
const pld = {
  name: 'PLD',
  img: images[6].default,
};
const rdm = {
  name: 'RDM',
  img: images[7].default,
};
const sch = {
  name: 'SCH',
  img: images[8].default,
};
const sge = {
  name: 'SGE',
  img: images[9].default,
};
const war = {
  name: 'WAR',
  img: images[10].default,
};
const whm = {
  name: 'WHM',
  img: images[11].default,
};

const jobMap = {
  AST: ast,
  BRD: brd,
  DRK: drk,
  GNB: gnb,
  MCH: mch,
  MNK: mnk,
  PLD: pld,
  RDM: rdm,
  SCH: sch,
  SGE: sge,
  WAR: war,
  WHM: whm,
};

export default jobMap;

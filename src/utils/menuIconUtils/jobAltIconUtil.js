const images = Object.values(
  import.meta.glob(
    '../../assets/icons/jobsAlt/*.{webp,png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const drk = {
  name: 'DRK',
  img: images[0].default,
};
const gnb = {
  name: 'GNB',
  img: images[1].default,
};
const pld = {
  name: 'PLD',
  img: images[2].default,
};
const war = {
  name: 'WAR',
  img: images[3].default,
};
const tank = {
  name: 'tank',
  img: images[4].default,
};

const jobAltMap = {
  DRK: drk,
  GNB: gnb,
  PLD: pld,
  WAR: war,
  MT: tank,
  OT: tank,
};

export default jobAltMap;

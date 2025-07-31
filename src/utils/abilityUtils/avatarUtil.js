const images = Object.values(
  import.meta.glob(
    '../../assets/miscAssets/avatars/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const ast = {
  name: 'Astrologian',
  img: images[0].default,
};
const dnc = {
  name: 'Dancer',
  img: images[1].default,
};
const drg = {
  name: 'Dragoon',
  img: images[2].default,
};
const gnb = {
  name: 'Gunbreaker',
  img: images[3].default,
};
const pld = {
  name: 'Paladin',
  img: images[4].default,
};
const rdm = {
  name: 'Red Mage',
  img: images[5].default,
};
const sam = {
  name: 'Samurai',
  img: images[6].default,
};
const sch = {
  name: 'Scholar',
  img: images[7].default,
};
const avatarList = [pld, drg, dnc, ast, sch, rdm, sam, gnb];

export default avatarList;

const images = Object.values(
  import.meta.glob(
    '../../assets/icons/roles/*.{webp,png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const caster = {
  name: 'caster',
  img: images[0].default,
};
const healer = {
  name: 'Healer',
  img: images[1].default,
};
const melee = {
  name: 'Melee',
  img: images[2].default,
};
const range = {
  name: 'Range',
  img: images[3].default,
};
const tank = {
  name: 'Tank',
  img: images[4].default,
};

const rolesMap = {
  caster,
  CASTER2: caster,
  H1: healer,
  H2: healer,
  M1: melee,
  M2: melee,
  T1: tank,
  T2: tank,
  PRange: range,
};

export default rolesMap;

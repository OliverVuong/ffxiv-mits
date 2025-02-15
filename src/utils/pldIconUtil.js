const images = Object.values(
  import.meta.glob(
    '../assets/icons/abilities/tanks/pld/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const bulwark = {
  name: 'Bulwark',
  img: images[0].default,
};
const guardian = {
  name: 'Guardian',
  img: images[1].default,
};
const hallowedground = {
  name: 'Hallowed',
  img: images[2].default,
};
const holysheltron = {
  name: 'Sheltron',
  img: images[3].default,
};
const intervention = {
  name: 'Intervention',
  img: images[4].default,
};
const passageofarms = {
  name: 'Wings',
  img: images[4].default,
};

const pldMap = {
  bulwark,
  Bulwark: bulwark,
  guardian,
  Guardian: guardian,
  hallowedground,
  'Hallowed Ground': hallowedground,
  holysheltron,
  Sheltron: holysheltron,
  'Holy Sheltron': holysheltron,
  intervention,
  Intervention: intervention,
  Wings: passageofarms,
};

export default pldMap;

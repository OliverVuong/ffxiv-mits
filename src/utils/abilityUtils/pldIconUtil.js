const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/tanks/pld/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const bulwark = {
  name: 'Bulwark',
  img: images[0].default,
};
const bulwarkCO = {
  name: '↪Bulwark',
  img: images[0].default,
  iconClass: 'isGreyscale',
};
const clemency = {
  name: 'Clemency',
  img: images[1].default,
};
const clemencyG = {
  name: 'Clemency',
  img: images[1].default,
  iconClass: 'isGreyscale',
};
const cover = {
  name: 'Cover',
  img: images[2].default,
};
const coverCO = {
  name: '↪Cover',
  img: images[2].default,
  iconClass: 'isGreyscale',
};
const divineveil = {
  name: 'Veil',
  img: images[3].default,
};
const divineveilG = {
  name: '↪Veil',
  img: images[3].default,
  iconClass: 'isGreyscale',
};
const guardian = {
  name: 'Guardian',
  img: images[4].default,
};
const guardianCO = {
  name: '↪Guardian',
  img: images[4].default,
  iconClass: 'isGreyscale',
};
const hallowedground = {
  name: 'Hallowed',
  img: images[5].default,
};
const hallowedgroundCO = {
  name: '↪Hallowed',
  img: images[5].default,
  iconClass: 'isGreyscale',
};
const holysheltron = {
  name: 'Sheltron',
  img: images[6].default,
};
const holysheltronCO = {
  name: '↪Sheltron',
  img: images[6].default,
  iconClass: 'isGreyscale',
};
const intervention = {
  name: 'Intervention',
  img: images[7].default,
};
const interventionCO = {
  name: '↪Intervention',
  img: images[7].default,
  iconClass: 'isGreyscale',
};
const passageofarms = {
  name: 'Wings',
  img: images[8].default,
};
const passageofarmsCO = {
  name: '↪Wings',
  img: images[8].default,
  iconClass: 'isGreyscale',
};
const sentinel = {
  name: 'Sentinel',
  img: images[9].default,
};
const sentinelCO = {
  name: '↪Sentinel',
  img: images[9].default,
  iconClass: 'isGreyscale',
};
const sheltron = {
  name: 'Sheltron',
  img: images[10].default,
};
const sheltronCO = {
  name: '↪Sheltron',
  img: images[10].default,
  iconClass: 'isGreyscale',
};

const pldMap = {
  bulwark,
  Bulwark: bulwark,
  bulwarkCO,
  clemency,
  clemencyG,
  cover,
  coverCO,
  divineveil,
  Veil: divineveil,
  divineveilG,
  guardian,
  Guardian: guardian,
  guardianCO,
  'Guardian CO': guardianCO,
  hallowedground,
  'Hallowed Ground': hallowedground,
  hallowedgroundCO,
  holysheltron,
  holysheltronCO,
  holy: holysheltron,
  'Holy Sheltron': holysheltron,
  intervention,
  Intervention: intervention,
  'Intervention Buddy': intervention,
  interventionCO,
  Wings: passageofarms,
  passageofarmsCO,
  sentinel,
  Sentinel: sentinel,
  sentinelCO,
  sheltron,
  Sheltron: sheltron,
  sheltronCO,
};

export default pldMap;

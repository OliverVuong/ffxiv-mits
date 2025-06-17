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
const bulwarkCO = {
  name: '↪Bulwark',
  img: images[1].default,
};
const clemency = {
  name: 'Clemency',
  img: images[2].default,
};
const clemencyG = {
  name: '↪Clemency',
  img: images[3].default,
};
const cover = {
  name: 'Cover',
  img: images[4].default,
};
const coverCO = {
  name: '↪Cover',
  img: images[5].default,
};
const divineveil = {
  name: 'Veil',
  img: images[6].default,
};
const divineveilG = {
  name: '↪Veil',
  img: images[7].default,
};
const guardian = {
  name: 'Guardian',
  img: images[8].default,
};
const guardianCO = {
  name: '↪Guardian',
  img: images[9].default,
};
const hallowedground = {
  name: 'Hallowed',
  img: images[10].default,
};
const hallowedgroundCO = {
  name: '↪Hallowed',
  img: images[11].default,
};
const holysheltron = {
  name: 'Sheltron',
  img: images[12].default,
};
const holysheltronCO = {
  name: '↪Sheltron',
  img: images[13].default,
};
const intervention = {
  name: 'Intervention',
  img: images[14].default,
};
const interventionCO = {
  name: '↪Intervention',
  img: images[15].default,
};
const passageofarms = {
  name: 'Wings',
  img: images[16].default,
};
const passageofarmsCO = {
  name: '↪Wings',
  img: images[17].default,
};
const sentinel = {
  name: 'Sentinel',
  img: images[18].default,
};
const sentinelCO = {
  name: '↪Sentinel',
  img: images[19].default,
};
const sheltron = {
  name: 'Sheltron',
  img: images[20].default,
};
const sheltronCO = {
  name: '↪Sheltron',
  img: images[21].default,
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
  interventionCO,
  Wings: passageofarms,
  passageofarmsCO,
  sentinel,
  sentinelCO,
  sheltron,
  sheltronCO,
};

export default pldMap;

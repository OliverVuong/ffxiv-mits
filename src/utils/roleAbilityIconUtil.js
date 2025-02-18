const images = Object.values(
  import.meta.glob(
    '../assets/icons/abilities/roles/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const addle = {
  name: 'Addle',
  img: images[0].default,
};
const addleCO = {
  name: '↪Addle',
  img: images[1].default,
};
const addleG = {
  name: 'Addle',
  img: images[1].default,
};
const feint = {
  name: 'Feint',
  img: images[2].default,
};
const feintCO = {
  name: '↪Feint',
  img: images[3].default,
};
const feintG = {
  name: 'Feint',
  img: images[3].default,
};
const partymit = {
  name: 'Party Mit',
  img: images[4].default,
};
const partymitCO = {
  name: '↪Party Mit',
  img: images[5].default,
};
const rampart = {
  name: 'Rampart',
  img: images[6].default,
};
const rampartCO = {
  name: '↪Rampart',
  img: images[7].default,
};
const rangemit = {
  name: 'Range Mit',
  img: images[8].default,
};
const rangemitCO = {
  name: '↪Range Mit',
  img: images[9].default,
};
const reprisal = {
  name: 'Reprisal',
  img: images[10].default,
};
const reprisalCO = {
  name: '↪Reprisal',
  img: images[11].default,
};
const reprisalG = {
  name: 'Reprisal',
  img: images[11].default,
};

const rolesAbilityMap = {
  Addle: addle,
  'Addle grey': addleG,
  addleCO,
  Feint: feint,
  feintCO,
  'Feint grey': feintG,
  'Party Mit': partymit,
  partymitCO,
  Rampart: rampart,
  rampartCO,
  'Range Mit': rangemit,
  rangemitCO,
  Rep: reprisal,
  Reprisal: reprisal,
  'Reprisal grey': reprisalG,
  reprisalCO,
};

export default rolesAbilityMap;

/*
import reprisalImg from '../assets/icons/abilities/reprisal.png';
import vigilImg from '../assets/icons/abilities/shadowedvigil.png';
import partyImg from '../assets/icons/abilities/partymit.png';
import rangemitImg from '../assets/icons/abilities/rangemit.png';


const reprisal = {
  name: 'Reprisal',
  img: reprisalImg,
};

reprisal,
Reprisal: reprisal,
Rep: reprisal,
'Shadowed Vigil': {
  name: 'Shadowed Vigil',
  img: vigilImg,
},
'Party Mit': {
  name: 'Party Mit',
  img: partyImg,
},

'Range Mit': {
  name: 'Range Mit',
  img: rangemitImg,
},
*/

const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/roles/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const addle = {
  name: 'Addle',
  img: images[0].default,
};
const addleCO = {
  name: '↪Addle',
  img: images[0].default,
  iconClass: 'isGreyscale',
};
const addleG = {
  name: 'Addle',
  img: images[0].default,
  iconClass: 'isGreyscale',
};
const bloodbath = {
  name: 'Bloodbath',
  img: images[1].default,
};
const feint = {
  name: 'Feint',
  img: images[2].default,
};
const feintCO = {
  name: '↪Feint',
  img: images[2].default,
  iconClass: 'isGreyscale',
};
const feintG = {
  name: 'Feint',
  img: images[2].default,
  iconClass: 'isGreyscale',
};
const healerEverything = {
  name: 'Everything',
  img: images[3].default,
};
const kitchensink = {
  name: 'Everything',
  img: images[4].default,
};
const limitbreak = {
  name: 'LB',
  img: images[5].default,
};
const buddyM1 = {
  name: 'Mit M1',
  img: images[6].default,
};
const buddyM2 = {
  name: 'Mit M2',
  img: images[7].default,
};
const partymit = {
  name: 'Party Mit',
  img: images[8].default,
  captionClass: 'overflow90-with-note',
};
const partymitG = {
  name: 'Party Mit',
  img: images[8].default,
  iconClass: 'isGreyscale',
  captionClass: 'overflow90-with-note',
};
const partymitCO = {
  name: '↪Party Mit',
  img: images[8].default,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const provoke = {
  name: 'Provoke',
  img: images[9].default,
};
const rampart = {
  name: 'Rampart',
  img: images[10].default,
  captionClass: 'overflow90',
};
const rampartCO = {
  name: '↪Rampart',
  img: images[10].default,
  iconClass: 'isGreyscale',
};
const rangemit = {
  name: 'RangeMit',
  img: images[11].default,
  captionClass: 'overflow90',
};
const rangemitCO = {
  name: '↪RangeMit',
  img: images[11].default,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const reprisal = {
  name: 'Reprisal',
  img: images[12].default,
  captionClass: 'overflow90-with-note',
};
const reprisalCO = {
  name: '↪Reprisal',
  img: images[12].default,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const reprisalG = {
  name: 'Reprisal',
  img: images[12].default,
  iconClass: 'isGreyscale',
  captionClass: 'overflow90-with-note',
};
const secondwind = {
  name: 'Reprisal',
  img: images[13].default,
};
const secondwindbloodbath = {
  name: 'Personals',
  img: images[14].default,
};

const rolesAbilityMap = {
  Addle: addle,
  'Addle grey': addleG,
  addleCO,
  'Addle co': addleCO,
  bloodbath,
  Feint: feint,
  feintCO,
  'Feint co': feintCO,
  'Feint grey': feintG,
  'Kitchen Sink': kitchensink,
  Everything: healerEverything,
  'Tank LB': limitbreak,
  'Healer LB': limitbreak,
  buddyM1,
  buddyM2,
  'Party Mit': partymit,
  partymitG,
  partymitCO,
  'Party Mit co': partymitCO,
  Provoke: provoke,
  Rampart: rampart,
  rampartCO,
  'Rampart co': rampartCO,
  'Range Mit': rangemit,
  rangemitCO,
  'Range Mit co': rangemitCO,
  Rep: reprisal,
  Reprisal: reprisal,
  'Reprisal grey': reprisalG,
  reprisalCO,
  'Reprisal co': reprisalCO,
  secondwind,
  secondwindbloodbath,
  'Melee personals': secondwindbloodbath,
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

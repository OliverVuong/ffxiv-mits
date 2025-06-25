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
const bloodbath = {
  name: 'Bloodbath',
  img: images[2].default,
};
const feint = {
  name: 'Feint',
  img: images[3].default,
};
const feintCO = {
  name: '↪Feint',
  img: images[4].default,
};
const feintG = {
  name: 'Feint',
  img: images[4].default,
};
const healerEverything = {
  name: 'Everything',
  img: images[5].default,
};
const kitchensink = {
  name: 'Everything',
  img: images[6].default,
};
const limitbreak = {
  name: 'LB',
  img: images[7].default,
};
const buddyM1 = {
  name: 'Mit M1',
  img: images[8].default,
};
const buddyM2 = {
  name: 'Mit M2',
  img: images[9].default,
};
const partymit = {
  name: 'Party Mit',
  img: images[10].default,
};
const partymitCO = {
  name: '↪Party Mit',
  img: images[11].default,
};
const rampart = {
  name: 'Rampart',
  img: images[12].default,
};
const rampartCO = {
  name: '↪Rampart',
  img: images[13].default,
};
const rangemit = {
  name: 'RangeMit',
  img: images[14].default,
};
const rangemitCO = {
  name: '↪RangeMit',
  img: images[15].default,
};
const reprisal = {
  name: 'Reprisal',
  img: images[16].default,
};
const reprisalCO = {
  name: '↪Reprisal',
  img: images[17].default,
};
const reprisalG = {
  name: 'Reprisal',
  img: images[17].default,
};
const secondwind = {
  name: 'Reprisal',
  img: images[18].default,
};
const secondwindbloodbath = {
  name: 'Personals',
  img: images[19].default,
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
  partymitCO,
  'Party Mit co': partymitCO,
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

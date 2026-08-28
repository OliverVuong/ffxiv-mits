import ninetyIcon from '../../assets/icons/abilities/tanks/generics/90s.png';
import onetwentyIcon from '../../assets/icons/abilities/tanks/generics/120s.png';
import extraTankmitIcon from '../../assets/icons/abilities/tanks/generics/extra.png';
import invulnIcon from '../../assets/icons/abilities/tanks/generics/invuln.png';
import shortIcon from '../../assets/icons/abilities/tanks/generics/short.png';
import heartoflightdarkmissionaryIcon from '../../assets/icons/abilities/tanks/generics/heartoflightdarkmissionary.png';
import buddyIcon from '../../assets/icons/abilities/tanks/generics/buddy.png';
import fourtyPIcon from '../../assets/icons/abilities/tanks/generics/40p.png';

import addleIcon from '../../assets/icons/abilities/roles/addle.png';
import bloodbathIcon from '../../assets/icons/abilities/roles/bloodbath.png';
import feintIcon from '../../assets/icons/abilities/roles/feint.png';
import healerEverythingIcon from '../../assets/icons/abilities/roles/healerEverything.png';
import kitchensinkIcon from '../../assets/icons/abilities/roles/kitchensink.png';
import limitbreakIcon from '../../assets/icons/abilities/roles/limitbreak.png';
import buddyM1Icon from '../../assets/icons/abilities/roles/macro_icon_M1.png';
import buddyM2Icon from '../../assets/icons/abilities/roles/macro_icon_M2.png';
import partymitIcon from '../../assets/icons/abilities/roles/partymit.png';
import provokeIcon from '../../assets/icons/abilities/roles/provoke.png';
import rampartIcon from '../../assets/icons/abilities/roles/rampart.png';
import rangemitIcon from '../../assets/icons/abilities/roles/rangemit.png';
import reprisalIcon from '../../assets/icons/abilities/roles/reprisal.png';
import secondwindIcon from '../../assets/icons/abilities/roles/secondwind.png';
import secondwindbloodbathIcon from '../../assets/icons/abilities/roles/secondwindbloodbath.png';

import noAddleIcon from '../../assets/icons/abilities/roles/noAddle.png';
import noFeintIcon from '../../assets/icons/abilities/roles/noFeint.png';
import noReprisalIcon from '../../assets/icons/abilities/roles/noReprisal.png';

import armslengthIcon from '../../assets/icons/abilities/roles/armslength.png';
import surecastIcon from '../../assets/icons/abilities/roles/surecast.png';

import healerIcon from '../../assets/icons/abilities/roles/healer.png';
import tankIcon from '../../assets/icons/abilities/roles/tank.png';
import rangeIcon from '../../assets/icons/abilities/roles/range.png';
import casterIcon from '../../assets/icons/abilities/roles/caster.png';

/* const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/roles/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
); */

const ninety = {
  name: '90s',
  img: ninetyIcon,
};
const ninetyCo = {
  name: '↪90s',
  img: ninetyIcon,
  iconClass: 'isGreyscale',
};
const onetwenty = {
  name: '120s',
  img: onetwentyIcon,
};
const fourtyPercent = {
  name: '40%',
  img: fourtyPIcon,
};
const fourtyPercentCo = {
  name: '↪40%',
  img: fourtyPIcon,
  iconClass: 'isGreyscale',
};
const extraTankmit = {
  name: 'Extra',
  img: extraTankmitIcon,
};
const Invuln = {
  name: 'Invuln',
  img: invulnIcon,
};
const InvulnCo = {
  name: '↪Invuln',
  img: invulnIcon,
  iconClass: 'isGreyscale',
};
const Short = {
  name: 'Short',
  img: shortIcon,
};
const ShortCo = {
  name: '↪Short',
  img: shortIcon,
  iconClass: 'isGreyscale',
};
const BuddyShort = {
  name: 'Bud Short',
  img: shortIcon,
  captionClass: 'overflow80',
};
const BuddyMit = {
  name: 'Buddy Mit',
  img: buddyIcon,
  captionClass: 'overflow80',
};
const HoLDM = {
  name: 'HoL/DM',
  img: heartoflightdarkmissionaryIcon,
  captionClass: 'overflow90',
};
const HoLDMCo = {
  name: '↪HoL/DM',
  img: heartoflightdarkmissionaryIcon,
  captionClass: 'overflow80',
  iconClass: 'isGreyscale',
};

const addle = {
  name: 'Addle',
  img: addleIcon,
};
const addleCO = {
  name: '↪Addle',
  img: addleIcon,
  iconClass: 'isGreyscale',
};
const addleG = {
  name: 'Addle',
  img: addleIcon,
  iconClass: 'isGreyscale',
};
const bloodbath = {
  name: 'Bloodbath',
  img: bloodbathIcon,
};
const feint = {
  name: 'Feint',
  img: feintIcon,
};
const feintCO = {
  name: '↪Feint',
  img: feintIcon,
  iconClass: 'isGreyscale',
};
const feintG = {
  name: 'Feint',
  img: feintIcon,
  iconClass: 'isGreyscale',
};
const healerEverything = {
  name: 'Everything',
  img: healerEverythingIcon,
};
const kitchensink = {
  name: 'Everything',
  img: kitchensinkIcon,
  captionClass: 'overflow80',
};
const kitchensinkG = {
  name: 'Everything',
  img: kitchensinkIcon,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const limitbreak = {
  name: 'LB',
  img: limitbreakIcon,
};
const buddyM1 = {
  name: 'Mit M1',
  img: buddyM1Icon,
};
const buddyM2 = {
  name: 'Mit M2',
  img: buddyM2Icon,
};
const partymit = {
  name: 'Party Mit',
  img: partymitIcon,
  captionClass: 'overflow90-with-note',
};
const partymitG = {
  name: 'Party Mit',
  img: partymitIcon,
  iconClass: 'isGreyscale',
  captionClass: 'overflow90-with-note',
};
const partymitCO = {
  name: '↪Party Mit',
  img: partymitIcon,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const provoke = {
  name: 'Provoke',
  img: provokeIcon,
};
const provokeG = {
  name: 'Provoke',
  img: provokeIcon,
  iconClass: 'isGreyscale',
};
const rampart = {
  name: 'Rampart',
  img: rampartIcon,
  captionClass: 'overflow90',
};
const RampartG = {
  name: 'Rampart',
  img: rampartIcon,
  captionClass: 'overflow90',
  iconClass: 'isGreyscale',
};
const RampartCo = {
  name: '↪Rampart',
  img: rampartIcon,
  captionClass: 'overflow80',
  iconClass: 'isGreyscale',
};
const rangemit = {
  name: 'RangeMit',
  img: rangemitIcon,
  captionClass: 'overflow90',
};
const rangemitGrey = {
  name: 'RangeMit',
  img: rangemitIcon,
  iconClass: 'isGreyscale',
  captionClass: 'overflow90',
};
const rangemitCO = {
  name: '↪RangeMit',
  img: rangemitIcon,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const reprisal = {
  name: 'Reprisal',
  img: reprisalIcon,
  captionClass: 'overflow90-with-note',
};
const reprisalCO = {
  name: '↪Reprisal',
  img: reprisalIcon,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const reprisalG = {
  name: 'Reprisal',
  img: reprisalIcon,
  iconClass: 'isGreyscale',
  captionClass: 'overflow90-with-note',
};
const secondwind = {
  name: 'Second Wind',
  img: secondwindIcon,
  captionClass: 'overflow80',
};
const secondwindbloodbath = {
  name: 'Personals',
  img: secondwindbloodbathIcon,
  captionClass: 'overflow90-with-note',
};

const noAddle = {
  name: 'No Addle',
  img: noAddleIcon,
};
const noFeint = {
  name: 'No Feint',
  img: noFeintIcon,
};
const noReprisal = {
  name: 'No Rep',
  img: noReprisalIcon,
};

const armslength = {
  name: "Arm's Length",
  img: armslengthIcon,
  captionClass: 'overflow80',
};
const Surecast = {
  name: 'Surecast',
  img: surecastIcon,
};
const healerBuddyMit = {
  name: 'Buddy Mit',
  img: healerIcon,
  captionClass: 'overflow80',
};
const rangeBuddyMit = {
  name: 'Buddy Mit',
  img: rangeIcon,
  captionClass: 'overflow80',
};
const casterMit = {
  name: 'Self-Mit',
  img: casterIcon,
};
const prangeMit = {
  name: 'Self-Mit',
  img: rangeIcon,
};
const HealerNote = {
  name: 'Note',
  img: healerIcon,
};
const CasterNote = {
  name: 'Note',
  img: casterIcon,
};
const RangeNote = {
  name: 'Note',
  img: rangeIcon,
};
const TankNote = {
  name: 'Note',
  img: tankIcon,
};

const rolesAbilityMap = {
  Addle: addle,
  'Addle grey': addleG,
  addleCO,
  'Addle co': addleCO,
  AddleCo: addleCO,
  bloodbath,
  Feint: feint,
  feintCO,
  'Feint co': feintCO,
  FeintCo: feintCO,
  'Feint cont': feintCO,
  'Feint grey': feintG,
  'Kitchen Sink': kitchensink,
  kitchensinkG,
  Everything: healerEverything,
  'Tank LB': limitbreak,
  'Healer LB': limitbreak,
  LB3: limitbreak,
  'Limit Break': limitbreak,
  buddyM1,
  buddyM2,
  'Party Mit': partymit,
  partymitG,
  partymitCO,
  'Party Mit co': partymitCO,
  'Party Mit Co': partymitCO,
  Provoke: provoke,
  provokeG,
  Rampart: rampart,
  RampartG,
  RampartCo,
  'Rampart co': RampartCo,
  'Range Mit': rangemit,
  rangemitCO,
  'Range Mit co': rangemitCO,
  rangemitGrey,
  'Range Mit Grey': rangemitGrey,
  Rep: reprisal,
  Reprisal: reprisal,
  'Reprisal grey': reprisalG,
  reprisalCO,
  'Reprisal co': reprisalCO,
  'Reprisal Co': reprisalCO,
  ReprisalCo: reprisalCO,
  secondwind,
  'Second Wind': secondwind,
  secondwindbloodbath,
  'Melee personals': secondwindbloodbath,
  ninety,
  '90s': ninety,
  '90sCo': ninetyCo,
  onetwenty,
  '120s': onetwenty,
  fourtyPercent,
  '40%': fourtyPercent,
  '40%Co': fourtyPercentCo,
  extraTankmit,
  Extra: extraTankmit,
  Invuln,
  InvulnCo,
  Short,
  ShortCo,
  noAddle,
  'No Addle': noAddle,
  noFeint,
  'No Feint': noFeint,
  noReprisal,
  'No Reprisal': noReprisal,
  armslength,
  "Arm's Length": armslength,
  Surecast,
  healerBuddyMit,
  rangeBuddyMit,
  casterMit,
  prangeMit,
  HoLDM,
  'HoL/DM': HoLDM,
  HoLDMCo,
  HealerNote,
  CasterNote,
  RangeNote,
  TankNote,
  BuddyShort,
  'Buddy Short': BuddyShort,
  BuddyMit,
  'Buddy Mit': BuddyMit,
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

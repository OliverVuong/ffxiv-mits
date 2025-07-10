const images = Object.values(
  import.meta.glob(
    '../assets/icons/abilities/sge/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const eukdiagnosis = {
  name: 'EukDiag',
  img: images[0].default,
};
const eukprog = {
  name: 'EukProg',
  img: images[1].default,
};
const eukprog90 = {
  name: 'EukProg',
  img: images[2].default,
};
const holos = {
  name: 'Holos',
  img: images[3].default,
};
const holosCO = {
  img: images[4].default,
  name: '↪Holos',
};
const kerachole = {
  name: 'Kerachole',
  img: images[5].default,
};
const keracholeCO = {
  name: '↪Kerachole',
  img: images[6].default,
};
const keracholeG = {
  name: 'Kerachole',
  img: images[6].default,
};
const panhaima = {
  name: 'Panhaima',
  img: images[7].default,
};
const panhaimaCO = {
  name: '↪Panhaima',
  img: images[8].default,
};
const philosophia = {
  name: 'Sophia',
  img: images[9].default,
};
const physis2 = {
  name: 'Physis',
  img: images[10].default,
};
const zoeeukprog = {
  name: 'Zoe',
  img: images[11].default,
};
const zoeeukprog90 = {
  name: 'Zoe',
  img: images[12].default,
};
const zoeeukprog90co = {
  name: 'Zoe',
  img: images[13].default,
};
const zoeeukprogCO = {
  name: 'Zoe',
  img: images[14].default,
};

const sgeMap = {
  eukdiagnosis,
  'Eukrasian Diagnosis': eukdiagnosis,
  EukProg: eukprog,
  eukprog90,
  EukProg90: eukprog90,
  Holos: holos,
  holosCO,
  'Holos co': holosCO,
  Kerachole: kerachole,
  'kerachole g': keracholeG,
  'Kerachole grey': keracholeG,
  keracholeCO,
  'Kerachole co': keracholeCO,
  Panhaima: panhaima,
  panhaimaCO,
  'Panhaima co': panhaimaCO,
  philosophia,
  Sophia: philosophia,
  Philosophia: philosophia,
  Physis: physis2,
  zoeeukprog,
  Zoe: zoeeukprog,
  'Zoe EukProg': zoeeukprog,
  zoeeukprog90,
  'Zoe EukProg90': zoeeukprog90,
  ZoeEukProg90: zoeeukprog90,
  zoeeukprog90co,
  zoeeukprogCO,
  'Zoe EukProg co': zoeeukprogCO,
};

export default sgeMap;

/*

import zoeeukprogImg from '../assets/icons/abilities/zoeeukprog.png';
import keraImg from '../assets/icons/abilities/kerachole.png';
import holosImg from '../assets/icons/abilities/holos.png';
import panhaimaImg from '../assets/icons/abilities/panhaima.png';
import sophiaImg from '../assets/icons/abilities/philosophia.png';

const zoe = {
  name: 'Zoe',
  img: zoeeukprogImg,
};
const kerachole = {
  name: 'Kerachole',
  img: keraImg,
};
kerachole,
Kerachole: kerachole,
Kera: kerachole,

  //SGE
  Panhaima: {
    name: 'Panhaima',
    img: panhaimaImg,
  },
  Holos: {
    name: 'Holos',
    img: holosImg,
  },
  Sophia: {
    name: 'Philosophia',
    img: sophiaImg,
  },
  zoe,
  Zoe: zoe,
  'Zoe EukProg': zoe,

*/

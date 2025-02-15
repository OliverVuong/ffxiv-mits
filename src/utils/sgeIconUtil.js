const images = Object.values(
  import.meta.glob(
    '../assets/icons/abilities/sge/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const eukprog = {
  name: 'EukProg',
  img: images[0].default,
};
const holos = {
  name: 'Holos',
  img: images[1].default,
};
const holosCO = {
  img: images[2].default,
  name: '↪Holos',
};
const kerachole = {
  name: 'Kerachole',
  img: images[3].default,
};
const keracholeCO = {
  name: '↪Kerachole',
  img: images[4].default,
};
const keracholeG = {
  name: 'Kerachole',
  img: images[4].default,
};
const panhaima = {
  name: 'Panhaima',
  img: images[5].default,
};
const panhaimaCO = {
  name: '↪Panhaima',
  img: images[6].default,
};
const philosophia = {
  name: 'Sophia',
  img: images[7].default,
};
const zoeeukprog = {
  name: 'Zoe',
  img: images[8].default,
};

const sgeMap = {
  EukProg: eukprog,
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
  philosophia,
  Sophia: philosophia,
  Philosophia: philosophia,
  zoeeukprog,
  Zoe: zoeeukprog,
  'Zoe EukProg': zoeeukprog,
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

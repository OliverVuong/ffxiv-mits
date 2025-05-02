import fru_fmbg_p1 from '../data/fru/fmbg/p1.json';
import fru_fmbg_p2 from '../data/fru/fmbg/p2.json';
import fru_fmbg_p3 from '../data/fru/fmbg/p3.json';
import fru_fmbg_p4 from '../data/fru/fmbg/p4.json';
import fru_fmbg_p5 from '../data/fru/fmbg/p5.json';

import fru_naur_p1 from '../data/fru/naur/p1.json';
import fru_naur_p2 from '../data/fru/naur/p2.json';
import fru_naur_p3 from '../data/fru/naur/p3.json';
import fru_naur_p4 from '../data/fru/naur/p4.json';
import fru_naur_p5 from '../data/fru/naur/p5.json';

import top_mitty_p1 from '../data/top/topmitty/p1.json';
import top_mitty_p2 from '../data/top/topmitty/p2.json';
import top_mitty_p3 from '../data/top/topmitty/p3.json';
import top_mitty_p4 from '../data/top/topmitty/p4.json';
import top_mitty_p5 from '../data/top/topmitty/p5.json';
import top_mitty_p6 from '../data/top/topmitty/p6.json';

import dsr_naur_p2 from '../data/dsr/naur/p2.json';
import dsr_naur_p3 from '../data/dsr/naur/p3.json';
import dsr_naur_p4 from '../data/dsr/naur/p4.json';
import dsr_naur_p4b from '../data/dsr/naur/p4b.json';
import dsr_naur_p5 from '../data/dsr/naur/p5.json';
import dsr_naur_p6 from '../data/dsr/naur/p6.json';
import dsr_naur_p7 from '../data/dsr/naur/p7.json';

// Futures Rewritten
const FRU_fmbg = [
  fru_fmbg_p1,
  fru_fmbg_p2,
  fru_fmbg_p3,
  fru_fmbg_p4,
  fru_fmbg_p5,
];

const FRU_naur = [
  fru_naur_p1,
  fru_naur_p2,
  fru_naur_p3,
  fru_naur_p4,
  fru_naur_p5,
];

const FRU = {
  fmbg: FRU_fmbg,
  naur: FRU_naur,
};

const TOP_mitty = [
  top_mitty_p1,
  top_mitty_p2,
  top_mitty_p3,
  top_mitty_p4,
  top_mitty_p5,
  top_mitty_p6,
];

const TOP = {
  mitty: TOP_mitty,
};

// Dragon Song Reprise
const DSR_naur = [
  dsr_naur_p2,
  dsr_naur_p3,
  dsr_naur_p4,
  dsr_naur_p4b,
  dsr_naur_p5,
  dsr_naur_p6,
  dsr_naur_p7,
];

const DSR = {
  naur: DSR_naur,
};

const encounters = { FRU, TOP, DSR };

export default encounters;

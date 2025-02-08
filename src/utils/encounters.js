import data from '../data';

// Futures Rewritten
const FRU_fmbg = [
  data.fru.fmbg.p1,
  data.fru.fmbg.p2,
  data.fru.fmbg.p3,
  data.fru.fmbg.p4,
  data.fru.fmbg.p5,
];

const FRU_naur = [data.fru.naur.p1];

const FRU = {
  fmbg: FRU_fmbg,
  naur: FRU_naur,
};

// Dragon Song Reprise
const DSR_naur = [data.dsr.naur.p2, data.dsr.naur.p3];

const DSR = {
  naur: DSR_naur,
};

const encounters = { FRU, DSR };

export default encounters;

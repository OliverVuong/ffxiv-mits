// set order in which roles will be displayed
export const roles = [
  'T1',
  'T2',
  'SCH',
  'SGE',
  'WHM',
  'AST',
  'M1',
  'M2',
  'PRange',
  'Caster',
];

export const tankCombos = [
  'WARGNB_WAR',
  'WARGNB_GNB',
  'WARPLD_WAR',
  'WARPLD_PLD',
  'WARDRK_WAR',
  'WARDRK_DRK',
  'GNBDRK_GNB',
  'GNBDRK_DRK',
  'GNBPLD_GNB',
  'GNBPLD_PLD',
  'PLDDRK_PLD',
  'PLDDRK_DRK',
  'PLDGNB_PLD',
  'PLDGNB_GNB',
  'Tank 1',
  'Tank 2',
];

export const displayNameMap = {
  WARGNB_WAR: 'WAR',
  WARGNB_GNB: 'GNB',
  WARPLD_WAR: 'WAR',
  WARPLD_PLD: 'PLD',
  WARDRK_WAR: 'WAR',
  WARDRK_DRK: 'DRK',
  GNBDRK_GNB: 'GNB',
  GNBDRK_DRK: 'DRK',
  GNBPLD_GNB: 'GNB',
  GNBPLD_PLD: 'PLD',
  PLDDRK_PLD: 'PLD',
  PLDDRK_DRK: 'DRK',
  PLDGNB_PLD: 'PLD',
  PLDGNB_GNB: 'GNB',
  'Tank 1': 'Tank 1',
  'Tank 2': 'Tank 2',
  T1: 'T1',
  T2: 'T2',
  SCH: 'SCH',
  SGE: 'SGE',
  WHM: 'WHM',
  AST: 'AST',
  M1: 'M1',
  M2: 'M2',
  PRange: 'PRange',
  Caster: 'Caster',
  BRD: 'BRD',
  RDM: 'RDM',
  MCH: 'MCH',
  PLD: 'PLD',
  MNK: 'MNK',
  CASTER2: 'Double Caster',
};

export const tankStateDefault = {};
for (const combo of tankCombos) {
  tankStateDefault[combo] = false;
}

export const tankCombosByPlan = {
  FRU: {
    fmbg: [
      ['WARGNB_WAR', 'WARGNB_GNB'],
      ['WARPLD_WAR', 'WARPLD_PLD'],
      ['WARDRK_WAR', 'WARDRK_DRK'],
      ['GNBDRK_GNB', 'GNBDRK_DRK'],
      ['GNBPLD_GNB', 'GNBPLD_PLD'],
      ['PLDDRK_PLD', 'PLDDRK_DRK'],
    ],
    naur: [
      ['WARGNB_WAR', 'WARGNB_GNB'],
      ['WARPLD_WAR', 'WARPLD_PLD'],
      ['WARDRK_WAR', 'WARDRK_DRK'],
      ['GNBDRK_GNB', 'GNBDRK_DRK'],
      ['PLDGNB_PLD', 'PLDGNB_GNB'],
      ['PLDDRK_PLD', 'PLDDRK_DRK'],
    ],
    frumitty: [['T1', 'T2']],
  },
  TOP: {
    mitty: [
      ['WARGNB_WAR', 'WARGNB_GNB'],
      ['WARPLD_WAR', 'WARPLD_PLD'],
      ['WARDRK_WAR', 'WARDRK_DRK'],
      ['GNBDRK_GNB', 'GNBDRK_DRK'],
      ['PLDGNB_PLD', 'PLDGNB_GNB'],
      ['PLDDRK_PLD', 'PLDDRK_DRK'],
    ],
  },
  DSR: {
    naur: [
      ['WARGNB_WAR', 'WARGNB_GNB'],
      ['WARPLD_WAR', 'WARPLD_PLD'],
      ['WARDRK_WAR', 'WARDRK_DRK'],
      ['GNBDRK_GNB', 'GNBDRK_DRK'],
      ['GNBPLD_GNB', 'GNBPLD_PLD'],
      ['PLDDRK_PLD', 'PLDDRK_DRK'],
    ],
  },
};

export const extras = ['BRD', 'RDM', 'MCH', 'PLD', 'MNK', 'CASTER2'];

export const extrasDefault = {};
for (const extra of extras) {
  extrasDefault[extra] = false;
}

export const isTank = (input) => {
  return tankCombos.includes(input);
};

const mitsFRU = ['fmbg', 'naur'];
const mitsTOP = ['mitty'];
const mitsDSR = ['naur', 'dsrmitty'];
export const mits = {
  FRU: mitsFRU,
  TOP: mitsTOP,
  DSR: mitsDSR,
};

export const defaultMitPlan = {
  FRU: 'fmbg',
  TOP: 'mitty',
  DSR: 'naur',
};

export const encounterNameMap = {
  FRU: 'Futures Rewritten',
  TOP: 'The Omega Protocol',
  DSR: "Dragonsong's Reprise",
};

export const encounters = ['FRU', 'TOP', 'DSR'];

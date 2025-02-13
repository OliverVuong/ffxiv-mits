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
  't1',
  't2',
];

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
    frumitty: [['t1', 't2']],
  },
};

export const isTank = (input) => {
  return tankCombos.includes(input);
};

const mitsFRU = ['fmbg', 'naur'];
const mitsDSR = ['naur', 'dsrmitty'];
export const mits = {
  FRU: mitsFRU,
  DSR: mitsDSR,
};

export const encounters = ['FRU', 'DSR'];

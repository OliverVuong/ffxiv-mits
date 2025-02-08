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
];

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

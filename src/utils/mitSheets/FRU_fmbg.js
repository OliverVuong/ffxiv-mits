import fru_fmbg_p1 from '../../data/fru/fmbg/p1.json';
import fru_fmbg_p2 from '../../data/fru/fmbg/p2.json';
import fru_fmbg_p3 from '../../data/fru/fmbg/p3.json';
import fru_fmbg_p4 from '../../data/fru/fmbg/p4.json';
import fru_fmbg_p5 from '../../data/fru/fmbg/p5.json';

const FRU_fmbg = {
  data: [
    fru_fmbg_p1,
    fru_fmbg_p2,
    fru_fmbg_p3,
    fru_fmbg_p4,
    fru_fmbg_p5,
  ],
  tankCombos: [
    ['WARGNB_WAR', 'WARGNB_GNB'],
    ['WARPLD_WAR', 'WARPLD_PLD'],
    ['WARDRK_WAR', 'WARDRK_DRK'],
    ['GNBDRK_GNB', 'GNBDRK_DRK'],
    ['GNBPLD_GNB', 'GNBPLD_PLD'],
    ['PLDDRK_PLD', 'PLDDRK_DRK'],
  ],
  extras: ['BRD', 'RDM', 'MCH', 'PLD', 'MNK', 'CASTER2'],
  name: 'Futures Rewritten (FMBG)',
};

export default FRU_fmbg;

import fru_naur_p1 from '../../data/fru/naur/p1.json';
import fru_naur_p2 from '../../data/fru/naur/p2.json';
import fru_naur_p3 from '../../data/fru/naur/p3.json';
import fru_naur_p4 from '../../data/fru/naur/p4.json';
import fru_naur_p5 from '../../data/fru/naur/p5.json';

const FRU_naur = {
  data: [
    fru_naur_p1,
    fru_naur_p2,
    fru_naur_p3,
    fru_naur_p4,
    fru_naur_p5,
  ],
  tankCombos: [
    ['WARGNB_WAR', 'WARGNB_GNB'],
    ['WARPLD_WAR', 'WARPLD_PLD'],
    ['WARDRK_WAR', 'WARDRK_DRK'],
    ['GNBDRK_GNB', 'GNBDRK_DRK'],
    ['PLDGNB_PLD', 'PLDGNB_GNB'],
    ['PLDDRK_PLD', 'PLDDRK_DRK'],
  ],
  extras: ['RDM', 'MCH', 'PLD'],
  name: 'Futures Rewritten (NAUR Room-Mits)',
};

export default FRU_naur;

import dsr_naur_p2 from '../../data/dsr/naur/p2.json';
import dsr_naur_p3 from '../../data/dsr/naur/p3.json';
import dsr_naur_p4 from '../../data/dsr/naur/p4.json';
import dsr_naur_p4b from '../../data/dsr/naur/p4b.json';
import dsr_naur_p5 from '../../data/dsr/naur/p5.json';
import dsr_naur_p6 from '../../data/dsr/naur/p6.json';
import dsr_naur_p7 from '../../data/dsr/naur/p7.json';

const DSR = {
  data: [
    dsr_naur_p2,
    dsr_naur_p3,
    dsr_naur_p4,
    dsr_naur_p4b,
    dsr_naur_p5,
    dsr_naur_p6,
    dsr_naur_p7,
  ],
  tankCombos: [
    ['WARGNB_WAR', 'WARGNB_GNB'],
    ['WARPLD_WAR', 'WARPLD_PLD'],
    ['WARDRK_WAR', 'WARDRK_DRK'],
    ['GNBDRK_GNB', 'GNBDRK_DRK'],
    ['GNBPLD_GNB', 'GNBPLD_PLD'],
    ['PLDDRK_PLD', 'PLDDRK_DRK'],
  ],
  extras: ['RDM', 'MCH', 'CASTER2', 'PRange2'],
  name: `Dragonsong's Reprise`,
};

export default DSR;

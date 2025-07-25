import top_mitty_p1 from '../../data/top/topmitty/p1.json';
import top_mitty_p2 from '../../data/top/topmitty/p2.json';
import top_mitty_p3 from '../../data/top/topmitty/p3.json';
import top_mitty_p4 from '../../data/top/topmitty/p4.json';
import top_mitty_p5 from '../../data/top/topmitty/p5.json';
import top_mitty_p6 from '../../data/top/topmitty/p6.json';

const TOP = {
  data: [
    top_mitty_p1,
    top_mitty_p2,
    top_mitty_p3,
    top_mitty_p4,
    top_mitty_p5,
    top_mitty_p6,
  ],
  tankCombos: [
    ['WARGNB_WAR', 'WARGNB_GNB'],
    ['WARPLD_WAR', 'WARPLD_PLD'],
    ['WARDRK_WAR', 'WARDRK_DRK'],
    ['GNBDRK_GNB', 'GNBDRK_DRK'],
    ['GNBPLD_GNB', 'GNBPLD_PLD'],
    ['PLDDRK_PLD', 'PLDDRK_DRK'],
  ],
  extras: ['RDM', 'MCH'],
  name: 'The Omega Protocol',
};

export default TOP;

import dynamits_p1 from '../../data/top/rundynamit/p1.json';
import dynamits_p2 from '../../data/top/rundynamit/p2.json';
import dynamits_p3 from '../../data/top/rundynamit/p3.json';
import dynamits_p4 from '../../data/top/rundynamit/p4.json';
import dynamits_p5 from '../../data/top/rundynamit/p5.json';
import dynamits_p6 from '../../data/top/rundynamit/p6.json';

const TOP = {
  data: [
    dynamits_p1,
    dynamits_p2,
    dynamits_p3,
    dynamits_p4,
    dynamits_p5,
    dynamits_p6,
  ],
  tankCombos: [
    ['WARGNB_WAR', 'WARGNB_GNB'],
    ['WARPLD_WAR', 'WARPLD_PLD'],
    ['WARDRK_WAR', 'WARDRK_DRK'],
    ['GNBDRK_GNB', 'GNBDRK_DRK'],
    ['GNBPLD_GNB', 'GNBPLD_PLD'],
    ['PLDDRK_PLD', 'PLDDRK_DRK'],
  ],
  extras: ['BRD', 'RDM', 'MCH', 'MNK', 'CASTER2'],
  name: 'The Omega Protocol',
};

export default TOP;

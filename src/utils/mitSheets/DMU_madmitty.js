import madmitty_p1 from '../../data/dmu/madmitty/p1.json';
import madmitty_p2 from '../../data/dmu/madmitty/p2.json';
/* 
import madmitty_p3 from '../../data/dmu/madmitty/p3.json';
import madmitty_p4 from '../../data/dmu/madmitty/p4.json';
import madmitty_p5 from '../../data/dmu/madmitty/p5.json';
import madmitty_p6 from '../../data/dmu/madmitty/p6.json'; 
*/

const DMU_madmitty = {
  data: [
    madmitty_p1,
    madmitty_p2,
    /* 
    madmitty_p3,
    madmitty_p4,
    madmitty_p5,
    madmitty_p6, 
    */
  ],
  tankCombos: [
    ['WARGNB_WAR', 'WARGNB_GNB'],
    ['WARPLD_WAR', 'WARPLD_PLD'],
    ['WARDRK_WAR', 'WARDRK_DRK'],
    ['GNBDRK_GNB', 'GNBDRK_DRK'],
    ['GNBPLD_GNB', 'GNBPLD_PLD'],
    ['PLDDRK_PLD', 'PLDDRK_DRK'],
  ],
  extras: [
    /* 'BRD', 'RDM', 'MCH', 'MNK', 'CASTER2' */
  ],
  name: 'MadMitty (under construction)',
};

export default DMU_madmitty;

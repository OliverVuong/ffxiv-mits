import ikuya_p1 from '../../data/dmu/ikuya/p1.json';
import ikuya_p2 from '../../data/dmu/ikuya/p2.json';
import ikuya_p3 from '../../data/dmu/ikuya/p3.json';
import ikuya_p4 from '../../data/dmu/ikuya/p4.json';
import ikuya_p5 from '../../data/dmu/ikuya/p5.json';

const DMU_ikuya = {
  data: [ikuya_p1, ikuya_p2, ikuya_p3, ikuya_p4, ikuya_p5],
  tankCombos: [['MT', 'OT']],
  /* tankCombos: [
    ['WARDRK_WAR', 'WARDRK_DRK'],
    ['WARGNB_WAR', 'WARGNB_GNB'],
    ['WARPLD_WAR', 'WARPLD_PLD'],
    ['PLDGNB_PLD', 'PLDGNB_GNB'],
    ['PLDDRK_PLD', 'PLDDRK_DRK'],
    ['GNBDRK_GNB', 'GNBDRK_DRK'],
  ], */
  extras: ['EXTRA'],
  name: 'Dancing Mad (Ikuya)',
};

export default DMU_ikuya;

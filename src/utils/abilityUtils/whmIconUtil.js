import AquaveilIcon from '../../assets/icons/spells/whm/Aquaveil.png';
import AssizeIcon from '../../assets/icons/spells/whm/Assize.png';
import AsylumIcon from '../../assets/icons/spells/whm/Asylum.png';
import BenedictionIcon from '../../assets/icons/spells/whm/Benediction.png';
import CureIII_Icon from '../../assets/icons/spells/whm/CureIII.png';
import DivineBenisonIcon from '../../assets/icons/spells/whm/DivineBenison.png';
import MedicaII_Icon from '../../assets/icons/spells/whm/MedicaII.png';
import MedicaIII_Icon from '../../assets/icons/spells/whm/MedicaIII.png';
import PlenaryIndulgenceIcon from '../../assets/icons/spells/whm/PlenaryIndulgence.png';
import RegenIcon from '../../assets/icons/spells/whm/Regen.png';
import TetragrammatonIcon from '../../assets/icons/spells/whm/Tetragrammaton.png';

const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/whm/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const Aquaveil = {
  name: 'Aquaveil',
  img: AquaveilIcon,
};
const Assize = {
  name: 'Assize',
  img: AssizeIcon,
};
const Asylum = {
  name: 'Asylum',
  img: AsylumIcon,
};
const Benediction = {
  name: 'Bene',
  img: BenedictionIcon,
};
const CureIII = {
  name: 'Cure III',
  img: CureIII_Icon,
};
const DivineBenison = {
  name: 'Benison',
  img: DivineBenisonIcon,
  captionClass: 'overflow90',
};
const MedicaII = {
  name: 'Medica II',
  img: MedicaII_Icon,
  captionClass: 'overflow90',
};
const MedicaIII = {
  name: 'Medica III',
  img: MedicaIII_Icon,
};
const PlenaryIndulgence = {
  name: 'Plenary',
  img: PlenaryIndulgenceIcon,
};
const Confession = {
  name: 'Confession',
  img: PlenaryIndulgenceIcon,
  captionClass: 'overflow80',
};
const Regen = {
  name: 'Regen',
  img: RegenIcon,
};
const Tetragrammaton = {
  name: 'Tetra',
  img: TetragrammatonIcon,
};

const bell = {
  name: 'Bell',
  img: images[0].default,
};
const caress = {
  name: 'Caress',
  img: images[1].default,
};
const divinecaressCO = {
  img: images[1].default,
  name: '↪Caress',
  iconClass: 'isGreyscale',
};
const temperance = {
  name: 'Temp',
  img: images[2].default,
};
const temperanceCO = {
  name: '↪Temp',
  img: images[2].default,
  iconClass: 'isGreyscale',
};

const whmMap = {
  Bell: bell,
  'Lilly Bell': bell,
  Caress: caress,
  divinecaressCO,
  Temperance: temperance,
  'Temperance co': temperanceCO,
  'Temperance CO': temperanceCO,
  Aquaveil,
  Assize,
  Asylum,
  Benediction,
  CureIII,
  'Cure III': CureIII,
  'Cure 3': CureIII,
  DivineBenison,
  'Divine Benison': DivineBenison,
  MedicaII,
  'Medica II': MedicaII,
  'Medica 2': MedicaII,
  MedicaIII,
  'Medica III': MedicaIII,
  'Medica 3': MedicaIII,
  'Plenary Indulgence': PlenaryIndulgence,
  Confession,
  Regen,
  Tetragrammaton,
};

export default whmMap;

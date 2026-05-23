import AspectedBeneficIcon from '../../assets/icons/spells/ast/AspectedBenefic.png';
import AspectedHeliosIcon from '../../assets/icons/spells/ast/AspectedHelios.png';
import BenefitcIIIcon from '../../assets/icons/spells/ast/BenefitcII.png';
import CelestialIntersectionIcon from '../../assets/icons/spells/ast/CelestialIntersection.png';
import CelestialOppositionIcon from '../../assets/icons/spells/ast/CelestialOpposition.png';
import EssentialDignityIcon from '../../assets/icons/spells/ast/EssentialDignity.png';
import ExaltationIcon from '../../assets/icons/spells/ast/Exaltation.png';
import HeliosConjunctionIcon from '../../assets/icons/spells/ast/HeliosConjunction.png';
import HoroscopeTriggerIcon from '../../assets/icons/spells/ast/HoroscopeTrigger.png';
import LightspeedIcon from '../../assets/icons/spells/ast/Lightspeed.png';
import MicrocosmosIcon from '../../assets/icons/spells/ast/Microcosmos.png';
import MinorArcanaIcon from '../../assets/icons/spells/ast/MinorArcana.png';
import PlayIIIcon from '../../assets/icons/spells/ast/PlayII.png';
import PlayIIIIcon from '../../assets/icons/spells/ast/PlayIII.png';
import StellarDetonationIcon from '../../assets/icons/spells/ast/StellarDetonation.png';
import SynastryIcon from '../../assets/icons/spells/ast/Synastry.png';
import UnaspectedHeliosIcon from '../../assets/icons/spells/ast/UnaspectedHelios.png';
//import HoroscopeIcon from '../../assets/icons/spells/ast/Horoscope.png';

const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/ast/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const AspectedBenefic = {
  name: 'Benefic',
  img: AspectedBeneficIcon,
};
const AspectedHelios = {
  name: 'Helios',
  img: AspectedHeliosIcon,
};
const BenefitcII = {
  name: 'Benefitc II',
  img: BenefitcIIIcon,
};
const CelestialIntersection = {
  name: 'Intersection',
  img: CelestialIntersectionIcon,
  captionClass: 'overflow80',
};
const CelestialOpposition = {
  name: 'CO',
  img: CelestialOppositionIcon,
};
const EssentialDignity = {
  name: 'ED',
  img: EssentialDignityIcon,
};
const Exaltation = {
  name: 'Exaltation',
  img: ExaltationIcon,
};
const HeliosConjunction = {
  name: 'Helios',
  img: HeliosConjunctionIcon,
};
const HoroscopeTrigger = {
  name: 'HoroscopeTrigger',
  img: HoroscopeTriggerIcon,
};
const Lightspeed = {
  name: 'Lightspeed',
  img: LightspeedIcon,
};
const Microcosmos = {
  name: 'Microcosmos',
  img: MicrocosmosIcon,
};
const MinorArcana = {
  name: 'Minor Arcana',
  img: MinorArcanaIcon,
};
const PlayII = {
  name: 'Def-Cards',
  img: PlayIIIcon,
  captionClass: 'overflow80',
};
const PlayIII = {
  name: 'Def-Cards',
  img: PlayIIIIcon,
  captionClass: 'overflow80',
};
const StellarDetonation = {
  name: 'Detonation',
  img: StellarDetonationIcon,
  captionClass: 'overflow80',
};
const Synastry = {
  name: 'Synastry',
  img: SynastryIcon,
};
const UnaspectedHelios = {
  name: 'Helios',
  img: UnaspectedHeliosIcon,
};

const cu = {
  name: 'CU',
  img: images[0].default,
};
const cuG = {
  name: 'CU',
  img: images[0].default,
  iconClass: 'isGreyscale',
};
const horoscope = {
  name: 'Horoscope',
  img: images[1].default,
  captionClass: 'overflow80',
};
const macrocosmos = {
  name: 'Macro',
  img: images[2].default,
};
const macrocosmosCO = {
  img: images[2].default,
  name: '↪Macro',
  iconClass: 'isGreyscale',
};
const neutralsect = {
  name: 'Neutral',
  img: images[3].default,
};
const neutralsectCO = {
  name: '↪Neutral',
  img: images[3].default,
  iconClass: 'isGreyscale',
};
const star = {
  name: 'Star',
  img: images[4].default,
};
const sunsign = {
  name: 'Sun',
  img: images[5].default,
};
const sunsignCO = {
  name: '↪Sun',
  img: images[5].default,
  iconClass: 'isGreyscale',
};

const astMap = {
  CU: cu,
  'Collective Unconscious': cu,
  cuG,
  horoscope,
  Horoscope: horoscope,
  Macro: macrocosmos,
  Macrocosmos: macrocosmos,
  macrocosmosCO,
  'Neutral Sect': neutralsect,
  Neutral: neutralsect,
  neutralsectCO,
  'Neutral co': neutralsectCO,
  Star: star,
  Sun: sunsign,
  'Sun Sign': sunsign,
  sunsignCO,
  'Sun Sign co': sunsignCO,
  AspectedBenefic,
  AspectedHelios,
  'Aspected Helios': AspectedHelios,
  BenefitcII,
  CelestialIntersection,
  'Celestial Intersection': CelestialIntersection,
  CelestialOpposition,
  'Celestial Opposition': CelestialOpposition,
  EssentialDignity,
  'Essential Dignity': EssentialDignity,
  Exaltation,
  HeliosConjunction,
  Helios: HeliosConjunction,
  HoroscopeTrigger,
  Lightspeed,
  Microcosmos,
  MinorArcana,
  PlayII,
  'Play II': PlayII,
  PlayIII,
  'Play III': PlayIII,
  StellarDetonation,
  'Stellar Detonation': StellarDetonation,
  Synastry,
  UnaspectedHelios,
  'Unaspected Helios': UnaspectedHelios,
};

export default astMap;

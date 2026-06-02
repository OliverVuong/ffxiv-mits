import excogitationIcon from '../../assets/icons/spells/sch/excogitation.png';
import AetherpactIcon from '../../assets/icons/spells/sch/Aetherpact.png';
import DissipationIcon from '../../assets/icons/spells/sch/Dissipation.png';
import IndomitabilityIcon from '../../assets/icons/spells/sch/Indomitability.png';
import FeyBlessingIcon from '../../assets/icons/spells/sch/Fey_Blessing.png';
import LustrateIcon from '../../assets/icons/spells/sch/Lustrate.png';

const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/sch/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

const excogitation = {
  name: 'Excog',
  img: excogitationIcon,
};
const dissipation = {
  name: 'Dissipation',
  img: DissipationIcon,
  captionClass: 'overflow80',
};
const indomitability = {
  name: 'Indom',
  img: IndomitabilityIcon,
};
const feyblessing = {
  name: 'Fey',
  img: FeyBlessingIcon,
};
const aetherpact = {
  name: 'Tether',
  img: AetherpactIcon,
};
const Lustrate = {
  name: 'Lustrate',
  img: LustrateIcon,
};

const adloquium = {
  name: 'Adlo',
  img: images[0].default,
};
const concitation = {
  name: 'Concit',
  img: images[1].default,
};
const consolation = {
  name: 'Consolation',
  img: images[2].default,
  captionClass: 'overflow80',
};
const seraph1 = {
  name: 'Seraph 1',
  img: images[2].default,
  captionClass: 'overflow90',
};
const seraph2 = {
  name: 'Seraph 2',
  img: images[2].default,
  captionClass: 'overflow90',
};
const consolationCO = {
  img: images[2].default,
  name: '↪Consolation',
  captionClass: 'overflow80',
};
const expedient = {
  name: 'Expedient',
  img: images[3].default,
  captionClass: 'overflow80',
};
const expedientCO = {
  name: '↪Expedient',
  img: images[3].default,
  captionClass: 'overflow80',
  iconClass: 'isGreyscale',
};
const feyillum = {
  name: 'Illum',
  img: images[4].default,
};
const FeyillumGrey = {
  name: 'Illum',
  img: images[4].default,
  iconClass: 'isGreyscale',
};
const feyillumCO = {
  name: '↪Illum',
  img: images[4].default,
  iconClass: 'isGreyscale',
};
const recitConcitation = {
  name: 'RecitCon',
  img: images[5].default,
};
const recitConcitationCO = {
  name: '↪RecitCon',
  img: images[5].default,
  iconClass: 'isGreyscale',
};
const recitSuccor = {
  name: 'Recit Succor',
  img: images[6].default,
};
const recitSuccorCO = {
  name: 'Recit Succor',
  img: images[6].default,
  iconClass: 'isGreyscale',
};
const seraph = {
  name: 'Seraph',
  img: images[7].default,
};
const SeraphGrey = {
  name: 'Seraph',
  img: images[7].default,
  iconClass: 'isGreyscale',
};
const seraphCO = {
  name: '↪Seraph',
  img: images[7].default,
  iconClass: 'isGreyscale',
};
const seraphism = {
  name: 'Seraphism',
  img: images[8].default,
  captionClass: 'overflow80',
};
const seraphismCO = {
  name: '↪Seraphism',
  img: images[8].default,
  iconClass: 'isGreyscale',
  captionClass: 'overflow80',
};
const soil = {
  name: 'Soil',
  img: images[9].default,
};
const soilG = {
  name: 'Soil',
  img: images[9].default,
  iconClass: 'isGreyscale',
};
const soilCO = {
  name: '↪Soil',
  img: images[9].default,
  iconClass: 'isGreyscale',
};
const spreadlo = {
  name: 'Spreadlo',
  img: images[10].default,
  captionClass: 'overflow90-with-note',
};
const succor = {
  name: 'Succor',
  img: images[11].default,
};
const SuccorGrey = {
  name: 'Succor',
  img: images[11].default,
  iconClass: 'isGreyscale',
};
const whisperingdawn = {
  name: 'WD',
  img: images[12].default,
};
const whisperingdawnG = {
  name: 'WD',
  img: images[12].default,
  iconClass: 'isGreyscale',
};

const schMap = {
  adloquium,
  Adloquium: adloquium,
  Concitation: concitation,
  Concit: concitation,
  Consolation: consolation,
  consolationCO,
  Expedient: expedient,
  'Expedient co': expedientCO,
  'Fey Illum': feyillum,
  Fey: feyillum,
  'Fey Illumination': feyillum,
  'Fey Illum co': feyillumCO,
  'Fey Illumination co': feyillumCO,
  'Fey Illumination cont': feyillumCO,
  FeyillumGrey,
  recitConcitation,
  'Recit Concitation': recitConcitation,
  recitConcitationCO,
  recitSuccor,
  recitSuccorCO,
  Seraph: seraph,
  SeraphGrey,
  'Seraph co': seraphCO,
  Seraphism: seraphism,
  'Seraphism co': seraphismCO,
  Soil: soil,
  'Sacred Soil': soil,
  'Soil grey': soilG,
  'Soil co': soilCO,
  'Soil cont': soilCO,
  'Sacred Soil cont': soilCO,
  'Spread-Lo': spreadlo,
  Spreadlo: spreadlo,
  'Recit Spread-Lo': spreadlo,
  succor,
  Succor: succor,
  SuccorGrey,
  'Whispering Dawn': whisperingdawn,
  'Whispering Dawn grey': whisperingdawnG,
  Whisper: whisperingdawn,
  Excog: excogitation,
  dissipation,
  Dissipation: dissipation,
  indomitability,
  Indom: indomitability,
  feyblessing,
  'Fey Blessing': feyblessing,
  aetherpact,
  Aetherpact: aetherpact,
  seraph1,
  Seraph1: seraph1,
  seraph2,
  Seraph2: seraph2,
  Lustrate,
};

export default schMap;

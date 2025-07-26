const images = Object.values(
  import.meta.glob(
    '../../assets/icons/abilities/sch/*.{png,jpg,jpeg,PNG,JPEG}',
    { eager: true, query: 'url' }
  )
);

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
};
const consolationCO = {
  img: images[2].default,
  name: '↪Consolation',
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
};
const feyillum = {
  name: 'Illum',
  img: images[4].default,
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
const whisperingdawn = {
  name: 'WD',
  img: images[12].default,
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
  recitConcitation,
  'Recit Concitation': recitConcitation,
  recitConcitationCO,
  recitSuccor,
  recitSuccorCO,
  Seraph: seraph,
  'Seraph co': seraphCO,
  Seraphism: seraphism,
  'Seraphism co': seraphismCO,
  Soil: soil,
  'Soil grey': soilG,
  'Soil co': soilCO,
  'Spread-Lo': spreadlo,
  Spreadlo: spreadlo,
  'Recit Spread-Lo': spreadlo,
  succor,
  Succor: succor,
  'Whispering Dawn': whisperingdawn,
};

export default schMap;

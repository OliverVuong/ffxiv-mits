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
  img: images[3].default,
  name: '↪Consolation',
};
const expedient = {
  name: 'Expedient',
  img: images[4].default,
};
const expedientCO = {
  name: '↪Expedient',
  img: images[5].default,
};
const feyillum = {
  name: 'Illum',
  img: images[6].default,
};
const feyillumCO = {
  name: '↪Illum',
  img: images[7].default,
};
const recitConcitation = {
  name: 'RecitCon',
  img: images[8].default,
};
const recitConcitationCO = {
  name: '↪RecitCon',
  img: images[9].default,
};
const recitSuccor = {
  name: 'Recit Succor',
  img: images[10].default,
};
const recitSuccorCO = {
  name: 'Recit Succor',
  img: images[11].default,
};
const seraph = {
  name: 'Seraph',
  img: images[12].default,
};
const seraphCO = {
  name: '↪Seraph',
  img: images[13].default,
};
const seraphism = {
  name: 'Seraphism',
  img: images[14].default,
};
const seraphismCO = {
  name: '↪Seraphism',
  img: images[15].default,
};
const soil = {
  name: 'Soil',
  img: images[16].default,
};
const soilG = {
  name: 'Soil',
  img: images[17].default,
};
const soilCO = {
  name: '↪Soil',
  img: images[17].default,
};
const spreadlo = {
  name: 'Spreadlo',
  img: images[18].default,
};
const succor = {
  name: 'Succor',
  img: images[19].default,
};
const whisperingdawn = {
  name: 'WD',
  img: images[20].default,
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

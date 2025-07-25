import { useState, useRef } from 'react'
import Header from './components/Header'
import './App.css'
import { extrasDefault } from './utils/utils'
import { tankCombos } from './utils/utils'
import Credits from './components/Footer'
import CreditsModal from './components/CreditsModal'
import Content from './components/Content'

/* import {RoleCheck} from './components/Table'
import AbilityCard from './components/AbilityCard' */

function App() {

  // set order in which roles will be displayed
  const roles = [
    'T1',
    'T2',
    'SCH',
    'SGE',
    'WHM',
    'AST',
    'M1',
    'M2',
    'PRange',
    'Caster'
  ];

  const defaults = {};
  for(const role of roles){
    defaults[role] = true;
  }

  const tankDefaults = {};
  for(const combo of tankCombos){
    tankDefaults[combo] = false;
  }

  const [roleView, setRoleView] = useState(defaults);
  const [tankView, setTankView] = useState(tankDefaults);
  const [extraPicks, setExtraPicks] = useState(extrasDefault);
  const [encounter, setEncounter] = useState('FRU');
  const [mitplan, setMitplan] = useState('fmbg');
  const [isOpenCredits, setIsOpenCredits] = useState(false);
  const phasesRef = useRef([]);
  const [sheet, setSheet] = useState('FRU_fmbg');

  const mainContent = 
    <Content
      roleView={roleView}
      setRoleView={setRoleView}
      tankView={tankView}
      setTankView={setTankView}
      encounter={encounter}
      setEncounter={setEncounter}
      mitplan={mitplan}
      setMitplan={setMitplan}
      extraPicks={extraPicks}
      setExtraPicks={setExtraPicks}
      phasesRef={phasesRef}
      sheet={sheet}
      setSheet={setSheet}
    />

  return (
    <>
      <Header 
        setIsOpenCredits={setIsOpenCredits}
      />
      <CreditsModal 
        open={isOpenCredits}
        setOpen={setIsOpenCredits}
      />
      {mainContent}
      <Credits></Credits>
    </>
  )
}

export default App

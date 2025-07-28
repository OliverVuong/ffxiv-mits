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
  const [isOpenCredits, setIsOpenCredits] = useState(false);
  const phasesRef = useRef([]);

  return (
    <>
      <Header 
        setIsOpenCredits={setIsOpenCredits}
      />
      <CreditsModal 
        open={isOpenCredits}
        setOpen={setIsOpenCredits}
      />
      <Content
        roleView={roleView}
        setRoleView={setRoleView}
        tankView={tankView}
        setTankView={setTankView}
        extraPicks={extraPicks}
        setExtraPicks={setExtraPicks}
        phasesRef={phasesRef}
      />
      <Credits></Credits>
    </>
  )
}

export default App

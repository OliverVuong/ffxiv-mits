import { useState } from 'react'
import {RoleCheck} from './components/Table'
import Selectors from './components/Selectors'
import { EncounterView } from './components/Table'
import Navigation from './components/Navigation'
import './App.css'
import { extrasDefault } from './utils/utils'
import AbilityCard from './components/AbilityCard'

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

  const tankCombos = [
    'WARGNB_WAR',
    'WARGNB_GNB',
    'WARPLD_WAR',
    'WARPLD_PLD',
    'WARDRK_WAR',
    'WARDRK_DRK',
    'GNBDRK_GNB',
    'GNBDRK_DRK',
    'GNBPLD_GNB',
    'GNBPLD_PLD',
    'PLDDRK_PLD',
    'PLDDRK_DRK'
  ];

  const tankDefaults = {};
  for(const combo of tankCombos){
    tankDefaults[combo] = false;
  }

  const [roleView, setRoleView] = useState(defaults);
  const [tankView, setTankView] = useState(tankDefaults);
  const [extraPicks, setExtraPicks] = useState(extrasDefault);
  const [encounter, setEncounter] = useState('FRU');
  const [mitplan, setMitplan] = useState('fmbg');
  return (
    <>
      <h1>Timeline</h1>
      <Selectors
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
      />
      <RoleCheck
        //roles={roles}
        roleView={roleView}
        //tankCombos={tankCombos}
        tankView={tankView}
      />
      <AbilityCard 
        input={'Reprisal'}
      />
      <AbilityCard 
        input={'Shadowed Vigil'}
      />
      <AbilityCard 
        input={'Shaded viil'}
      />
      <EncounterView 
        encounter={encounter}
        mitplan={mitplan}
        roleOptions={roleView}
        tankOptions={tankView}
        extraOptions={extraPicks}
      />
      <Navigation
        encounter={encounter}
        mitplan={mitplan}
      />
    </>
  )
}

export default App

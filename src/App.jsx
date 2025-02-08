import { useState } from 'react'
import {Table} from './components/Table'
import Selectors from './components/Selectors'
import { EncounterView } from './components/Table'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

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
      />
      <EncounterView 
        encounter={encounter}
        mitplan={mitplan}
        roleOptions={roleView}
        tankOptions={tankView}
      />
      <Table
        //roles={roles}
        roleView={roleView}
        //tankCombos={tankCombos}
        tankView={tankView}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

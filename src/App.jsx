import { useState } from 'react'
import Table from './components/Table'
import Selectors from './components/Selectors'
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

  const [selections, setSelections] = useState(defaults);

  return (
    <>
      <h1>Timeline</h1>
      <Selectors
        selections={selections}
        setSelections={setSelections}
      />
      <Table
        roles={roles}
        selections={selections}
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

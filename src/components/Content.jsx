/* eslint-disable react/prop-types */
import {useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Selectors from "./Selectors";
import { EncounterView } from "./Table";
import Navigation from "./Navigation";
import { allSheets } from '../utils/mitSheets/mitSheetsUtil';

function Content({ 
    roleView, 
    setRoleView,
    tankView, 
    setTankView,
    extraPicks,
    setExtraPicks,
    phasesRef,
 }) {
    const location = useLocation();
    const [sheet, setSheet] = useState('FRU_fmbg');

    useEffect(() => {
        if (location.pathname === '/ffxiv-mits') {
            setSheet('FRU_fmbg');
        } else if (location.pathname === '/ffxiv-mits/fru'){
            setSheet('FRU_fmbg');
        } else if (location.pathname === '/ffxiv-mits/fru/fmbg'){
            setSheet('FRU_fmbg');
        } else if (location.pathname === '/ffxiv-mits/fru/naur'){
            setSheet('FRU_naur');
        } else if (location.pathname === '/ffxiv-mits/top'){
            setSheet('TOP');
        } else if (location.pathname === '/ffxiv-mits/dsr'){
            setSheet('DSR');
        }
    }, [location.pathname]);

    const container = (
        <>
            <h1>{allSheets[sheet].name}</h1>
            <Selectors
                roleView={roleView}
                setRoleView={setRoleView}
                tankView={tankView}
                setTankView={setTankView}
                extraPicks={extraPicks}
                setExtraPicks={setExtraPicks}
                sheet={sheet}
            />
            <EncounterView 
                roleOptions={roleView}
                tankOptions={tankView}
                extraOptions={extraPicks}
                phasesRef={phasesRef}
                sheet={allSheets[sheet]}
            />
            <Navigation
                data={allSheets[sheet].data}
                phasesRef={phasesRef}
            />
        </>
    )

    return (
        <Routes>
            <Route path='/ffxiv-mits' element={container}/>
            <Route path='/ffxiv-mits/fru' element={container}/>
            <Route path='/ffxiv-mits/fru/fmbg' element={container}/>
            <Route path='/ffxiv-mits/fru/naur' element={container}/>
            <Route path='/ffxiv-mits/top' element={container}/>
            <Route path='/ffxiv-mits/dsr' element={container}/>
            <Route path='*' element={<div>error 404</div>}/>
        </Routes>
    )
 }

 export default Content;
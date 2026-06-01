/* eslint-disable react/prop-types */
import {useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Selectors from "./Selectors";
import { EncounterView } from "./Table";
import Navigation from "./Navigation";
import { allSheets } from '../utils/mitSheets/mitSheetsUtil';
import NotFound from './NotFound';

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
        if (location.pathname === '/') {
            setSheet('FRU_fmbg');
        } else if (location.pathname === '/fru'){
            setSheet('FRU_fmbg');
        } else if (location.pathname === '/fru/fmbg'){
            setSheet('FRU_fmbg');
        } else if (location.pathname === '/fru/naur'){
            setSheet('FRU_naur');
        } else if (location.pathname === '/top'){
            setSheet('TOP');
        } else if (location.pathname === '/dsr'){
            setSheet('DSR');
        } else if (location.pathname === '/tea'){
            setSheet('TEA');
        } else if (location.pathname === '/uwu'){
            setSheet('UWU');
        } else if (location.pathname === '/ucob'){
            setSheet('UCOB');
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
            <Route path='/' element={container}/>
            <Route path='/fru' element={container}/>
            <Route path='/fru/fmbg' element={container}/>
            <Route path='/fru/naur' element={container}/>
            <Route path='/top' element={container}/>
            <Route path='/dsr' element={container}/>
            <Route path='/tea' element={container}/>
            <Route path='/uwu' element={container}/>
            <Route path='/ucob' element={container}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    )
 }

 export default Content;
/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

const CHECKBOX_STATES = {
    Checked: 'Checked',
    Indeterminate: 'Indeterminate',
    Empty: 'Empty'
}

const checkValues = (selection) => {
    const values = Object.values(selection);
    const allTrue = values.every(value => value === true);
    const allFalse = values.every(value => value === false);

    if(allTrue) {
        return CHECKBOX_STATES.Checked;
    } else if(allFalse) {
        return CHECKBOX_STATES.Empty;
    } else {
        return CHECKBOX_STATES.Indeterminate;
    }
}

const selectAll = (selection, setSelection) => {
    const newState = {...selection};
    for(const key in newState){
        newState[key] = true;
    }
    setSelection(newState);
}

const deselectAll = (selection, setSelection) => {
    const newState = {...selection};
    for(const key in newState){
        newState[key] = false;
    }
    setSelection(newState);
}

function Checkbox ({ label, value, onChange }) {
    const checkboxRef = useRef();

    useEffect(() => {

        if(value === CHECKBOX_STATES.Checked) {
            checkboxRef.current.checked = true;
            checkboxRef.current.indeterminate = false;
        } else if (value === CHECKBOX_STATES.Empty){
            checkboxRef.current.checked = false;
            checkboxRef.current.indeterminate = false;
        } else if (value === CHECKBOX_STATES.Indeterminate) {
            checkboxRef.current.checked = false;
            checkboxRef.current.indeterminate = true;
        }

    }, [value])

    return (
        <label>
            <input 
                ref={checkboxRef}
                type="checkbox" 
                onChange={onChange}
            />
            {label}
        </label>
    );
}

function DeselectAll({selection, setSelection}) {
    const checked = checkValues(selection);
    
    const handleChange = (selection, setSelection) => {
        if(checked === CHECKBOX_STATES.Checked) {
            deselectAll(selection, setSelection)
        } else if (checked === CHECKBOX_STATES.Empty){
            selectAll(selection, setSelection)
        } else if (checked === CHECKBOX_STATES.Indeterminate) {
            selectAll(selection, setSelection)
        }
    }
    
    return (
        <div className="deselection container">
            <Checkbox 
                label=''
                value={checked}
                onChange={() => handleChange(selection, setSelection)}
            />
        </div>
    );
}

export default DeselectAll;

/* 
            <input 
                type="checkbox" 
                id={id} 
                name={id} 
                checked={true}
            /> 
            


        return (
            selectionState === 'all true' ? 
            () => deselectAll(selection, setSelection) :
            () => selectAll(selection, setSelection)
        );
*/
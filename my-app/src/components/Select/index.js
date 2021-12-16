import React from "react";

// CSS
import "./Select.css";

// Al añadir el prop type, le asigno un valor por defecto (text), para no romper con la retro compatibilidad
// La retro compatibilidad significa que todo lo que modifiquemos, no debe afector lo ya dado

function InputRadio({id, type = "text", label, value, setValue}) {

    console.log("entre")

    const genders = ["Male, Female"];

    const _selects = genders.map((gender) => (
        <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    ));

    console.log(radioInputs, "radios")

    return (
        <div className="input-container">
            <label className="label" htmlFor={id}>
                {label}
            </label>
            {radioInputs}
        </div>
    )
};

export default Select;



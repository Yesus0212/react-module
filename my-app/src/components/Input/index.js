// Los componentes son componentes state less (componentes sin lógica, que solo pintan)

import React from "react";

// CSS
import "./Input.css";

function Input({id, type = "text", label, value, setValue}) {

    return (
        <div className="input-container">
            <label className="label" htmlFor={id}>
                {label}
            </label>
            <input 
                className="input"
                id={id} 
                type={type}
                onChange={(event) => setValue(event.target.value)} 
                value={value}
            />
        </div>
    )
};

export default Input;
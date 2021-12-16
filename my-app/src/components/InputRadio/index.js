import React from "react";

function Input({id, label, value, setValue}) {

    return (
        <>
            <input 
                type="" 
                value="Male" 
                name="gender" 
            /> Male            <input type="radio" value="Female" name="gender" /> Female        
        </>
    )
};

export default Input;



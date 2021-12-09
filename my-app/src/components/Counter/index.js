import React from "react";
import { useState, useEffect } from "react";

// Importamos los styles
import "./Counter.css";

export default function Counter(){

    const [counter, setCounter] = useState(0);
   
    // Aquí hacemos el mismo renderizado condicional, pero fuera, para mantener limpio el JSX
    const colorClass = counter % 2 === 0 ? "text-even" : "text-odd";

    return (
        <>
            <div>
                <p className={colorClass}>Counter: {counter}</p>
                <button className="btn" onClick={() => setCounter(counter + 1)}>Add</button>
            </div>
            <div>
                <button className="btn" onClick={() => setCounter(counter - 1)}>Remove</button>
            </div>
        </>
    );

}
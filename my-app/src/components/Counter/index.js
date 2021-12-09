import React from "react";
import { useState, useEffect } from "react";

// Importamos los styles
import "./Counter.css";

function Counter(){

    const [counter, setCounter] = useState(0);
    const [otherCounter, setOtherCounter] = useState(0);

    useEffect(() => {
        console.log("Me ejecuto cada que cambie el estado de other counter");        
    }, [otherCounter]);

    useEffect(() => {
        console.log("Me ejecuto solo la primera vez");
    }, []);

    useEffect(() => {
        console.log("Me ejecuto cada que cambie el estado de counter");
        if(counter % 3 === 0 && counter > 0){
            setOtherCounter(otherCounter + 1)
        }
    }, [counter]);

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

export default Counter;
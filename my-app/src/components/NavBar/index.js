import React from "react";
import { useState } from "react";

// Importamos los styles
import "./NavBar.css";

let content;

export default function NavBar(){

    const [active, setActive] = useState(0);

    const handleClick = (itemID) => {              
        setActive(itemID);
        
    };
    
    switch(active){
        case 1:
            content = "Contenido del Item 1";
            break;
        case 2:
            content = "Contenido del Item 2";
            break;
        case 3:
            content = "Contenido del Item 3";
            break;
        default:
            console.log("Opción invalida");
            break;
    }
    
    const checkActive = (itemID) => (active === itemID ? "selected" : "");

    console.log(content);
    
    return (
        <>
        <div>
            <ul>
                <li className={checkActive(1)} onClick={() => handleClick(1)}>Item 1</li>
                <li className={checkActive(2)} onClick={() => handleClick(2)}>Item 2</li>
                <li className={checkActive(3)} onClick={() => handleClick(3)}>Item 3</li>
            </ul>
        </div>
        <div>
            <h1>{content}</h1>
        </div>        
        </>
    );

};

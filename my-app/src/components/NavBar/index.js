import React from "react";
import { useState } from "react";

// Importamos los styles
import "./NavBar.css";

export default function NavBar(){

    const [active, setActive] = useState(0);

    const handleClick = (itemID) => {
        setActive(itemID);
    };

    const checkActive = (itemID) => (active === itemID ? "selected" : "");
    
    return (
        <div>
            <ul>
                <li className={checkActive(1)} onClick={() => handleClick(1)}>
                    Item 1
                </li>
                <li className={checkActive(2)} onClick={() => handleClick(2)}>
                    Item 2
                </li>
                <li className={checkActive(3)} onClick={() => handleClick(3)}>
                    Item 3
                </li>
            </ul>
        </div>
    );

}

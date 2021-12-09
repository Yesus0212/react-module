import React from "react";
import { useState, useEffect } from "react";

// Importamos los styles
import "./NavBar.css";

export default function NavBar(){

    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);

    if(selected1){
        setSelected2 = false;
        setSelected3 = false;
        select = "select";
    }

    if(selected2){
        setSelected1 = false;
        setSelected3 = false;
        select = "select";
    }

    if(selected3){
        setSelected1 = false;
        setSelected2 = false;
        select = "select";
    }

    
    return (
        <>
            <div>
                <ul>
                    <li className={select} onClick={setSelected1(true)}>Item 1</li>
                    <li className={select} onClick={setSelected2(true)}>Item 2</li>
                    <li className={select} onClick={setSelected3(true)}>Item 3</li>
                </ul>
            </div>
        </>
    );

}

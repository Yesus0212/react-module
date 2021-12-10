import React from "react";
import { useState, useEffect } from "react";

// Importamos los styles
import "./NavBar.css";

export default function NavBar(){

    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if(selected === 1){
            document.getElementById("s1").className = "selected";
            document.getElementById("s2").className = "noSelected";
            document.getElementById("s3").className = "noSelected";
        }
        else if(selected === 2){
            document.getElementById("s2").className = "selected";
            document.getElementById("s1").className = "noSelected";
            document.getElementById("s3").className = "noSelected";
        }
        else if(selected === 3){
            document.getElementById("s3").className = "selected";
            document.getElementById("s2").className = "noSelected";
            document.getElementById("s1").className = "noSelected";
        }
    });

    
    
    return (
        <div>
            <ul>
                <li>
                    <span id="s1" onClick={() => setSelected(1)}>Item 1</span>                        
                </li>
                <li>
                    <span id="s2" onClick={() => setSelected(2)}>Item 2</span>
                </li>
                <li>
                    <span id="s3" onClick={() => setSelected(3)}>Item 3</span>
                </li>
            </ul>
        </div>
    );

}

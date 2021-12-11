import React from "react";
import { useState } from "react";

// Importamos los styles
import "./NavBar.css";

// Se crea el arreglo de items
const items = [
    {
        id: 1,
        title: "Item1",
        content: "Contenido del Item 1"
    },
    {
        id: 2,
        title: "Item2",
        content: "Contenido del Item 2"
    },
    {
        id: 3,
        title: "Item3",
        content: "Contenido del Item 3"
    },
    {
        id: 4,
        title: "Item4",
        content: "Contenido del Item 4"
    },
    {
        id: 5,
        title: "Item5",
        content: "Contenido del Item 5"
    },
    {
        id: 6,
        title: "Item6",
        content: "Contenido del Item 6"
    },
]

// Generé dos variables, una donde va a contener el item que se va a filtrar para obtener el contenido y otra donde se almacenará dicho contenido, esto, porque al
// querer leer directamente la propiedad en el JSX, React me mando un error, de que no permite el uso de objetos
let itemSelected, content;

export default function NavBar(){

    const [active, setActive] = useState(0);

    const handleClick = (itemID) => {
        
        const prueba = items.find(itemID);

        console.log(prueba);

        itemSelected = items.filter(({id, content}) => {                 
            return (id === 8 ? content : null);
        });

        content = (itemSelected.length !== 0 ? itemSelected[0].content : "Elemento invalido, con contenido");

        console.log(itemSelected);

        setActive(itemID);        
    };
 
    
    const checkActive = (itemID) => (active === itemID ? "selected" : "");
    
    
    return (
        <>
        <div>
            <ul>
            {items.map((item) => (
            <li key={item.id} className={checkActive(item.id)} onClick={() => handleClick(item.id)}>
                {item.title}
            </li>
            ))}
            </ul>
        </div>
        <div>
            <h1>{content}</h1>
        </div>        
        </>
    );

};

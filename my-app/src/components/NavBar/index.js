import React from "react";
import { useState, useEffect } from "react";
import ItemSelected from "../ItemSelected";

// Importamos los styles
import "./NavBar.css";


// Generé dos variables, una donde va a contener el item que se va a filtrar para obtener el contenido y otra donde se almacenará dicho contenido, esto, porque al
// querer leer directamente la propiedad en el JSX, React me mando un error, de que no permite el uso de objetos
let itemSelected, _content = "";


export default function NavBar(){

    const [items, setItems] = useState([]);
    const [active, setActive] = useState(0);

    // El archivo .json, debe estar en la carpeta publica, para poder obtener la información, de lo contrario, mandara error
    const url = "items.json";
        
    useEffect(() => {        
        // Función flecha anonima, es anonima, porque no tiene nombre que esta directamente ligada a la constante getItems
        const getItems = async () => {
            // Realizamos primero la llamada a la URL con fetch, no necesitamos colocar la acción, porque por default es GET
            const response = await fetch(url);
            // La primer llamada solo nos devuelve la información de la conexión, con el console.table, la podemos mostrar en consola
            // console.table(response);            
            // La segunda llamada la ocupamos para obtener la respuesta de la consulta, debe ser igualmente un llamado asincrono y utilizamos el método JSON
            const data = await response.json();
            // console.log(data);
            // Aquí utilizamos la función del estado setItems, para cargar la información en la variable items
            setItems(data);
        };

        // Aquí invocamos la función
        getItems(); 
    },[])

    
    const handleClick = (itemID) => {
        itemSelected = items.find(({id}) => {
            return id === itemID;
        })
        _content = (itemSelected.length !== 0 ? itemSelected.content : "Elemento invalido, sin contenido");
        setActive(itemID);        
    };
     
    const checkActive = (itemID) => (active === itemID ? "selected" : "");
    
    const _items = items.map((item) => ( 
        <li key={item.id} className={checkActive(item.id)} onClick={() => handleClick(item.id)}>
            {item.title}
        </li>
        ));        
    
    
    return (
       <ItemSelected 
            item= {_items}
            content = {_content}
       />
    );

};

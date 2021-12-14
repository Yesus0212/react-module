import React from "react";
import { useState, useEffect } from "react";
import ItemSelected from "../ItemSelected";

// Importamos los styles
import "./NavBar.css";

// Se crea el arreglo de items
// const items = [
//     {
//         id: 1,
//         title: "Item1",
//         content: "Contenido del Item 1"
//     },
//     {
//         id: 2,
//         title: "Item2",
//         content: "Contenido del Item 2"
//     },
//     {
//         id: 3,
//         title: "Item3",
//         content: "Contenido del Item 3"
//     },
//     {
//         id: 4,
//         title: "Item4",
//         content: "Contenido del Item 4"
//     },
//     {
//         id: 5,
//         title: "Item5",
//         content: "Contenido del Item 5"
//     },
//     {
//         id: 6,
//         title: "Item6",
//         content: "Contenido del Item 6"
//     },
// ]

// Generé dos variables, una donde va a contener el item que se va a filtrar para obtener el contenido y otra donde se almacenará dicho contenido, esto, porque al
// querer leer directamente la propiedad en el JSX, React me mando un error, de que no permite el uso de objetos
let itemSelected, _content = "";


export default function NavBar(){

    const [items, setItems] = useState([]);
    const [active, setActive] = useState(0);
   
    
    useEffect(() => {
        async function fetchData() {
            await fetch("./items.json").then(
                function(res){
                    return res.json()
                }).then(function(items){
                setItems(items)
            }).catch(
            function(err){
              console.log(err, ' error')
            });
        };
        
        fetchData();          
    },[])


    console.log(items, "llenado");
    
    const handleClick = (itemID) => {
        itemSelected = items.find(({id}) => {
            return id === itemID;
        })
        _content = (itemSelected.length !== 0 ? itemSelected.content : "Elemento invalido, sin contenido");
        setActive(itemID);        
    };
     
    const checkActive = (itemID) => (active === itemID ? "selected" : "");
    
    const _items = (items) => {
        console.log(items, "items");
        if(items.length !== 0){
            items.map((item) => ( 
                                <li key={item.id} className={checkActive(item.id)} onClick={() => handleClick(item.id)}>
                                    {item.title}
                                </li>
                                ));    
        }
        else{
            <li>Error al cargar</li>
        }
    } 

    
    return (
       <ItemSelected 
            item= {_items}
            content = {_content}
       />
    );

};

import React, { useState } from "react";

export default function ReadFetch(){
    
    const [items, setItems] = useState([]);

    // Fetch Function   
    fetch("./items.json").then(
        function(res){
            return res.json()
        }).then(function(items){
        // store Items in State Items Variable
        setItems(items)
    }).catch(
    function(err){
      console.log(err, ' error')
    });
    
    const _items = items.map((item) => ( 
        <li key={item.id}>
            {item.title}
        </li>
        )); 


    return (
        <div>
            <ul>
                {_items}
            </ul>            
        </div>
    )
}

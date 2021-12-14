import React from "react";

function ItemSelected({item, content}) {
    return (
    <>
        <div>
            <ul>
                {item}
            </ul>
        </div>
        <div>
            <h1>{content}</h1>
        </div>        
    </>
    );
}


export default ItemSelected;
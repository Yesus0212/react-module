import React from "react";

const capitalizeWord = (word) => {
    if(!word) {
        return ""
    }

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function Greeting({firstName, lastName=""}) {

    const _firstName = capitalizeWord(firstName);
    const _lastName = capitalizeWord(lastName);

    return (
        <div>
            <h1>Hola {_firstName} {_lastName}</h1>
        </div>
    );
}

export default Greeting;
import React from "react";

function Calculator({firstVal, secondVal, operator}) {

    if(!Number.isInteger(firstVal)){
        return (
            <div>
                <span>El primer valor no es un numero</span>
            </div>
        );
    }

    if(!Number.isInteger(secondVal)){
        return (
            <div>
                <span>El segundo valor no es un numero</span>
            </div>
        );
    }

    // if(!["suma", "resta", "multiplicacion","division","modulo"].includes(operator)){
    //     return (
    //         <div>
    //             <span>El operador no es valido</span>
    //         </div>
    //     );
    // }

    let result;

    switch(operator){
        case "suma":
            result = firstVal + secondVal;
            break;
        case "resta":
            result = firstVal - secondVal;
            break;
        case "multiplicacion":
            result = firstVal * secondVal;
            break;
        case "division":
            result = firstVal / secondVal;
            break;
        case "modulo":
            result = firstVal % secondVal;
            break;
        default:
            return (
                <div>
                    <span>El operador no es valido</span>
                </div>
            );
    }

    return (
        <div>
            <h1>El resultado de {operator} es {result}</h1>
        </div>
    );
}

export default Calculator;
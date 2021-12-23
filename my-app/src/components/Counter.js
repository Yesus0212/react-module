import { Component } from "react/cjs/react.production.min";

class Counter extends Component {
    constructor(props) {
        super(props);
        // Es necesario 
        this.state = {
            counter: 0,
        }

        // Para que el metodo pueda acceder al escope de las variables de estado, es necesario hacer un bind del this dentro del constructor
        this.handleClick = this.handleClick.bind(this);
    }


    /**
     * Estas son las funciones del ciclo de vida de una clase, los nombres deben ser identicos
     */

    componentDidMoun() {
        console.log("Se ejecuta la primera vez");
    }

    componentDidUpdate() {
        console.log("Se ejecuta cuando se actualiza");
    }

    componentWillUnmount() {
        console.log("Se ejecuta cuando se desmonta");
    }


    handleClick(event) {
        this.setState({
            // Para poder actualizar una variable de estado, es necesario utilizar el this y el estate, pero además, es obligatorio que dentro del contructor se haga el bind
            // de la función, para que el contexto del servicio tenga el escope del padre
            counter: this.state.counter + 1,
        })
    }


    render() {
        return (
            <div>
                {/* Para acceder a las propiedades del contexto, es obligatorio tener la palabra reservada this y de ahí al state y luego ya podemos acceder a las variables */}
                <p>{this.state.counter}</p>
                {/* Para accesar a los metodos, tambien es necesario utilizar el this para entrar en el contexto */}
                <button onClick={this.handleClick}>Increase</button>
            </div>
        )
    }

}


export default Counter;
import { Component } from "react";

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

let itemSelected, _content = "";

class NavBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            active: 0,
        }

        this.handleClick = this.handleClick.bind(this);
        this.checkActive = this.checkActive.bind(this);
    }

    handleClick = (itemID) => {
        itemSelected = items.find(({id}) => {
            return id === itemID;
    })

        _content = (itemSelected.length !== 0 ? itemSelected.content : "Elemento invalido, sin contenido");

        this.setState({
            active: itemID,
        })
    };
     
    checkActive = (itemID) => (this.state.active === itemID ? "selected" : "");
 
    render(){
        return (
            <>
            <div>
                <ul>
                    {
                        items.map((item) => ( 
                            <li key={item.id} className={this.checkActive(item.id)} onClick={() => this.handleClick(item.id)}>
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h1>{_content}</h1>
            </div>        
            </>
        );        
    }

};

export default NavBar;
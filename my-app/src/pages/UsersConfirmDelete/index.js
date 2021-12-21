import React, { useState } from "react";

import "./UserConfirmDelete.css"

// Services
import { deleteUser } from "../../services/users";

// // RR
// // El useParams, se utiliza para obtener los parametros que se están enviando desde la URL
import { useParams } from "react-router-dom";

function UsersConfirmDelete() {
    const [show, setShow] = useState(false);
    const params = useParams();
    
    const handleModalClose = (e) => {
        const currentClass = e.target.className;    
        if (currentClass === 'modal-card') {
            return;
        }
    
        setShow(false);
    };
  
    const handleModalOpen = () => {
        setShow(true);
    };

    const handleClick = async (id) => {
		console.log(id);
		const response = await deleteUser(id);
		console.log(response);
	}
  
    return (
        <div className="App">
        <div hidden={!show}>
            <div className="modal-background" onClick={handleModalClose}>
            <div className="modal-card">
                <button className="button" onClick={handleClick(params.userID)} >Confirmar</button>
                <button className="button" onClick={handleModalOpen} >Cancelar</button>
            </div>
            </div>
        </div>
        <button className="button" onClick={handleModalOpen}>
            Delete
        </button>
        </div>
    );
}

export default UsersConfirmDelete;
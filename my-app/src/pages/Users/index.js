import "./Users.css";
import { useState, useEffect } from "react";

import {getUsers} from "../../services/users";

let final;

function Users() {

    const [users, setUsers] = useState({});
     
    useEffect(() => {			
		const getAll = async () => {
            const response = await getUsers();
            const data = Object.values(response);
            _users(data)
        } 

        const _users = (data) => {
            final = data.map(({firstName, lastName}) => {
                console.log(firstName)
            });
        }

        getAll();
        setUsers(final);
    }, [])

    
    console.log(final)
       
	return (
        <div>
            <ul>
                Hola
            </ul>
        </div>        
    )
}

export default Users;
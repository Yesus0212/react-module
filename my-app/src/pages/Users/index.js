import "./Users.css";
import { useState, useEffect } from "react";

import {getUsers} from "../../services/users";

function Users() {

    const [users, setUsers] = useState({});
     
    useEffect(() => {			
		const getAll = async () => {
            const response = await getUsers();
            const data = Object.entries(response);
            renderUsers(data)
        } 
        
        getAll();        
    }, [])

    
    const renderUsers = (data) => {
        const _users = data.map(user => {
            return (
                <>
                    <li key={user[0]}>
                        {user[1].firstName} {user[1].lastName}
                    </li>
                </>  
            )
        }) 

        setUsers(_users);
    }
       
    console.log(users)

	return (
        <div>
            <ul>
                {users}
            </ul>
        </div>        
    )
}

export default Users;
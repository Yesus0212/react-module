import "./Users.css";
import { useState, useEffect } from "react";

import {getUsers} from "../../services/users";

function Users() {

    const [users, setUsers] = useState();
     
    useEffect(() => {			
		const _users = async () => {
            const response = await getUsers();
            const preData = Object.keys(response).map((key) => {
                const { firstName, lastName } = response[key];
                return {
                    id: key,
                    firstName,
                    lastName,
                };
            });
            setUsers(preData);
        } 
        _users();
    }, [])

   
       
	return (
        <div>
            <ul>
                {users}
            </ul>
        </div>        
    )
}

export default Users;
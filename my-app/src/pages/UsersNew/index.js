// Las pages son componentes state full (componentes complejos con lógica)

import "./UsersNew.css";
import { useState } from "react";

// Input
import Input from "../../components/Input"
import {createUser} from "../../services/users";

function UsersNew() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState();
    const [ocuppation, setOcuppation] = useState("");
    const [birthdate, setBirthdate] = useState("");


    const cleanForm = () => {
		setFirstName("");
		setLastName("");
		setGender("");
		setOcuppation("");
		setBirthdate("");
	};

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
			const data = {
				firstName,
				lastName,
				gender,
				ocuppation,
				birthdate,
			};
			await createUser(data);
			cleanForm();
		} catch (error) {
			console.error(error.message);
		}
    }

	return (
    <div className="container flex-col">
        <h1>Users New</h1>
        <form onSubmit={handleSubmit}>
            <Input 
                id="fistName" 
                type="text"
                label="First Name" 
                value={firstName} 
                setValue={setFirstName} 
            />
            <Input 
                id="lastName" 
                type="text"
                label="Last Name" 
                value={lastName} 
                setValue={setLastName} 
            />
            <Input
                id="gender" 
                type="text"
                label="Gender" 
                value={gender} 
                setValue={setGender} 
            />
            <Input 
                id="occupation" 
                type="text"
                label="Ocuppation" 
                value={ocuppation} 
                setValue={setOcuppation} 
            />
            <Input 
                id="birthdate"
                type="date"
                label="Birthdate" 
                value={birthdate} 
                setValue={setBirthdate} 
            />
            <button type="submit">Crear</button>
        </form>
    </div>
    )
}

export default UsersNew;
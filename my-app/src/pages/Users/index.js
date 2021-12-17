import "./Users.css";
import { useState, useEffect } from "react";

import {getUsers} from "../../services/users";

// Components
import Li from "../../components/Li";

function Users() {

    const [users, setUsers] = useState([]);

	useEffect(() => {
		const get = async () => {
			const response = await getUsers();
			const parsedResponse = Object.keys(response).map((key) => {
				const { firstName, lastName } = response[key];
				return {
					id: key,
					firstName,
					lastName,
				};
			});
			setUsers(parsedResponse);
		};

		get();
	}, []);

	return (
		<div>
			<ul>
				{users.map(({ id, firstName, lastName }) => (
					<Li key={id} firstName={firstName} lastName={lastName} />
				))}
			</ul>
		</div>
	);
}

export default Users;
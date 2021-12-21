import React, { useEffect, useState } from "react";

// RR
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { getUser } from "../../services/users";

// Icons
import Test from "../../Icons/Test";
import UsersConfirmDelete from "../UsersConfirmDelete";

export default function UserDetail() {
	const [user, setUser] = useState({});
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const get = async () => {
			const response = await getUser(params.userID);
			console.log(response);
			setUser(response);
		};
		get();
	}, [params.userID]);


	// const delUser = async (id) => {
	// 	console.log(id);
	// 	const response = await deleteUser(id);
	// 	console.log(response);
	// }

	return (
		<div>
			Hola soy el detalle del usuario: {user?.firstName} {user?.lastName}
			<button onClick={() => navigate(`update`)}>
				<Test />
			</button>
			{/* <button onClick={() => delUser(params.userID)}>
				Delete
			</button> */}
			<UsersConfirmDelete />
			<br />
			<Outlet />
		</div>
	);
}
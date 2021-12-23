import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import App from "./App";
import Users from "./pages/Users";
import Home from "./pages/Home";
import UsersNew from "./pages/UsersNew";
import UsersList from "./pages/UsersList";
import UsersDetail from "./pages/UsersDetail";
import UsersUpdate from "./pages/UsersUpdate";
import UsersDetailContainer from "./pages/UsersDetailContainer";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<h1>NOT FOUND!</h1>} />
				{/* Una ruta contenedero, crea un elemento contenedor donde se mostraran todas las rutas hijas */}
				<Route path="/" element={<App />}>
					{/* El elemento marcado como index element, es el que se mostrará de primera instancia, cuando se ingresa a la sección */}
					<Route index element={<Home />} />
					<Route path="users" element={<Users />}>
						{/* El elemento marcado como index element, es el que se mostrará de primera instancia, cuando se ingresa a la sección */}
						<Route index element={<UsersList />} />
						<Route path="new" element={<UsersNew />} />
						{/* El :userID hace referencia al nombre del parametro que viaja en la URL, mismo que es tomado para los movimientos de actualización o eliminado */}
						<Route path=":userID" element={<UsersDetailContainer />}>
							{/* El elemento marcado como index element, es el que se mostrará de primera instancia, cuando se ingresa a la sección */}
							<Route index element={<UsersDetail />} />
							<Route path="update" element={<UsersUpdate />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
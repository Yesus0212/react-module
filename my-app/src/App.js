import "./App.css";
import { Component } from "react";

import { Outlet } from "react-router-dom";

// Components
import AppContainer from "./components/AppContainer";

// function App() {
// 	return (
// 		<AppContainer>
// 			{/* El Outlet nos permite acceder a la navegación de los hijos de la ruta contenedora 
// 				Gestiona las rutas hijas de un contenedor */}
// 			<Outlet />
// 		</AppContainer>
// 	);
// }


// Para poder ocupar clases en lugar de funciones en React, necesitamos crear la clase y heredar la clase component de react 
class App extends Component {
	// Aquí la funcion render es la que pintaría el contenido del JSX
	render() {
		return (
			<AppContainer>
			{/* El Outlet nos permite acceder a la navegación de los hijos de la ruta contenedora 
				Gestiona las rutas hijas de un contenedor */}
				<Outlet />
			</AppContainer>
		);
	}
}

export default App;
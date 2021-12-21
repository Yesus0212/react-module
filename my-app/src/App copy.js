import "./App.css";

import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="main">
			<nav className="main-nav">
				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="users">
					Users
				</Link>
			</nav>
			{/* En donde se ubique el Outlet, será donde se visualizan los elementos */}
			<div className="main-content">
				<Outlet />
			</div>
		</div>
	);
}


export default App;
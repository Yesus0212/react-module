import React from "react";

// Components
import Greet from "../../components/Greet";
import Counter from "../../components/Counter"
import NavBar from "../../components/NavBar";

export default function Home() {
	return (
		<div>
			<Counter />
			<Greet firstName="Jesus" />
			<NavBar />
		</div>
	);
}
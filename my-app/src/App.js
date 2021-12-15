import "./App.css";
import { useState } from "react";


function App() {  

	const [numCard, setNumCard] = useState(0);
	const [name, setName] = useState("");
	const [validDate, setValidDate] = useState(0);
	const [cvc, setCvc] = useState(0);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<>
		<div className="container">
			<form className="form" onSubmit={handleSubmit}>
				<div className="flex">					
					<input
						id="numCard"
						onChange={(e) => setNumCard(e.target.value)}
						value={numCard}
					/>
					<input						
						id="name"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<input
						id="validDate"
						onChange={(e) => setValidDate(e.target.value)}
						value={validDate}
					/>
					<input
						id="cvc"
						onChange={(e) => setCvc(e.target.value)}
						value={cvc}
					/>
				</div>
			</form>			
		</div>
		<div>
			<div>
				{numCard}
			</div>
			<div>
				{name}
			</div>
			<div>
				{validDate}
			</div>
			<div>
				{cvc}
			</div>
		</div>		
		</>
	);
}

export default App;
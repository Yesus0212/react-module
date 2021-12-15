import "./App.css";
import { useState } from "react";


function App() {  

	const [input1, setInput1] = useState("fdsafasfs");
	const [input2, setInput2] = useState(0);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<div className="container">
			<form className="form" onSubmit={handleSubmit}>
				<div className="flex">
					<label htmlFor="input1">Input:</label>
					<input
						id="input1"
						onChange={(e) => setInput1(e.target.value)}
						value={input1}
					/>
					<input
						type={"number"}
						id="input2"
						onChange={(e) => setInput2(e.target.value)}
						value={input2}
					/>
					<button type="submit" className="btn">
						Enviar
					</button>
				</div>
			</form>
			Cantidad: {input2}
		</div>
	);
}

export default App;
import "./App.css";
import { useEffect, useState } from "react";

// Components
import Character from "./components/Character";

// Services
import { listCharacters } from "./services/characters";

function App() {  

	const [characters, setCharacters] = useState([]);
	const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
    const list = async () => {
			const { results, info } = await listCharacters();
			setCharacters(results);
			setData(info);
      setIsLoading(false);
		};
		list();
	}, []);

	const handleClick = async (action) => {
    setIsLoading(true);

    let page;
		if (action === "next" && data.next != null) {
			page = data.next.split("?")[1];
		} 

    if(action === "prev" && data.prev != null) {
      page = data.prev.split("?")[1];
    }

    const { results, info } = await listCharacters(page);
		setCharacters(results);
		setData(info);
    setIsLoading(false);
	};

  const hasPrevLink = data.prev ? true : false;
	const hasNextLink = data.next ? true : false;

	return (
		<div className="App">
			<div className="fixed-container">
        {
        hasPrevLink ? (
					<button
						disabled={isLoading}
						onClick={() => handleClick("prev")}
						className="button"
					>
						Prev
					</button>
				) : null
        }
				{
        hasNextLink ? (
					<button
						disabled={isLoading}
						onClick={() => handleClick("next")}
						className="button"
					>
						Next
					</button>
				) : null
        }
			</div>
			{characters.map(({ id, image, name, species, status }) => (
				<Character
					key={id}
					image={image}
					name={name}
					species={species}
					status={status}
				/>
			))}
		</div>
	);
}

export default App;
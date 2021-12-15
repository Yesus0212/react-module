import React from "react";

function Character({ image, name, species, status }) {
	return (
		<div>
			<div>
				<img alt="character" src={image} />
			</div>
			<div>
				<h3>{name}</h3>
				<p>Species: {species}</p>
				<p>Status: {status}</p>
			</div>
		</div>
	);
}

export default Character;
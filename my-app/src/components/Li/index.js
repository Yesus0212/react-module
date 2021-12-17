import React from "react";

function Li({ firstName, lastName }) {
	return (
		<li>
			{firstName} {lastName}
		</li>
	);
}

export default Li;
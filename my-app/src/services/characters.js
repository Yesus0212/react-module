import { RICK_AND_MORTY_API } from "../utils/constants";

const CHARACTERS_API = "character";

const listCharacters = async (page = "") => {
	const response = await fetch(
		`${RICK_AND_MORTY_API}${CHARACTERS_API}?${page}`
	);
	return await response.json();
};

export { listCharacters };
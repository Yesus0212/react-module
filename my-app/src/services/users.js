import { BASE_URL } from "../utils/constants"

const USER_PATH = 'users.json'

const createUser = async(data) => {
    const response = await fetch(`${BASE_URL}${USER_PATH}`, {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

const getUsers = async() => {
    const response = await fetch(`${BASE_URL}${USER_PATH}`);
    return await response.json();
}


export {createUser, getUsers} ;
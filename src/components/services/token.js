import { useState } from "react";

const useLocalStorage = () => {
    let [token, setToken] = useState(localStorage.getItem('token'));

    const createToken = (tokenCreated) => {
        localStorage.setItem('token', tokenCreated);
        setToken(token = true)
    }

    const deleteToken = () => {
        localStorage.clear('token');
        setToken(token = false);
    }

    return {
        token,
        createToken,
        deleteToken,
    }
}

export default useLocalStorage;
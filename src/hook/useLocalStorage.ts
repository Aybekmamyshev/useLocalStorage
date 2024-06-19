import {useEffect, useState} from 'react';


type ReturnValue = [
    token: string | null,
    {
        changeToken: (value: string) => void,
        removeToken: () => void,
    }
];

type UseLocalStorage = (key: string) => ReturnValue;

const UseLocalStorage = (key: string): ReturnValue =>  {

    const getValue = () => {
        const storage = localStorage.getItem(key)
        if (storage) {
            return JSON.parse(storage)
        }
    }

    const [token, setToken] = useState<string>(getValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(token))
    }, [token]);

    const changeToken = (value: string) => {
        setToken(value)
    }

    const removeToken = () => {
        localStorage.removeItem(key)
        setToken('')
    }

    return [
        token,
        {
            changeToken,
            removeToken
        }
    ]
};

export default UseLocalStorage;
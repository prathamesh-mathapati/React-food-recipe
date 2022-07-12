import { createContext, useContext, useState } from "react";

const inputContextCreate = createContext();

const InputProvider = ({ children }) => {

    const [inputValue, setinputValue] = useState("");

    return (
        <inputContextCreate.Provider value={{ inputValue, setinputValue }}>
            {children}
        </inputContextCreate.Provider>



    )
}

const useInputContext = () => useContext(inputContextCreate);

export { InputProvider, useInputContext }
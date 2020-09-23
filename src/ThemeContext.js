import React, {useState, useEffect, createContext} from 'react'
import storage from 'local-storage-fallback'

export const ThemeContext = createContext();

export const ThemeProvider = props => {

    const getInitialTheme = () => {
        const savedTheme = storage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : "colored"
    }

    const [theme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        storage.setItem('theme', JSON.stringify(theme));
    }, [theme])


    return(
        <ThemeContext.Provider value={[theme , setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );

}
import { useState,createContext } from "react";
const ThemeContext = createContext();
export function ThemeProvider({children}){
    const [theme,setTheme] = useState('light');
    const themeBtn = () =>{
        setTheme(prevTheme=>{
            return (
                prevTheme === 'light'? 'dark':'light'
            )
        })
        console.log(theme)
    }

    return(
        <ThemeContext.Provider value={{theme, themeBtn}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
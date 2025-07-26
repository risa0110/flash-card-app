import { createContext,useState,useEffect } from "react";
const UserDataContext = createContext();
export function UserDataProvider({children}){
    const [user,setUser] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    },[]);

    const login = ({formData})=>{
        setUser(formData);
        setIsAuthenticated(true);
        localStorage.setItem("user",JSON.stringify(formData))
    };
    const logout = ()=>{
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
    };
    console.log(user, isAuthenticated);
    return(
        <UserDataContext.Provider value={{user,isAuthenticated,login,logout}}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext;
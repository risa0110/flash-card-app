import { createContext, useState, useEffect } from "react";
const UserDataContext = createContext();
export function UserDataProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null); //get current login user's data
    const [users, setUsers] = useState(() => {
        const stored = localStorage.getItem("users");
        return stored ? JSON.parse(stored) : []; //if localStorage have the users, return the JS array data
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false); //check login or not


    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) { //if user had already login, get the current user's data and set login(true)
            setCurrentUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);
    const createAccount = (formData) => { //creating new-account by getting data from the formData
        if (!users.find(u=>u.userName===formData.userName)) { //checking if the localStorage(users) already have the user's data
            const newUser = [...users, formData];
            setUsers(newUser);
            localStorage.setItem("users", JSON.stringify(newUser));
            setCurrentUser(formData)
            localStorage.setItem("currentUser", JSON.stringify(formData))
            setIsAuthenticated(true);
        } else { alert("You already have your account!") }
    }

    const login = (formData) => {
        const matchedUser =  users.find((u) => u.userName === formData.userName && u.password === formData.password);
        if (matchedUser) {
            setCurrentUser(matchedUser);
            setIsAuthenticated(true);
            localStorage.setItem("currentUser", JSON.stringify(matchedUser))
        } else { alert("userName or password is wrong!") }
        
    };
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("currentUser"); 
    };
    return (
        <UserDataContext.Provider value={{ currentUser, users, isAuthenticated, login, logout, createAccount }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext;
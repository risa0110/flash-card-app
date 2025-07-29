import { createContext, useState, useEffect } from "react";
const UserDataContext = createContext();
export function UserDataProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState(() => {
        const stored = localStorage.getItem("users");
        return stored ? JSON.parse(stored) : [];
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);
    const createAccount = (formData) => {
        if (!users.find(u=>u.userName===formData.userName)) {
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
        console.log("matchedUser:", matchedUser);
        if (matchedUser) {
            setCurrentUser(matchedUser);
            setIsAuthenticated(true);
            localStorage.setItem("currentUser", JSON.stringify(matchedUser))
        } else { alert("userName or password is wrong!") }
        //alert("Login!")
        
    };
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("currentUser"); //←こいついる？
    };
    console.log(users, isAuthenticated);
    return (
        <UserDataContext.Provider value={{ currentUser, users, isAuthenticated, login, logout, createAccount }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext;
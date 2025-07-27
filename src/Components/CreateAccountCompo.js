import { useState, useContext } from "react"
import UserDataContext from "../Context/UserDataContext"

export default function CreateAccountCompo({ mode, isVisible, btnClose }) {
    const [formData, setFormData] = useState({
        email: '',
        userName: '',
        password: ''
    });
    const { login } = useContext(UserDataContext);
    const formSubmit = (e) => {
        e.preventDefault();
        login(formData);
        console.log(formData)
        setFormData({ email: '', userName: '', password: '' });
    }

    const isSignup = mode === "signup"; //the mode for the login/createAccount display

    return (
        <>
            <div className={isVisible ? "login-section" : "login-section hidden"}>
                <div>
                    <button onClick={btnClose}>✖</button>
                </div>
                <div>
                    <h1>{isSignup ? "Create a new account" : "Login"}</h1>
                    <p>or {isSignup ? "Login" : "Create a new account"}</p>
                </div>
                <div>
                    <form onSubmit={formSubmit}>
                        {isSignup && (
                            <input
                                name="email"
                                placeholder="e-mail"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        )}
                        <input
                            name="userName"
                            placeholder="name"
                            value={formData.userName}
                            onChange={(e) => setFormData({ ...formData, userName: e.target.value })} />
                        <input
                            name="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                        <button type="submit">{isSignup ? "Create" : "Login"}</button>
                    </form>
                </div>
            </div>
        </>
    )
}
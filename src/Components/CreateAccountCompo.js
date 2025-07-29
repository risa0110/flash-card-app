import { useState, useContext } from "react"
import UserDataContext from "../Context/UserDataContext"

export default function CreateAccountCompo({ mode, isVisible, btnClose }) {
    const [formData, setFormData] = useState({
        email: '',
        userName: '',
        password: ''
    });
    const { createAccount, login } = useContext(UserDataContext);
    const formSubmit = (e) => {
        e.preventDefault();
        if(!formData.email || !formData.userName || !formData.password){
            alert("error");//書き換えよう
            return;
        }
        if (mode === "createAccount") {
            createAccount(formData);
        } else {
            login(formData);
        }
        btnClose();
        console.log(formData)
        setFormData({ email: '', userName: '', password: '' });
    }

    const isSignup = mode === "createAccount"; //the mode for the login/createAccount display

    return (
        <>
            <div className={isVisible ? "login-section" : "login-section hidden"}>
                <div>
                    <div>
                        <button onClick={btnClose} className="close-btn">✖</button>
                    </div>
                    <div>
                        <h1>{isSignup ? "Create a new account" : "Login"}</h1>
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
                            <button type="submit" className="submit">{isSignup ? "Create" : "Login"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
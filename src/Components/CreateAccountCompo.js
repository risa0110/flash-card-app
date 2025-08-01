import { useState, useContext } from "react"
import UserDataContext from "../Context/UserDataContext"
import MenuContext from "../Context/MenuContext";

export default function CreateAccountCompo() {
    const [formData, setFormData] = useState({
        email: '',
        userName: '',
        password: ''
    });
    const {mode, closeMenu,showCreateAccount} =useContext(MenuContext);
    const { createAccount, login } = useContext(UserDataContext);
    const formSubmit = (e) => {
        e.preventDefault();
        if (mode === "createAccount") {
            if (!formData.email || !formData.userName || !formData.password) {
                alert("All fields are required.");
                return;
            } else {
                createAccount(formData);
            }
        } else {
            if(!formData.userName || !formData.password){
                alert("All fields are required.");
                return;
            }else{
            login(formData);
            }
        }
        closeMenu();
        console.log(formData)
        setFormData({ email: '', userName: '', password: '' });
    }

    const isCreateAccount = mode === "createAccount"; //the mode for the login/createAccount display

    return (
        <>
            <div className={showCreateAccount ? "login-section" : "login-section hidden"}>
                <div>
                    <div>
                        <button onClick={closeMenu} className="close-btn">✖</button>
                    </div>
                    <div>
                        <h1>{isCreateAccount ? "Create a new account" : "Login"}</h1>
                    </div>
                    <div>
                        <form onSubmit={formSubmit}>
                            {isCreateAccount && (
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
                            <button type="submit" className="submit">{isCreateAccount ? "Create" : "Login"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
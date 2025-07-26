import { useState, useContext } from "react"
import UserDataContext from "../Context/UserDataContext"

export default function LoginCompo() {
    const [formData, setFormData] = useState({
        email: '',
        userName: '',
        password: ''
    });
    const {login} = useContext(UserDataContext);

    const formSubmit = (e) => {
        e.preventDefault();
        login(formData);
        console.log(formData)
        setFormData({ email:'', userName: '', password: '' });
    }
    
    return (
        <>
            <div>
                <h1>Log in</h1>
                <p>or create new account</p>
            </div>
            <div>
                <form onSubmit={formSubmit}>
                    <input 
                    name="email"
                    placeholder="e-mail"
                    value={formData.email}
                    onChange={(e)=>setFormData({...formData, email:e.target.value})} />
                    <input 
                    name="userName"
                    placeholder="name"
                    value={formData.userName}
                    onChange={(e)=>setFormData({...formData, userName:e.target.value})} />
                    <input 
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={(e)=>setFormData({...formData, password:e.target.value})} />
                    <button type="submit">Log in</button>
                </form>
            </div>
        </>
    )
}
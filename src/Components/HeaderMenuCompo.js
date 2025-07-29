import { useContext } from "react"
import UserDataContext from "../Context/UserDataContext"
import { Link } from "react-router-dom";
export default function HeaderMenuCompo({showMenu}) {
    const { currentUser,logout } = useContext(UserDataContext);
    return (
        <>
            <div id="header-menu" className={showMenu? "": "hidden"} >
                <div>
                    <p><b>User name:</b> {currentUser.userName}</p>
                    <p><b>e-mail:</b> {currentUser.email}</p>
                </div>
                <hr/>
                <div><Link to="/Profile"><p>Profile</p></Link></div>
                <hr/>
                <div><button onClick={logout}>Logout</button></div>
            </div>
        </>
    )
}
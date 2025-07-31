import { useContext,useEffect } from "react"
import UserDataContext from "../Context/UserDataContext"
import { Link,useLocation,useNavigate } from "react-router-dom";
import MenuContext from "../Context/MenuContext";
export default function HeaderMenuCompo() {
    const { currentUser,logout } = useContext(UserDataContext);
    const {showMenu, setShowMenu} = useContext(MenuContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () =>{ //if you click the logout-btn, it navigates to the home-page automatically
        logout();
        navigate("/");
    };
    useEffect(()=>{
        setShowMenu(false);
    },[location.pathname,setShowMenu]) //for closing the header menu when u move to the another pages.

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
                <div><button onClick={handleLogout}>Logout</button></div>
            </div>
        </>
    )
}
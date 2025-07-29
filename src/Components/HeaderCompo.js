import { useContext } from "react"
import UserDataContext from "../Context/UserDataContext"
import HeaderMenuCompo from "./HeaderMenuCompo";
import { Link } from "react-router-dom";

export default function HeaderCompo({ openForm,btnShowMenu,showMenu }) {
    const { currentUser, isAuthenticated } = useContext(UserDataContext);
    return (
        <>
            <header>
                <div className="container">
                    <div id="site-logo">
                        <h1>Flash card App</h1>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li><Link to="/" id="flash-card">＋ Start the flash-card</Link></li>
                                <li>
                                    {!isAuthenticated ?
                                        <button className="hoverBtn" onClick={openForm}>Log in</button> :
                                        <button className="hoverBtn" onClick={btnShowMenu}>{currentUser.userName}</button>
                                    }
                                </li>
                                <li>
                                    {isAuthenticated ?
                                    <HeaderMenuCompo showMenu={showMenu}/>:null}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
import { useContext } from "react"
import UserDataContext from "../Context/UserDataContext"
import HeaderMenuCompo from "./HeaderMenuCompo";
import { Link } from "react-router-dom";
import MenuContext from "../Context/MenuContext";

export default function HeaderCompo() {
    const { currentUser, isAuthenticated } = useContext(UserDataContext);
    const { openForm, btnShowMenu } = useContext(MenuContext);

    return (
        <>
            {isAuthenticated ?
                <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#eee' }}>
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/MyFlashcards">My Flashcards</Link>
                    <Link to="/OpenTrivia">OpenTrivia</Link>
                </nav>
                : null
            }
            <header>
                <div className="container">
                    <div id="site-logo">
                        <h1><Link to="/">Flash card App</Link></h1>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                {!isAuthenticated ?
                                    <li><Link to="/" onClick={() => openForm("login")} id="flash-card">＋ Start</Link></li> :
                                    <li><Link to="/dashboard" id="flash-card">＋ Start</Link></li>
                                }
                                <li>
                                    {!isAuthenticated ?
                                        <button className="hoverBtn" onClick={() => openForm("login")}>Log in</button> :
                                        <button className="hoverBtn" onClick={btnShowMenu}>{currentUser.userName}</button>
                                    }
                                </li>
                                <li>
                                    {isAuthenticated ?
                                        <HeaderMenuCompo /> : null}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
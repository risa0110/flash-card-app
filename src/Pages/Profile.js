import { useContext } from "react"
import UserDataContext from "../Context/UserDataContext"
import ThemeContext from "../Context/ThemeContext"
export default function Profile() {
    const {currentUser} = useContext(UserDataContext)
    const {themeBtn,theme} = useContext(ThemeContext)
    return (
        <>
            <div className="container">
                <h1>Setting</h1>
                <div id="profile-sec">
                    <div>
                        <h2>Profile</h2>
                        <p>User name: {currentUser.userName}</p>
                        <p>E-mail: {currentUser.email}</p>
                        <p>Password: *****</p>
                    </div>
                </div>
                <div>
                    <h2>Change the display mode</h2>
                    <button onClick={themeBtn} className="hoverBtn themeBtn">change mode to: {theme}</button>
                </div>
            </div>
            {/*Add modifing button to change the user name, e-mail and password*/}
        </>
    )
}
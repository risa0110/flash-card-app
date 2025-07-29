import { useContext } from "react"
import UserDataContext from "../Context/UserDataContext"
export default function Profile() {
    const {currentUser} = useContext(UserDataContext)
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
            </div>
        </>
    )
}
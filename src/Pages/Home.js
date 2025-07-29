import CreateAccountCompo from "../Components/CreateAccountCompo"
import HeaderCompo from "../Components/HeaderCompo"
import { useState } from "react"

export default function Home() {
    const [showSignUp, setShowSignUp] = useState(false);
    const[showMenu, setShowMenu]=useState(false);
    const [mode, setMode] = useState("login");
    const openForm = (formMode)=>{
        setMode(formMode);
        setShowSignUp(true);
    }

    return (
        <>
            <HeaderCompo 
            openForm={()=>openForm("login")}
            showMenu={showMenu}
            btnShowMenu={()=>setShowMenu(!showMenu)}/>
            <div id="app-descriptiton">
                <div>
                    <h2>Welcome to "Flash card App"!</h2>
                    <p>Enhance your learning with our simple and effective flashcard system. <br/>
                        Create your own sets, review them anytime, and track your progress as you master new concepts.
                        Whether you're preparing for exams, learning a new language, or just keeping your memory sharp, FlashMaster helps you study smarter—not harder.
                    </p>
                    <button onClick={()=>openForm("createAccount")} className="hoverBtn">Create new Account</button>
                </div>
            </div>
            
            {showSignUp &&(
                <CreateAccountCompo 
                mode={mode}
                isVisible={showSignUp}
                btnClose={()=>setShowSignUp(false)}/>
            )}
        </>
    )
}
import CreateAccountCompo from "../Components/CreateAccountCompo"
import { useContext } from "react"
import MenuContext from "../Context/MenuContext";

export default function Home() {
    const {openForm,showCreateAccount} = useContext(MenuContext);

    return (
        <>
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
            
            {showCreateAccount &&(
                <CreateAccountCompo/>
            )}
        </>
    )
}
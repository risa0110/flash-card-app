import CreateAccountCompo from "../Components/CreateAccountCompo"
import { useContext } from "react"
import MenuContext from "../Context/MenuContext";
import UserDataContext from "../Context/UserDataContext"
import { Link } from "react-router-dom";

export default function Home() {
    const { currentUser, isAuthenticated } = useContext(UserDataContext);
    const {openForm,showCreateAccount} = useContext(MenuContext);

    return (
        <>
            {isAuthenticated ? (
            <div style={{ padding: "2rem", fontFamily: "sans-serif", backgroundColor: "#fff", minHeight: "100vh" }}>
                <h1 style={{ fontSize: "2rem", color: "#444" }}>Home</h1>
                <p style={{ color: "#666", marginTop: "1rem", lineHeight: 1.5 }}>
                Welcome! {currentUser?.userName || "Guest"}! Here's what you can do:
                </p>
                <ul style={{ color: "#666", marginTop: "1rem", lineHeight: 1.6 }}>
                <li>
                    <b>Dashboard:</b>{' '}
                    <Link to="/dashboard" style={{ color: "#007bff", textDecoration: "none" }}>Create your own flashcards</Link>.
                </li>
                <li>
                    <b>My Flashcards:</b>{' '}
                    <Link to="/MyFlashcards" style={{ color: "#007bff", textDecoration: "none" }}>Play with your own flashcards</Link>.
                </li>
                <li>
                    <b>Open Trivia Quizzes:</b>{' '}
                    <Link to="/OpenTrivia" style={{ color: "#007bff", textDecoration: "none" }}>Play flashcards from various categories</Link>.
                </li>
                </ul>
            </div>
            ) : (
            <div id="app-descriptiton">
                <div>
                <h2>Welcome to "Flash card App"!</h2>
                <p>
                    Enhance your learning with our simple and effective flashcard system. <br />
                    Create your own sets, review them anytime, and track your progress as you master new concepts.
                    Whether you're preparing for exams, learning a new language, or just keeping your memory sharp, FlashMaster helps you study smarter—not harder.
                </p>
                <button onClick={() => openForm("createAccount")} className="hoverBtn">Create new Account</button>
                </div>
            </div>
            )}

            {showCreateAccount &&(
                <CreateAccountCompo/>
            )}
              
        </>
    )
}
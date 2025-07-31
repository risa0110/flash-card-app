import Quizzes from "../Components/Quizzes";
import { Link } from 'react-router-dom';

export default function OpenTrivia() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", backgroundColor: "#fff", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#444" }}>Quizzes from OpenTrivia</h2>
      <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>Select a quiz category to view flashcards</p>
      <Quizzes />
      <section>
        <div>
          <Link to="/dashboard" style={linkStyle}>Go to Dashboard</Link>
        </div>
        <div>
          <Link to="/" style={linkStyle}>Go back to Home</Link>
        </div>
      </section>
    </div>
  );
}

const linkStyle = {
  marginTop: "1rem",
  display: "inline-block",
  color: "#007bff",
  textDecoration: "none",
  fontSize: "1.1rem"
};

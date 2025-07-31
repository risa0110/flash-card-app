import { Link } from "react-router-dom";

export default function Home() {
  const linkStyle = {
    color: "#0077cc",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    borderBottom: "1px solid transparent",
    transition: "border-bottom 0.2s",
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", backgroundColor: "#fff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", color: "#444" }}>Home</h1>
      <p style={{ color: "#666", marginTop: "1rem", lineHeight: 1.5 }}>
        Welcome! Here's what you can do:
      </p>
      <ul style={{ color: "#666", marginTop: "1rem", lineHeight: 1.6 }}>
        <li><b>Dashboard:</b> Create your own flashcards.</li>
        <li><b>My Flashcards:</b> Play with your own flashcards.</li>
        <li><b>Open Trivia Quizzes:</b> Play flashcards from various categories.</li>
      </ul>
      <nav style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <Link to="/dashboard" style={linkStyle}>Go to Dashboard</Link>
        <Link to="/MyFlashcards" style={linkStyle}>Go to My Flashcards</Link>
        <Link to="/OpenTrivia" style={linkStyle}>Go to Open Trivia Quizzes</Link>
      </nav>
    </div>
  );
}

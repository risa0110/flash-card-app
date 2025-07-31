import CreateMyFlashcards from "../Components/CreateMyFlashcards";

export default function Dashboard() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#333" }}>Dashboard</h1>
      <h2 style={sectionTitle}>Create my Flashcards</h2>
      <CreateMyFlashcards />
    </div>
  );
}

const sectionTitle = {
  fontSize: "1.5rem",
  margin: "1.5rem 0 1rem",
  color: "#333",
  textAlign: 'center'
};

import PlayMyFlashcards from "../components/PlayMyFlashcards";

export default function MyFlashcards() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", backgroundColor: "#fafafa", minHeight: "100vh" }}>
      <h2 style={sectionTitle}>My Flashcards</h2>
      <PlayMyFlashcards />
    </div>
  );
}

const sectionTitle = {
  fontSize: "1.5rem",
  margin: "1.5rem 0 1rem",
  color: "#333",
  textAlign: 'center'
};

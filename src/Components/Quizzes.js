import React, { useEffect, useState } from "react";
import { fetchCategories, fetchFlashcardsByCategory } from "../services/api";

function Quizzes() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setselectedCategoryId] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [flippedIds, setFlippedIds] = useState(new Set());

  const toggleFlip = (id) => {
    setFlippedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        if (err.response && err.response.status === 429) {
          setTimeout(loadCategories, 3000);
        } else {
          console.error(err);
        }
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      fetchFlashcardsByCategory(selectedCategoryId)
        .then(setFlashcards)
        .catch(console.error);
    }
  }, [selectedCategoryId]);

  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '600px', 
      margin: 'auto', 
      backgroundColor: '#fff', 
      borderRadius: '8px', 
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)' ,
      color: '#333' 
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        marginBottom: '1.5rem', 
        color: '#333', 
        textAlign: 'center' 
      }}>
        Choose Category
      </h1>

      <select
        value={selectedCategoryId || ''}
        onChange={(e) => setselectedCategoryId(Number(e.target.value))}
        style={{
          width: '100%',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          marginBottom: '2rem',
          cursor: 'pointer'
        }}
      >
        <option value="" disabled style={{ color: '#333' }}>
          Select a Category
        </option>
        {Array.isArray(categories) && categories.map(cat => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {flashcards.length > 0 && (
        <div>
          <h2 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1rem', 
            color: '#333', 
            textAlign: 'center' 
          }}>
            Flashcards
          </h2>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem', 
            alignItems: 'center' 
          }}>
            {flashcards.map(card => (
              <li 
                key={card.id} 
                onClick={() => toggleFlip(card.id)}
                style={{
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  padding: '1.2rem',
                  width: '100%',
                  maxWidth: '400px',
                  backgroundColor: flippedIds.has(card.id) ? '#dff9fb' : '#f9f9f9',
                  boxShadow: flippedIds.has(card.id) 
                    ? '0 4px 10px rgba(116, 185, 255, 0.7)' 
                    : '0 4px 8px rgba(0, 0, 0, 0.1)',
                  userSelect: 'none',
                  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                  textAlign: 'center',
                  fontWeight: flippedIds.has(card.id) ? '600' : '500',
                  color: '#2d3436',
                }}
              >
                {flippedIds.has(card.id) ? (
                  <p style={{ margin: 0 }}><b>A:</b> {card.correctAnswer}</p>
                ) : (
                  <p style={{ margin: 0 }}><b>Q:</b> {card.question}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quizzes;

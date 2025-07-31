import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import UserDataContext from '../Context/UserDataContext';

function PlayMyFlashcards(){
  const [categories, setCategories] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [flippedIds, setFlippedIds] = useState(new Set());

  const {currentUser} = useContext(UserDataContext);

  const categoriesKey = `categories_${currentUser.userName}`;
  const flashcardsKey = `flashcards_${currentUser.userName}`;

  useEffect(() => {
    if(!currentUser) return;
    const savedCategories = JSON.parse(localStorage.getItem(categoriesKey)) || [];
    const savedFlashcards = JSON.parse(localStorage.getItem(flashcardsKey)) || [];
    setCategories(savedCategories);
    setFlashcards(savedFlashcards);
  }, [currentUser]);

  const toggleFlip = (id) => {
    const updated = new Set(flippedIds);
    if(flippedIds.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setFlippedIds(updated);
  };
  const filteredCards = flashcards.filter(
    (card) => Number(card.categoryId) === Number(selectedCategoryId)
  );



  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Play My Flashcards</h2>

      <div style={{ marginBottom: '2rem' , color: '#333' }}>
        <label htmlFor="category-select" style={{ fontWeight: 'bold', marginRight: '1rem' }}>
          Select Category:
        </label>
        <select
          id="category-select"
          value={selectedCategoryId || ""}
          onChange={(e) => {
            setSelectedCategoryId(Number(e.target.value));
            setFlippedIds(new Set());
          }}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        >
          <option value="" disabled>
            Choose category
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ color: '#333' }}>
        {filteredCards.length === 0 && selectedCategoryId && (
          <p style={{ fontStyle: 'italic', color: '#999' }}>No Flashcards in this category.</p>
        )}

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredCards.map((card) => (
            <li
              key={card.id}
              onClick={() => toggleFlip(card.id)}
              style={{
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '1.2rem',
                marginBottom: '1.2rem',
                width: '100%',
                maxWidth: '400px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e8f4ff')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f9f9f9')}
            >
              {flippedIds.has(card.id) ? (
                <p style={{ margin: 0 }}><b>A:</b> {card.Answer}</p>
              ) : (
                <p style={{ margin: 0 }}><b>Q:</b> {card.question}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default PlayMyFlashcards;
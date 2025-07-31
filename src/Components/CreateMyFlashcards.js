import React, { useState, useEffect } from "react";
import '../styles/MyFlashcards.css';

function CreateMyFlashcards() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);

  const [newCategoryName, setNewCategoryName] = useState('');
  const [question, setQuestion] = useState('');
  const [Answer, setAnswer] = useState('');

  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    const savedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    setCategories(savedCategories);
    setFlashcards(savedFlashcards);
  }, []);

  const saveToStorage = (categoriesData, flashcardsData) => {
    localStorage.setItem('categories', JSON.stringify(categoriesData));
    localStorage.setItem('flashcards', JSON.stringify(flashcardsData));
  };

  const addCategory = () => {
    if (!newCategoryName.trim()) return alert("Put your category Name");
    const newCat = { id: Date.now(), name: newCategoryName };
    const updatedCategories = [...categories, newCat];
    setCategories(updatedCategories);
    saveToStorage(updatedCategories, flashcards);
    setNewCategoryName('');
  };

  const deleteCategory = (id) => {
    const updatedCategories = categories.filter(cat => cat.id !== id);
    const updatedFlashcards = flashcards.filter(card => card.categoryId !== id);
    setCategories(updatedCategories);
    setFlashcards(updatedFlashcards);
    saveToStorage(updatedCategories, updatedFlashcards);
    if (selectedCategoryId === id) setSelectedCategoryId(null);
  };

  const resetForm =() => {
    setQuestion('');
    setAnswer('');
    setEditingCard(null);
  };

  const saveCard = () => {
    if (!selectedCategoryId) return alert('Choose category');
    if (!question.trim() || !Answer.trim()) return alert('Question and answer are required.');

    let updatedFlashcards;
    if (editingCard) {
      updatedFlashcards = flashcards.map(card =>
        card.id === editingCard.id
          ? { ...card, question, Answer }
          : card
      );
    } else {
      const newCard = {
        id: Date.now(),
        categoryId: selectedCategoryId,
        question,
        Answer
      };
      updatedFlashcards = [...flashcards, newCard];
    }
    setFlashcards(updatedFlashcards);
    saveToStorage(categories, updatedFlashcards);
    resetForm();
  };


  const deleteCard = (id) => {
    const updatedFlashcards = flashcards.filter(card => card.id !== id);
    setFlashcards(updatedFlashcards);
    saveToStorage(categories, updatedFlashcards);
  };
  const sectionStyle = {
    background: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxWidth: '500px'
  };

  const inputStyle = {
    padding: '8px',
    marginBottom: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    margin: '4px 8px 4px 0',
    padding: '8px 12px',
    borderRadius: '6px',
    border: 'none',
    background: '#4CAF50',
    color: 'white',
    cursor: 'pointer'
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    background: '#f44336'
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    background: '#9e9e9e'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', padding: '20px' }}>
      <div style={sectionStyle}>
        <h3>Add new Category</h3>
        <input
          value={newCategoryName}
          onChange={e => setNewCategoryName(e.target.value)}
          placeholder="New category name"
          style={inputStyle}
        />
        <button onClick={addCategory} style={buttonStyle}>Add new Category</button>
      </div>

      <div style={sectionStyle}>
        <h3>Choose your category</h3>
        <select
          value={selectedCategoryId || ''}
          onChange={e => setSelectedCategoryId(Number(e.target.value))}
          style={inputStyle}
        >
          <option value="" disabled>Choose category</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        {selectedCategoryId && (
          <button onClick={() => deleteCategory(selectedCategoryId)} style={deleteButtonStyle}>
            Delete Selected Category
          </button>
        )}
      </div>

      <div style={sectionStyle}>
        <h3>{editingCard ? "Edit Card" : "New Flashcard"}</h3>
        <input
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Question"
          style={inputStyle}
        />
        <input
          value={Answer}
          onChange={e => setAnswer(e.target.value)}
          placeholder="Answer"
          style={inputStyle}
        />
        <button onClick={saveCard} style={buttonStyle}>{editingCard ? 'Update' : 'Add'}</button>
        {editingCard && <button onClick={resetForm} style={cancelButtonStyle}>Cancel</button>}
      </div>

      <div style={{ ...sectionStyle, width: '100%' }}>
        <h3>My Flashcards</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {flashcards
            .filter(card => card.categoryId === selectedCategoryId)
            .map(card => (
              <li key={card.id} style={{
                marginBottom: '16px',
                background: '#fff',
                borderRadius: '8px',
                padding: '12px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
              }}>
                <strong>Q:</strong> {card.question}<br />
                <strong>A:</strong> {card.Answer}<br />
                <button
                  onClick={() => {
                    setEditingCard(card);
                    setQuestion(card.question);
                    setAnswer(card.Answer);
                  }}
                  style={buttonStyle}
                >
                  Edit
                </button>
                <button onClick={() => deleteCard(card.id)} style={deleteButtonStyle}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default CreateMyFlashcards;
import axios from 'axios';

const BASE_URL = 'https://opentdb.com';

export const fetchCategories = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api_category.php`);
    if(!res.ok) throw new Error(`HTTP error! status:${res.status}`);
    const data = await res.json();
    console.log("categories from API:", data);
    return data.trivia_categories;
  } catch (error) {
    console.error("fetchCategories error:", error);
    return [];
  }
};

function decodeHTML(str) {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export const fetchFlashcardsByCategory = async (categoryId, amount = 10, difficulty = '', type = 'multiple') => {
  try {
    const params = {
      amount,
      category: categoryId,
      type,
    };
    if (difficulty) params.difficulty = difficulty;

    const res = await axios.get(`${BASE_URL}/api.php`, { params });

    if (res.data.response_code !== 0) {
      throw new Error('Failed to fetch quiz questions');
    }

        return res.data.results.map((item, index) => {
      const allAnswers = shuffle([
        decodeHTML(item.correct_answer),
        ...item.incorrect_answers.map(decodeHTML),
      ]);
      return {
        id: index + 1,
        question: decodeHTML(item.question),
        correctAnswer: decodeHTML(item.correct_answer),
        allAnswers,
      };
    });
  } catch (error) {
    console.error('Failed to fetch flashcards:', error);
    throw error;
  }
};

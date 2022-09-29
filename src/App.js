import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of Egypt?",
      options: [
        { id: 0, text: "cairo", isCorrect: true },
        { id: 1, text: "alexandria", isCorrect: false },
        { id: 2, text: "dmettia", isCorrect: false },
        { id: 3, text: "aswan", isCorrect: false },
      ],
    },
    {
      text: "wahts the most popular thing in tourism in egypt ",
      options: [
        { id: 0, text: "pyramids", isCorrect: true },
        { id: 1, text: "sphinx", isCorrect: false },
        { id: 2, text: "karnak template", isCorrect: false },
        { id: 3, text: "abo simple template", isCorrect: false },
      ],
    },
    {
      text: "Who was the last president of the Egypt?",
      options: [
        { id: 0, text: "AbdElfatah Elsisi", isCorrect: true },
        { id: 1, text: "Hosny mibark", isCorrect: false },
        { id: 2, text: "adly mansour", isCorrect: false },
        { id: 3, text: "mohamed anwer elsadat", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the Egypt?",
      options: [
        { id: 0, text: "cairo", isCorrect: true },
        { id: 1, text: "alexandria", isCorrect: false },
        { id: 2, text: "luxor", isCorrect: false },
        { id: 3, text: "aswan", isCorrect: false },
      ],
    },
  
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>React js Quizz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;


import React from "react";

const Result = ({ selectedQuestions, answers }) => {
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < selectedQuestions.length; i++) {
      if (answers[i] === selectedQuestions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  const name = localStorage.getItem(response);

  const handleSubmit = async () => {
    const score = calculateScore();
  
   

    console.log(name);
    try {
      const response = await fetch("http://localhost:8085/bhai/bhai-dekho", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score: score,
          totalQuestions: selectedQuestions.length,
          name: name,
          email: email
        }),
      });
      if (response.ok) {
        alert("Quiz result submitted successfully!");
        // You can perform further actions here, like redirecting the user
      } else {
        throw new Error("Failed to submit quiz result");
      }
    } catch (error) {
      console.error("Error submitting quiz result:", error);
      alert("Failed to submit quiz result. Please try again later.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="border flex flex-col items-center">
          <h1>Quiz Result</h1>
          {/* <p>
            Your Score: {calculateScore()} / {selectedQuestions.length}
          </p> */}
          {/* <h2>Correct Answers:</h2>
      <ul>
        {selectedQuestions.map((question, index) => (
          <li key={index}>
            <strong>Question {index + 1}:</strong> {question.correctAnswer}
          </li>
        ))}
      </ul> */}
          <button
            className="bg-blue-950 py-1 px-2 text-white rounded-md"
            onClick={handleSubmit}
          >
            Submit your total score
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;

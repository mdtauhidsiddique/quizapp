

import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ selectedQuestions, answers }) => {
  const navigate = useNavigate();

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < selectedQuestions.length; i++) {
      if (answers[i] === selectedQuestions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  const handleSubmit = async () => {
    const score = calculateScore();
    try {
      const response = await fetch("http://localhost:8085/bhai/bhai-dekho", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score: score,
          totalQuestions: selectedQuestions.length,
          email: localStorage.getItem("email"),
        }),
      });
      if (response.ok) {
        alert("Quiz result submitted successfully!");
        // Clear user data and redirect to login page
        localStorage.removeItem("email");
        navigate("/login");
      } else {
        throw new Error("Failed to submit quiz result");
      }
    } catch (error) {
      console.error("Error submitting quiz result:", error);
      alert("Failed to submit quiz result. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="border flex flex-col items-center p-5">
        <h1>Quiz Result</h1>
        <button
          className="bg-blue-950 py-1 px-2 text-white rounded-md"
          onClick={handleSubmit}
        >
          Submit your total score
        </button>
      </div>
    </div>
  );
};

export default Result;


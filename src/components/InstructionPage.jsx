import React from "react";
import { Link, useNavigate } from "react-router-dom";

const InstructionPage = () => {
  return (
    <div className="flex flex-col items-center p-5 font-serif border m-5 rounded-md shadow-lg">
      <div>
        <p className="text-3xl font-medium text-center">Online Quiz Instructions</p>
        <p className="mt-4">
          Welcome to the online quiz! Please carefully read the following
          instructions before begin:
        </p>
        <p className="mt-4">
          1.<span className="font-semibold mx-2">Number of Questions:</span>he quiz consists of 40 questions.
        </p>
        <br />
        <p>
          2.<span className="font-semibold mx-2">Time Limit:</span>You have a total of 20 minutes to complete
          the quiz.
        </p>
        <br />
        <p>
          3.<span className="font-semibold mx-2">Automatic Submition:</span>The quiz will automatically submit
          once the timer reaches 20 minutes..
        </p>
        <br />
        <p>
          4.<span className="font-semibold mx-2">Single Submission::</span>You can only submit your answers
          once,Once you submit your final answers, you will not be able to make
          any changes.
        </p>
        <br />
        <p>
          5.<span className="font-semibold mx-2">Unique Attempt:</span>Each participant is allowed only one
          attempt, If you try to log in and take the quiz a second time, the
          system will not accept your responses.
        </p>
        <br />
        <p>
          7.<span className="font-semibold mx-2">Answering Questions:</span>Read each question carefully before
          selecting your answer, You can navigate between questions using the
          "Next" and "Previous" buttons.
        </p>
        <br />
        <p>
          8.<span className="font-semibold mx-2">Time Management:</span>Keep track of the timer displayed on
          the quiz page. Try to pace yourself to ensure you have enough time to
          answer all questions.
        </p>
        <br />
        <p>
          9.<span className="font-semibold mx-2">Integrity Policy:</span>Do not attempt to cheat or use
          unauthorized resources, Ensure you are taking the quiz without any
          external help.
        </p>
        <br />
        <p>
          10.<span className="font-semibold mx-2">Technical Issues:</span>If you encounter any technical
          problems, contact the quiz administrator immediately. Do not refresh
          the page, as this might result in loss of your answers.
        </p>
        <br />
        <p>
          11.<span className="font-semibold mx-2">Submission Confirmation:</span>After submitting your answers,
          you will receive a confirmation message, Make sure to wait for this
          confirmation to ensure your submission has been recorded.
        </p>
        <br />
        <p className="text-center">
          By starting the quiz, you agree to abide by these rules and
          regulations. Good luck!
        </p>
      </div>
      <Link to="/DashBoard">
        <button className="border bg-blue-950 text-white py-1 px-5 rounded mt-5 mb-2">Start Quize</button>
      </Link>
    </div>
  );
};

export default InstructionPage;

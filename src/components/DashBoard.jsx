import React, { useState, useEffect } from "react";
import Header from "./Header";
import Result from "./Result"; // Import the Result component

const allQuestions = [
  {
    question: 'What is the correct syntax to output "Hello World" in Python?',
    options: ['print("Hello World")', 'echo "Hello World"', 'console.log("Hello World")', 'System.out.println("Hello World")'],
    correctAnswer: 'print("Hello World")'
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    options: ['<css>', '<script>', '<style>', '<html>'],
    correctAnswer: '<style>'
  },
  {
    question: 'What does CSS stand for?',
    options: ['Colorful Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets'],
    correctAnswer: 'Cascading Style Sheets'
  },
  {
    question: 'Which method can be used to find the length of a string in JavaScript?',
    options: ['length()', 'len()', 'size()', 'count()'],
    correctAnswer: 'length'
  },
  {
    question: 'Which of the following is not an operating system?',
    options: ['Windows', 'Linux', 'Oracle', 'DOS'],
    correctAnswer: 'Oracle'
  },
  {
    question: 'What is the output of the following code in Java?\npublic class Main {\n  public static void main(String[] args) {\n    int a = 5;\n    int b = 10;\n    System.out.println(a + b);\n  }\n}',
    options: ['15', '510', '5 + 10', 'Error'],
    correctAnswer: '15'
  },
  {
    question: 'Which of the following is used to create a hyperlink in HTML?',
    options: ['<a href="url">', '<link url="url">', '<hyperlink src="url">', '<a src="url">'],
    correctAnswer: '<a href="url">'
  },
  {
    question: 'What is the correct way to declare a variable in JavaScript?',
    options: ['var myVar;', 'variable myVar;', 'myVar = var;', 'declare myVar;'],
    correctAnswer: 'var myVar;'
  },
  {
    question: 'Which of the following is a Python tuple?',
    options: ['["apple", "banana", "cherry"]', '("apple", "banana", "cherry")', '{ "name": "apple", "type": "fruit" }', 'None of the above'],
    correctAnswer: '("apple", "banana", "cherry")'
  },
  {
    question: 'Which of the following is a valid CSS property?',
    options: ['font-weight', 'text-decoration', 'background-color', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    question: 'Which Java keyword is used to define a class?',
    options: ['class', 'Class', 'define', 'public'],
    correctAnswer: 'class'
  },
  {
    question: 'In HTML, which attribute is used to specify the URL of the image?',
    options: ['src', 'href', 'link', 'url'],
    correctAnswer: 'src'
  },
  {
    question: 'Which function is used to parse a string to an integer in JavaScript?',
    options: ['parseInt()', 'toInteger()', 'parseInteger()', 'int()'],
    correctAnswer: 'parseInt()'
  },
  {
    question: 'Which of the following is a valid Python dictionary?',
    options: ['["name": "John", "age": 30]', '{"name": "John", "age": 30}', '("name": "John", "age": 30)', '{name: "John", age: 30}'],
    correctAnswer: '{"name": "John", "age": 30}'
  },
  {
    question: 'Which CSS property controls the text size?',
    options: ['font-size', 'text-size', 'font-style', 'text-style'],
    correctAnswer: 'font-size'
  },
  {
    question: 'Which method is used to start a thread in Java?',
    options: ['run()', 'start()', 'begin()', 'init()'],
    correctAnswer: 'start()'
  },
  {
    question: 'What is the purpose of the alt attribute in HTML?',
    options: ['To specify the URL of an image', 'To specify alternative text for an image', 'To link to another webpage', 'To create a text area'],
    correctAnswer: 'To specify alternative text for an image'
  },
  {
    question: 'Which of the following is not a reserved keyword in JavaScript?',
    options: ['interface', 'throws', 'program', 'short'],
    correctAnswer: 'program'
  },
  {
    question: 'Which Python keyword is used to create a function?',
    options: ['function', 'def', 'func', 'define'],
    correctAnswer: 'def'
  },
  {
    question: 'In CSS, which property is used to change the background color?',
    options: ['color', 'bgcolor', 'background-color', 'bg-color'],
    correctAnswer: 'background-color'
  },
  {
    question: 'Which command is used to list all files in a directory in Linux?',
    options: ['ls', 'dir', 'list', 'show'],
    correctAnswer: 'ls'
  },
  {
    question: 'What does the "id" attribute do in HTML?',
    options: ['Specifies a unique id for an element', 'Specifies the class of an element', 'Specifies the style of an element', 'Specifies the name of an element'],
    correctAnswer: 'Specifies a unique id for an element'
  },
  {
    question: 'In Java, which operator is used to compare two values?',
    options: ['==', '=', '===', 'equals'],
    correctAnswer: '=='
  },
  {
    question: 'Which CSS property is used to change the text color of an element?',
    options: ['fgcolor', 'text-color', 'color', 'font-color'],
    correctAnswer: 'color'
  },
  {
    question: 'Which method can be used to round a number to the nearest integer in JavaScript?',
    options: ['Math.round()', 'Math.ceil()', 'Math.floor()', 'Math.random()'],
    correctAnswer: 'Math.round()'
  },
  // Add more questions to make the total number 40
  {
    question: 'Which symbol is used for comments in Python?',
    options: ['//', '#', '<!--', '/*'],
    correctAnswer: '#'
  },
  {
    question: 'What does SQL stand for?',
    options: ['Structured Query Language', 'Strong Question Language', 'Structured Question Language', 'Strong Query Language'],
    correctAnswer: 'Structured Query Language'
  },
  {
    question: 'Which HTML element is used for the largest heading?',
    options: ['<head>', '<h1>', '<h6>', '<heading>'],
    correctAnswer: '<h1>'
  },
  {
    question: 'Which company developed JavaScript?',
    options: ['Netscape', 'Microsoft', 'Sun Microsystems', 'IBM'],
    correctAnswer: 'Netscape'
  },
  {
    question: 'Which method is used to add an element at the end of an array in JavaScript?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    correctAnswer: 'push()'
  },
  {
    question: 'Which of the following is not a JavaScript data type?',
    options: ['String', 'Boolean', 'Integer', 'Object'],
    correctAnswer: 'Integer'
  },
  {
    question: 'Which attribute is used in HTML to link to an external style sheet?',
    options: ['src', 'rel', 'href', 'link'],
    correctAnswer: 'href'
  },
  {
    question: 'What is the default port number for HTTP?',
    options: ['80', '21', '443', '8080'],
    correctAnswer: '80'
  },
  {
    question: 'Which JavaScript framework is maintained by Facebook?',
    options: ['Angular', 'React', 'Vue', 'Ember'],
    correctAnswer: 'React'
  },
  {
    question: 'In CSS, which property is used to set the spacing between lines of text?',
    options: ['letter-spacing', 'line-height', 'text-spacing', 'spacing'],
    correctAnswer: 'line-height'
  },
  {
    question: 'Which of the following is used to create a numbered list in HTML?',
    options: ['<ul>', '<ol>', '<li>', '<dl>'],
    correctAnswer: '<ol>'
  },
  {
    question: 'Which Python method is used to remove whitespace from the beginning and end of a string?',
    options: ['trim()', 'strip()', 'cut()', 'remove()'],
    correctAnswer: 'strip()'
  },
  {
    question: 'Which property is used to change the font of an element in CSS?',
    options: ['font-style', 'font-family', 'font-weight', 'font-text'],
    correctAnswer: 'font-family'
  },
  {
    question: 'Which of the following is a backend programming language?',
    options: ['HTML', 'CSS', 'JavaScript', 'Python'],
    correctAnswer: 'Python'
  },
  {
    question: 'In JavaScript, which operator is used to assign a value to a variable?',
    options: ['=', '==', '===', ':'],
    correctAnswer: '='
  },
  {
    question: 'Which HTML element is used to define the title of a document?',
    options: ['<title>', '<head>', '<meta>', '<header>'],
    correctAnswer: '<title>'
  },
  {
    question: 'In Python, which keyword is used to check if a value is present in a list, tuple, etc.?',
    options: ['exists', 'in', 'present', 'check'],
    correctAnswer: 'in'
  },
  {
    question: 'Which CSS property is used to set the width of an element?',
    options: ['height', 'size', 'width', 'length'],
    correctAnswer: 'width'
  },
  {
    question: 'In JavaScript, which method is used to convert a string to lowercase?',
    options: ['toLowerCase()', 'lower()', 'changeCase()', 'toLower()'],
    correctAnswer: 'toLowerCase()'
  }
];

const DashBoard = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState(Array(40).fill(null));
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false); // State to control whether to show the result or not

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const randomQuestions = shuffleArray(allQuestions).slice(0, 40);
    setSelectedQuestions(randomQuestions);
  }, []);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
    if (newAnswers[index] && !answers[index]) {
      setAttemptedCount((prevCount) => prevCount + 1);
    } else if (!newAnswers[index] && answers[index]) {
      setAttemptedCount((prevCount) => prevCount - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Answers: ", answers);
    setShowResult(true); // Set showResult to true when submitted
    // Here you would typically send the answers to a backend service


  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };


  return (
    <>
      {showResult ? ( // Conditional rendering to display either the quiz or the result
        <Result selectedQuestions={selectedQuestions} answers={answers} />
        
      ) : (
        <>
          <Header />
          <p className="mt-3 text-center">Start Quiz</p>
          <div className="text-right p-4 md:mx-28">
            <button className="border p-2 rounded-md font-medium">
              Attempted: {attemptedCount}/40
            </button>
          </div>
          <section>
            <div className="border rounded-md shadow-lg w-5/6 mx-auto p-6">
              <div className="container mx-auto p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    {/* <h3 className="text-lg font-semibold">{`Question ${currentQuestionIndex + 1}`}</h3> */}
                    <h3 className="text-lg font-semibold">
                      {`${currentQuestionIndex + 1}. ${selectedQuestions[currentQuestionIndex]?.question}`}
                    </h3>
                    <div className="mt-2 space-y-2">
                      {selectedQuestions[currentQuestionIndex]?.options.map(
                        (option, optionIndex) => (
                          <label key={optionIndex} className="block border cursor-pointer py-1 px-2 rounded-md md:w-3/6 mx-5">
                            <input
                              type="radio"
                              name={`question-${currentQuestionIndex}`}
                              value={option}
                              checked={answers[currentQuestionIndex] === option}
                              onChange={() =>
                                handleOptionChange(
                                  currentQuestionIndex,
                                  option
                                )
                              }
                              className="mr-2"
                            />
                            {option}
                          </label>
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex mx-5 gap-10 md:gap-20 mt-8">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      disabled={currentQuestionIndex === 0}
                      className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={
                        currentQuestionIndex === selectedQuestions.length - 1
                      }
                      className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-2 rounded"
                    >
                      Next
                    </button>
                  </div>
                  <div className="flex justify-end mx-5">
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-4"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DashBoard;

// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Result from "./Result"; // Import the Result component

// const allQuestions = [
//   {
//     question: 'Which data structure in Python ensures that all elements are unique?',
//     options: ['List', 'Tuple', 'Set', 'Dictionary'],
//     correctAnswer: 'Set'
//   },
//   {
//     question: 'Which method in Java is used to compare two strings, ignoring case considerations?',
//     options: ['equals()', 'compareTo()', 'equalsIgnoreCase()', 'compare()'],
//     correctAnswer: 'equalsIgnoreCase()'
//   },
//   {
//     question: 'In JavaScript, what will the expression `0.1 + 0.2 === 0.3` return?',
//     options: ['true', 'false', 'undefined', 'NaN'],
//     correctAnswer: 'false'
//   },
//   {
//     question: 'Which Python module is used to generate random numbers?',
//     options: ['random', 'math', 'statistics', 'numpy'],
//     correctAnswer: 'random'
//   },
//   {
//     question: 'What is the time complexity of inserting an element at the end of a Python list?',
//     options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
//     correctAnswer: 'O(1)'
//   },
//   {
//     question: 'In CSS, how can you apply a style to all elements of a specific class?',
//     options: ['.classname', '#classname', 'classname', '*classname'],
//     correctAnswer: '.classname'
//   },
//   {
//     question: 'What is the output of the following JavaScript code?\n```javascript\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);\n```',
//     options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4]', '[1, 2, 3, 4, 4]'],
//     correctAnswer: '[1, 2, 3, 4]'
//   },
//   {
//     question: 'In Python, what does the `@staticmethod` decorator do?',
//     options: ['Defines a method that is bound to the class and not the instance', 'Defines a method that can access the class itself', 'Defines a method that can modify the class state', 'Defines a method that is a factory method'],
//     correctAnswer: 'Defines a method that is bound to the class and not the instance'
//   },
//   {
//     question: 'Which of the following is not a valid way to declare a JavaScript variable?',
//     options: ['let myVar;', 'var myVar;', 'const myVar;', 'variable myVar;'],
//     correctAnswer: 'variable myVar;'
//   },
//   {
//     question: 'What is the purpose of the `finally` block in Java?',
//     options: ['To execute code after a try/catch block, regardless of the outcome', 'To handle exceptions that are not caught by the try/catch block', 'To define a block of code to be executed before the try block', 'To terminate the program if an exception is thrown'],
//     correctAnswer: 'To execute code after a try/catch block, regardless of the outcome'
//   },
//   {
//     question: 'In SQL, which statement is used to remove a table from a database?',
//     options: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE'],
//     correctAnswer: 'DROP TABLE'
//   },
//   {
//     question: 'What is a lambda function in Python?',
//     options: ['A function defined without a name', 'A function that calls itself', 'A function that is used to initialize a class', 'A function that is called at the end of the program'],
//     correctAnswer: 'A function defined without a name'
//   },
//   {
//     question: 'What will be the output of the following code in Python?\n```python\ndef func(x, y=[]):\n    y.append(x)\n    return y\n\nprint(func(1))\nprint(func(2))\n```',
//     options: ['[1] [2]', '[1] [1, 2]', '1 2', '[1, 2] [1, 2]'],
//     correctAnswer: '[1] [1, 2]'
//   },
//   {
//     question: 'Which HTML attribute is used to define inline styles?',
//     options: ['style', 'class', 'styles', 'font'],
//     correctAnswer: 'style'
//   },
//   {
//     question: 'What is the result of the expression `2 ** 3 ** 2` in Python?',
//     options: ['512', '64', '256', '8'],
//     correctAnswer: '512'
//   },
//   {
//     question: 'In Java, which method must be implemented by a class implementing the Runnable interface?',
//     options: ['run()', 'start()', 'execute()', 'begin()'],
//     correctAnswer: 'run()'
//   },
//   {
//     question: 'Which JavaScript method is used to filter elements of an array based on a condition?',
//     options: ['map()', 'reduce()', 'filter()', 'find()'],
//     correctAnswer: 'filter()'
//   },
//   {
//     question: 'What does the acronym REST stand for in web development?',
//     options: ['Representational State Transfer', 'Remote Execution Service Transfer', 'Representational Server Transfer', 'Remote Execution State Transfer'],
//     correctAnswer: 'Representational State Transfer'
//   },
//   {
//     question: 'In Python, which keyword is used to create a generator function?',
//     options: ['yield', 'return', 'generate', 'async'],
//     correctAnswer: 'yield'
//   },
//   {
//     question: 'What is the output of the following code in JavaScript?\n```javascript\nconsole.log(typeof null);\n```',
//     options: ['"object"', '"null"', '"undefined"', '"string"'],
//     correctAnswer: '"object"'
//   },
//   {
//     question: 'Which method is used to sort elements in an array in JavaScript?',
//     options: ['order()', 'arrange()', 'sort()', 'orderBy()'],
//     correctAnswer: 'sort()'
//   },
//   {
//     question: 'In Python, which built-in function can be used to iterate over two lists simultaneously?',
//     options: ['zip()', 'enumerate()', 'map()', 'filter()'],
//     correctAnswer: 'zip()'
//   },
//   {
//     question: 'In Java, what is the purpose of the `transient` keyword?',
//     options: ['To indicate that a field should not be serialized', 'To define a method that is only accessible within its own package', 'To declare a variable that cannot be changed', 'To define a class that cannot be instantiated'],
//     correctAnswer: 'To indicate that a field should not be serialized'
//   },
//   {
//     question: 'In CSS, which property is used to create space between the element’s border and its content?',
//     options: ['margin', 'padding', 'border-spacing', 'spacing'],
//     correctAnswer: 'padding'
//   },
//   {
//     question: 'In SQL, what is the purpose of the `GROUP BY` clause?',
//     options: ['To combine multiple columns into a single column', 'To group rows that have the same values in specified columns into aggregated data', 'To filter rows based on a specified condition', 'To sort the result set based on specified columns'],
//     correctAnswer: 'To group rows that have the same values in specified columns into aggregated data'
//   },
//   {
//     question: 'What is a "closure" in JavaScript?',
//     options: ['A function having access to the parent scope, even after the parent function has closed', 'A function that is called immediately after it is defined', 'A function that returns another function', 'A function that is used as a callback'],
//     correctAnswer: 'A function having access to the parent scope, even after the parent function has closed'
//   },
//   {
//     question: 'Which of the following is not a built-in Python data type?',
//     options: ['list', 'dictionary', 'tuple', 'tree'],
//     correctAnswer: 'tree'
//   },
//   {
//     question: 'In JavaScript, which event occurs when the user clicks on an HTML element?',
//     options: ['onchange', 'onmouseover', 'onmouseclick', 'onclick'],
//     correctAnswer: 'onclick'
//   },
//   {
//     question: 'Which of the following HTTP methods is idempotent?',
//     options: ['GET', 'POST', 'PATCH', 'CONNECT'],
//     correctAnswer: 'GET'
//   },
//   {
//     question: 'What is the purpose of the `super` keyword in Java?',
//     options: ['To call the parent class constructor', 'To create a new instance of a class', 'To compare two objects', 'To check the superclass of a class'],
//     correctAnswer: 'To call the parent class constructor'
//   },
//   {
//     question: 'In Python, which function can be used to get the ASCII value of a character?',
//     options: ['ascii()', 'ord()', 'chr()', 'char()'],
//     correctAnswer: 'ord()'
//   },
//   {
//     question: 'In CSS, which property is used to control the order of flex items in a flex container?',
//     options: ['order', 'flex-direction', 'align-items', 'justify-content'],
//     correctAnswer: 'order'
//   },
//   {
//     question: 'What is the purpose of the `finally` block in exception handling?',
//     options: ['To execute code regardless of whether an exception was thrown or not', 'To handle specific types of exceptions', 'To re-throw an exception', 'To log exception details'],
//     correctAnswer: 'To execute code regardless of whether an exception was thrown or not'
//   },
//   {
//     question: 'Which protocol is used for secure communication over a computer network?',
//     options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
//     correctAnswer: 'HTTPS'
//   },
//   {
//     question: 'In Python, which method is used to find the position of a substring in a string?',
//     options: ['find()', 'index()', 'search()', 'locate()'],
//     correctAnswer: 'find()'
//   },
//   {
//     question: 'What is the output of the following code in Python?\n```python\nprint([i for i in range(5)])\n```',
//     options: ['[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4, 5, 6]'],
//     correctAnswer: '[0, 1, 2, 3, 4]'
//   },
//   {
//     question: 'In SQL, which clause is used to specify the conditions that must be met for the rows to be included in the result set?',
//     options: ['WHERE', 'HAVING', 'FROM', 'SELECT'],
//     correctAnswer: 'WHERE'
//   },
//   {
//     question: 'In Java, what is the result of the expression `10 + 20 + "30"`?',
//     options: ['"3030"', '"102030"', '60', '"60"'],
//     correctAnswer: '"3030"'
//   },
//   {
//     question: 'Which method in JavaScript returns the character at a specified index in a string?',
//     options: ['charAt()', 'charCodeAt()', 'indexOf()', 'substring()'],
//     correctAnswer: 'charAt()'
//   }
// ];


// const DashBoard = () => {
//   const [selectedQuestions, setSelectedQuestions] = useState([]);
//   const [answers, setAnswers] = useState(Array(40).fill(null));
//   const [attemptedCount, setAttemptedCount] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [showResult, setShowResult] = useState(false); // State to control whether to show the result or not

//   useEffect(() => {
//     const shuffleArray = (array) => {
//       for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//       }
//       return array;
//     };

//     const randomQuestions = shuffleArray(allQuestions).slice(0, 40);
//     setSelectedQuestions(randomQuestions);
//   }, []);

//   const handleOptionChange = (index, option) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = option;
//     setAnswers(newAnswers);
//     if (newAnswers[index] && !answers[index]) {
//       setAttemptedCount((prevCount) => prevCount + 1);
//     } else if (!newAnswers[index] && answers[index]) {
//       setAttemptedCount((prevCount) => prevCount - 1);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Answers: ", answers);
//     setShowResult(true); // Set showResult to true when submitted
//     // Here you would typically send the answers to a backend service


//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
//   };


//   return (
//     <>
//       {showResult ? ( // Conditional rendering to display either the quiz or the result
//         <Result selectedQuestions={selectedQuestions} answers={answers} />
        
//       ) : (
//         <>
//           <Header />
//           <p className="mt-3 text-center">Begin Your Challenge, Start Your Adventure, Let's Get Quizzing, Quiz Time, Test Your Knowledge, Ready, Set, Quiz!</p>
//           <div className="text-right p-4 md:mx-28">
//             <button className="border p-2 rounded-md font-medium">
//               Attempted: {attemptedCount}/40
//             </button>
//           </div>
//           <section>
//             <div className="border rounded-md shadow-lg w-5/6 mx-auto p-6">
//               <div className="container mx-auto p-4">
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     {/* <h3 className="text-lg font-semibold">{`Question ${currentQuestionIndex + 1}`}</h3> */}
//                     <h3 className="text-lg font-semibold">
//                       {`${currentQuestionIndex + 1}. ${selectedQuestions[currentQuestionIndex]?.question}`}
//                     </h3>
//                     <div className="mt-2 space-y-2">
//                       {selectedQuestions[currentQuestionIndex]?.options.map(
//                         (option, optionIndex) => (
//                           <label key={optionIndex} className="block border cursor-pointer py-1 px-2 rounded-md md:w-3/6 mx-5">
//                             <input
//                               type="radio"
//                               name={`question-${currentQuestionIndex}`}
//                               value={option}
//                               checked={answers[currentQuestionIndex] === option}
//                               onChange={() =>
//                                 handleOptionChange(
//                                   currentQuestionIndex,
//                                   option
//                                 )
//                               }
//                               className="mr-2"
//                             />
//                             {option}
//                           </label>
//                         )
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex mx-5 gap-10 md:gap-20 mt-8">
//                     <button
//                       type="button"
//                       onClick={handlePrevious}
//                       disabled={currentQuestionIndex === 0}
//                       className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
//                     >
//                       Previous
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       disabled={
//                         currentQuestionIndex === selectedQuestions.length - 1
//                       }
//                       className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-2 rounded"
//                     >
//                       Next
//                     </button>
//                   </div>
//                   <div className="flex justify-end mx-5">
//                     <button
//                       type="submit"
//                       className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-4"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </section>
//         </>
//       )}
//     </>
//   );
// };

// export default DashBoard;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Result from "./Result"; // Import the Result component
import logo from '../assets/images/logoimg.png'; // Import logo image

const allQuestions = [
  {
    question: 'Which data structure in Python ensures that all elements are unique?',
    options: ['List', 'Tuple', 'Set', 'Dictionary'],
    correctAnswer: 'Set'
  },
  {
    question: 'Which method in Java is used to compare two strings, ignoring case considerations?',
    options: ['equals()', 'compareTo()', 'equalsIgnoreCase()', 'compare()'],
    correctAnswer: 'equalsIgnoreCase()'
  },
  {
    question: 'In JavaScript, what will the expression 0.1 + 0.2 === 0.3 return?',
    options: ['true', 'false', 'undefined', 'NaN'],
    correctAnswer: 'false'
  },
  {
    question: 'Which Python module is used to generate random numbers?',
    options: ['random', 'math', 'statistics', 'numpy'],
    correctAnswer: 'random'
  },
  {
    question: 'What is the time complexity of inserting an element at the end of a Python list?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 'O(1)'
  },
  {
    question: 'In CSS, how can you apply a style to all elements of a specific class?',
    options: ['.classname', '#classname', 'classname', '*classname'],
    correctAnswer: '.classname'
  },
  {
    question: 'What is the output of the following JavaScript code?\njavascript\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);\n',
    options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4]', '[1, 2, 3, 4, 4]'],
    correctAnswer: '[1, 2, 3, 4]'
  },
  {
    question: 'In Python, what does the @staticmethod decorator do?',
    options: ['Defines a method that is bound to the class and not the instance', 'Defines a method that can access the class itself', 'Defines a method that can modify the class state', 'Defines a method that is a factory method'],
    correctAnswer: 'Defines a method that is bound to the class and not the instance'
  },
  {
    question: 'Which of the following is not a valid way to declare a JavaScript variable?',
    options: ['let myVar;', 'var myVar;', 'const myVar;', 'variable myVar;'],
    correctAnswer: 'variable myVar;'
  },
  {
    question: 'What is the purpose of the finally block in Java?',
    options: ['To execute code after a try/catch block, regardless of the outcome', 'To handle exceptions that are not caught by the try/catch block', 'To define a block of code to be executed before the try block', 'To terminate the program if an exception is thrown'],
    correctAnswer: 'To execute code after a try/catch block, regardless of the outcome'
  },
  {
    question: 'In SQL, which statement is used to remove a table from a database?',
    options: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE'],
    correctAnswer: 'DROP TABLE'
  },
  {
    question: 'What is a lambda function in Python?',
    options: ['A function defined without a name', 'A function that calls itself', 'A function that is used to initialize a class', 'A function that is called at the end of the program'],
    correctAnswer: 'A function defined without a name'
  },
  {
    question: 'What will be the output of the following code in Python?\npython\ndef func(x, y=[]):\n    y.append(x)\n    return y\n\nprint(func(1))\nprint(func(2))\n',
    options: ['[1] [2]', '[1] [1, 2]', '1 2', '[1, 2] [1, 2]'],
    correctAnswer: '[1] [1, 2]'
  },
  {
    question: 'Which HTML attribute is used to define inline styles?',
    options: ['style', 'class', 'styles', 'font'],
    correctAnswer: 'style'
  },
  {
    question: 'What is the result of the expression 2 ** 3 ** 2 in Python?',
    options: ['512', '64', '256', '8'],
    correctAnswer: '512'
  },
  {
    question: 'In Java, which method must be implemented by a class implementing the Runnable interface?',
    options: ['run()', 'start()', 'execute()', 'begin()'],
    correctAnswer: 'run()'
  },
  {
    question: 'Which JavaScript method is used to filter elements of an array based on a condition?',
    options: ['map()', 'reduce()', 'filter()', 'find()'],
    correctAnswer: 'filter()'
  },
  {
    question: 'What does the acronym REST stand for in web development?',
    options: ['Representational State Transfer', 'Remote Execution Service Transfer', 'Representational Server Transfer', 'Remote Execution State Transfer'],
    correctAnswer: 'Representational State Transfer'
  },
  {
    question: 'In Python, which keyword is used to create a generator function?',
    options: ['yield', 'return', 'generate', 'async'],
    correctAnswer: 'yield'
  },
  {
    question: 'What is the output of the following code in JavaScript?\njavascript\nconsole.log(typeof null);\n',
    options: ['"object"', '"null"', '"undefined"', '"string"'],
    correctAnswer: '"object"'
  },
  {
    question: 'Which method is used to sort elements in an array in JavaScript?',
    options: ['order()', 'arrange()', 'sort()', 'orderBy()'],
    correctAnswer: 'sort()'
  },
  {
    question: 'In Python, which built-in function can be used to iterate over two lists simultaneously?',
    options: ['zip()', 'enumerate()', 'map()', 'filter()'],
    correctAnswer: 'zip()'
  },
  {
    question: 'In Java, what is the purpose of the transient keyword?',
    options: ['To indicate that a field should not be serialized', 'To define a method that is only accessible within its own package', 'To declare a variable that cannot be changed', 'To define a class that cannot be instantiated'],
    correctAnswer: 'To indicate that a field should not be serialized'
  },
  {
    question: 'In CSS, which property is used to create space between the element’s border and its content?',
    options: ['margin', 'padding', 'border-spacing', 'spacing'],
    correctAnswer: 'padding'
  },
  {
    question: 'In SQL, what is the purpose of the GROUP BY clause?',
    options: ['To combine multiple columns into a single column', 'To group rows that have the same values in specified columns into aggregated data', 'To filter rows based on a specified condition', 'To sort the result set based on specified columns'],
    correctAnswer: 'To group rows that have the same values in specified columns into aggregated data'
  },
  {
    question: 'What is a "closure" in JavaScript?',
    options: ['A function having access to the parent scope, even after the parent function has closed', 'A function that is called immediately after it is defined', 'A function that returns another function', 'A function that is used as a callback'],
    correctAnswer: 'A function having access to the parent scope, even after the parent function has closed'
  },
  {
    question: 'Which of the following is not a built-in Python data type?',
    options: ['list', 'dictionary', 'tuple', 'tree'],
    correctAnswer: 'tree'
  },
  {
    question: 'In JavaScript, which event occurs when the user clicks on an HTML element?',
    options: ['onchange', 'onmouseover', 'onmouseclick', 'onclick'],
    correctAnswer: 'onclick'
  },
  {
    question: 'Which of the following HTTP methods is idempotent?',
    options: ['GET', 'POST', 'PATCH', 'CONNECT'],
    correctAnswer: 'GET'
  },
  {
    question: 'What is the purpose of the super keyword in Java?',
    options: ['To call the parent class constructor', 'To create a new instance of a class', 'To compare two objects', 'To check the superclass of a class'],
    correctAnswer: 'To call the parent class constructor'
  },
  {
    question: 'In Python, which function can be used to get the ASCII value of a character?',
    options: ['ascii()', 'ord()', 'chr()', 'char()'],
    correctAnswer: 'ord()'
  },
  {
    question: 'In CSS, which property is used to control the order of flex items in a flex container?',
    options: ['order', 'flex-direction', 'align-items', 'justify-content'],
    correctAnswer: 'order'
  },
  {
    question: 'What is the purpose of the finally block in exception handling?',
    options: ['To execute code regardless of whether an exception was thrown or not', 'To handle specific types of exceptions', 'To re-throw an exception', 'To log exception details'],
    correctAnswer: 'To execute code regardless of whether an exception was thrown or not'
  },
  {
    question: 'Which protocol is used for secure communication over a computer network?',
    options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
    correctAnswer: 'HTTPS'
  },
  {
    question: 'In Python, which method is used to find the position of a substring in a string?',
    options: ['find()', 'index()', 'search()', 'locate()'],
    correctAnswer: 'find()'
  },
  {
    question: 'What is the output of the following code in Python?\npython\nprint([i for i in range(5)])\n',
    options: ['[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4, 5, 6]'],
    correctAnswer: '[0, 1, 2, 3, 4]'
  },
  {
    question: 'In SQL, which clause is used to specify the conditions that must be met for the rows to be included in the result set?',
    options: ['WHERE', 'HAVING', 'FROM', 'SELECT'],
    correctAnswer: 'WHERE'
  },
  {
    question: 'In Java, what is the result of the expression 10 + 20 + "30"?',
    options: ['"3030"', '"102030"', '60', '"60"'],
    correctAnswer: '"3030"'
  },
  {
    question: 'Which method in JavaScript returns the character at a specified index in a string?',
    options: ['charAt()', 'charCodeAt()', 'indexOf()', 'substring()'],
    correctAnswer: 'charAt()'
  }
];


const DashBoard = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState(Array(40).fill(null));
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit when the timer ends
        }
        return prevTime > 0 ? prevTime - 1 : prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
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
    if (e) e.preventDefault();
    console.log("Submitted Answers: ", answers);
    setShowResult(true);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {showResult ? (
        <Result selectedQuestions={selectedQuestions} answers={answers} />
      ) : (
        <>
          <Header timeLeft={formatTime(timeLeft)} />
          <p className=" text-center text-xl mt-5 font-semibold">Begin Your Challenge, Start Your Adventure, Let's Get Quizzing, Quiz Time, Test Your Knowledge, Ready, Set, Quiz!</p>
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

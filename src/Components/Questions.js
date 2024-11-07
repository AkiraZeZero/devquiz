const questions = {
  topic: "ReactJS",
  level: "Beginner",
  totalQuestions: 10,
  perQuestionScore: 1,
  questions: [
    {
      question: "What is React?",
      choices: [
        "Hyper Text Markup Language",
        "A programming language and core technology of the World Wide Web",
        "An open-source JavaScript library for building user interfaces",
        "A framework exclusive to the web",
      ],
      correctAnswer:
        "An open-source JavaScript library for building user interfaces",
    },
    {
      question: "What is NOT a reason why ReactJS is popularly used?",
      choices: [
        "Allows developers to create reusable components",
        "Because ReactJS is the first coding library",
        "ReactJS is a very flexible- multi-purpose library",
        "The library's ultimately optimized development interface and coding language",
      ],
      correctAnswer: "Because ReactJS is the first coding library",
    },
    {
      question: "What are the 2 Major features of ReactJS?",
      choices: [
        "HTML and Bootstrap",
        "Components and JSX",
        "HTML and CSS",
        "Real DOM and Components",
      ],
      correctAnswer: "Real DOM and Components",
    },
    {
      question: "How do you create a React app in the command prompt?",
      choices: [
        "npm create-reactapp@latest myprojectname",
        "npx createReactApp myProjectName",
        "npx create-reactapp@latest myprojectname",
        "npm create react app myProjectName",
      ],
      correctAnswer: "npx create-reactapp@latest myprojectname",
    },
    {
      question: "What is JSX?",
      choices: [
        "Hypertext Markup Language that is used to structure and display content on a web page",
        "A scripting or programming language that allows you to implement complex features on web pages",
        "A syntax extension of JavaScript allowing us to write HTML in a file with JavaScript code",
        "A style sheet language used for specifying the presentation and styling of a document",
      ],
      correctAnswer:
        "A syntax extension of JavaScript allowing us to write HTML in a file with JavaScript code",
    },
    {
      question: "Which of the following is an  HTML  Element?",
      choices: ["Div", "() => {}", "[0,1,2,3]", "{name: 'Dustin'}"],
      correctAnswer: "Div",
    },
    {
      question: "What is a Component in JavaScript?",
      choices: ["Copy and paste code", "Independent and reusable bits of code", "A VS Code plugin", "An Element that can be changed"],
      correctAnswer: "Independent and reusable bits of code",
    },
    {
      question: "What is the difference between an Element and a Component in ReactJS?",
      choices: ["Once a Component is created it cannot be mutated", "Once a Component is created it can be mutated", "Components cannot be reused while Elements can", "A Component always gets returned by an Element"],
      correctAnswer: "Once an Element is created it cannot be mutated",
    },
    {
      question: "What is a ternary operator?",
      choices: ["===", "x ? y : z", "!==", "&&"],
      correctAnswer: "x ? y : z",
    },
    {
      question: "What does UI stand for and why is it important",
      choices: ["User Indifference - Because it makes the product easy to use", "User Intuition -Because it provides a seemless and enjoyable experience", "User Ideas - Because it influences how people interact with the product", "User Interface - Because it provides a seemless and enjoyable experience"],
      correctAnswer: "User Interface - Because it provides a seemless and enjoyable experience",
    },
  ],
};

export default questions;

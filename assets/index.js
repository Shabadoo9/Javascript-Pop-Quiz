const question = document.getElementById("question");

let questions = [
    {
        question : "What is the result of the following expression: 5 + '5'?",
        choiceA : "55",
        choiceB : "10",
        choiceC : "5 + '5'",
        choiceD : "15",
        correct : "A"
    },{
        question : "Which of the following is a valid way to comment in JavaScript?",
        choiceA : "# This is a comment",
        choiceB : "<!-- This is a comment -->",
        choiceC : "/* This is a comment */",
        choiceD : "// This is a comment",
        correct : "D"
    },{
        question : "What is the JavaScript operator for equality comparison?",
        choiceA : "==",
        choiceB : "===",
        choiceC : "=>",
        choiceD : "!=",
        correct : "B"
    },{
        question : "Which method is used to remove the last item from an array in JavaScript?",
        choiceA : "pop()",
        choiceB : "push()",
        choiceC : "remove()",
        choiceD : "shift()",
        correct : "A"
    },{
        question : "What is the purpose of the `return` statement in a JavaScript function?",
        choiceA : "To declare a variable",
        choiceB : "To add a comment",
        choiceC : "To exit the function and specify a return value",
        choiceD : "To create a loop",
        correct : "C"
    },{
        question : "In JavaScript, what is the purpose of the `for` loop?",
        choiceA : "To define a function",
        choiceB : "To iterate over a block of code a specific number of times",
        choiceC : "To display a message",
        choiceD : "To format text",
        correct : "B"
    },{
        question : "What does the acronym 'DOM' stand for in web development?",
        choiceA : "Document Object Model",
        choiceB : "Dynamic Object Model",
        choiceC : "Digital Order Module",
        choiceD : "Data Object Management",
        correct : "A"
    },{
        question : "Which built-in JavaScript method is used to round a number to the nearest integer?",
        choiceA : "ceil()",
        choiceB : "floor()",
        choiceC : "round()",
        choiceD : "truncate()",
        correct : "C"
    }
];


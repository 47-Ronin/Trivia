const genre1 = {
    "row1": [{
            "number" : 1,
            "q" : "Is Australia real?",
            "choices" : ["True", "False"],
            "answer" : "False"
        }, {
            "number" : 2,
            "q" : "Epstien was murdered",
            "choices" : ["True", "False"],
            "answer" : "True"
        }],
    "row2": [{
        "number" : 1,
        "q" : "The answer is d",
        "choices" : ["A", "B", "C", "G"],
        "answer" : "Z"
    }, {
        "number" : 2,
        "q" : "The anwser is !truen't",
        "choices" : ["False", "True"],
        "answer" : "True"
    }]
};

let selectedGenre = genre1;
let selectedQuestion = {};

const document.getElementBy

function answerQuestion(response) {
    console.log("The question asked:" + selectedQuestion.answer + ". \nThe answer you gave: " + response);
    if (selectedQuestion.answer === response) {
        console.log("Correct!");
        return "Correct!"
    }
    else {
        console.log("WRONG!!!!");
        return "WRONG!!!!"
    }
}

function selectQuestion(row, index) {
    selectedQuestion = selectedGenre[row][index];
    console.log("The question is:\n" + selectedQuestion.q + "\n Choices are: \n" + selectedQuestion.choices);
    return selectedGenre[row][index]
}

function showQuestions(){

}

selectQuestion("row1", 0);
answerQuestion("False");
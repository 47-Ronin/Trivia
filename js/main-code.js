let cards = document.getElementById("cards");
let question = document.getElementById("question");

const starWars = {
    "row1": [{
        "number": 1,
        "q": "What is C-3PO's purpose?",
        "choices": ["A: Eliminate all life", "B: Human-cyborg relations", "C: Fight the sith", "D: Translation"],
        "answer": "B",
        "value": 100,
        "available": true
    }, {
        "number": 2,
        "q": "Who is the senate?",
        "choices": ["A: The Jedi", "B: The senators", "C: Palpatine", "D: "],
        "answer": "C",
        "value": 100,
        "available": true
    }, {
        "number": 3,
        "q": "The answer is either true or false",
        "choices": ["False", "True"],
        "answer": "False",
        "value": 100,
        "available": true
    }, {
        "number": 4,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 100,
        "available": true
    }, {
        "number": 5,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 100,
        "available": true
    }],
    "row2": [{
        "number": 1,
        "q": "The answer is d",
        "choices": ["A", "B", "C", "G"],
        "answer": "Z",
        "value": 200,
        "available": true
    }, {
        "number": 2,
        "q": "The anwser is !truen't",
        "choices": ["False", "True"],
        "answer": "True",
        "value": 200,
        "available": true
    }, {
        "number": 3,
        "q": "Bleh",
        "choices": ["False", "True"],
        "answer": "True",
        "value": 200,
        "available": true
    }, {
        "number": 4,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 200,
        "available": true
    }, {
        "number": 5,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 200,
        "available": true
    }],
    "row3": [{
        "number": 1,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 300,
        "available": true
    }, {
        "number": 2,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 300,
        "available": true
    }, {
        "number": 3,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 300,
        "available": true
    }, {
        "number": 4,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 300,
        "available": true
    }, {
        "number": 5,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 300,
        "available": true
    }],
    "row4": [{
        "number": 1,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 400,
        "available": true
    }, {
        "number": 2,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 400,
        "available": true
    }, {
        "number": 3,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 400,
        "available": true
    }, {
        "number": 4,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 400,
        "available": true
    }, {
        "number": 5,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 400,
        "available": true
    }],
    "row5": [{
        "number": 1,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 500,
        "available": true
    }, {
        "number": 2,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 500,
        "available": true
    }, {
        "number": 3,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 500,
        "available": true
    }, {
        "number": 4,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 500,
        "available": true
    }, {
        "number": 5,
        "q": "Insert Question",
        "choices": ["Option1", "Option2"],
        "answer": "Option1",
        "value": 500,
        "available": true
    }],
};
const programming = {
    "row1": [{
        "number": 1,
        "q": "What is CSS?",
        "choices": ["A: Cascading Style Sheets", "B: Language that adds interactivity", "C: HyperText Markup Language", "D: A library for webpages"],
        "answer": "A",
        "value": 100,
        "available": true
    }, {
        "number": 2,
        "q": "What is does <code><!DOCTYPE html></code> mean?",
        "choices": ["<em class='option-letter'>A</em> It means the document is a webpage", "<em class='option-letter'>B</em> It clarifies the version of HTML used", "C: It serves no purpose", "D: It tells your editor what HTML is"],
        "answer": "B",
        "value": 100,
        "available": true
    }, {
        "number": 3,
        "q": "A Boolean value is always either true or false",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "A",
        "value": 100,
        "available": true
    }, {
        "number": 4,
        "q": "jQuery is dead",
        "choices": ["<em class='option-letter'>A</em> Yes, it is no longer in use by modern companies", "<em class='option-letter'>B</em> jQuery is immortal"],
        "answer": "B",
        "value": 100,
        "available": true
    }, {
        "number": 5,
        "q": "The 'a' tag is short for 'Anchor'",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "A",
        "value": 100,
        "available": true
    }],
    "row2": [{
        "number" : 1,
        "q" : "JavaScript is a low-level language.",
        "choices" : ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer" : "B",
        "value" : 200,
        "available" : true
    }, {
        "number" : 2,
        "q" : "JavaScript calculations can be inaccurate when used with floats",
        "choices" : ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer" : "B",
        "value" : 200,
        "available" : true
    }, {
        "number" : 3,
        "q" : "Which loop will always iterate at least once?",
        "choices" : ["<em class='option-letter'>A</em> For", "<em class='option-letter'>B</em> Do","<em class='option-letter'>C</em> While","<em class='option-letter'>D</em> forEach"],
        "answer" : "B",
        "value" : 200,
        "available" : true
    }, {
        "number" : 4,
        "q" : "A function within an object is called a...?",
        "choices" : ["<em class='option-letter'>A</em> Function", "<em class='option-letter'>B</em> Property", "<em class='option-letter'>C</em> IIF", "<em class='option-letter'>D</em> Method"],
        "answer" : "Option1",
        "value" : 200,
        "available" : true
    }, {
        "number" : 5,
        "q" : "Null is the default value for an unassigned variable",
        "choices" : ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer" : "B",
        "value" : 200,
        "available" : true
    }],
    "row3": [{
        "number": 1,
        "q": "What does the following expression evaluate to?  ((true && false) || true) && (true !== 'true')",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "A",
        "value": 300,
        "available": true
    }, {
        "number": 2,
        "q": "Which of the following would produce a random number between one (1) and fifty (50)?",
        "choices": ["<em class='option-letter'>A</em> Math.floor(Math.random(1, 50))", "<em class='option-letter'>B</em> Math.floor(Math.random() * 1, 50)", "<em class='option-letter'>C</em> Math.floor(Math.random() * 50)", "<em class='option-letter'>D</em> Math.floor(Math.random(), 50)"],
        "answer": "C",
        "value": 300,
        "available": true
    }, {
        "number": 3,
        "q": "What is the ES6 version of Math.pow()?",
        "choices": ["<em class='option-letter'>A</em> ^", "<em class='option-letter'>B</em> ^*", "<em class='option-letter'>C</em> .e()", "<em class='option-letter'>D</em> **"],
        "answer": "D",
        "value": 300,
        "available": true
    }, {
        "number": 4,
        "q": "The following evaluates to TRUE: '0'",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "A",
        "value": 300,
        "available": true
    }, {
        "number": 5,
        "q": "The 'img' tag is a void element",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "A",
        "value": 300,
        "available": true
    }],
    "row4": [{
        "number": 1,
        "q": "What does IP stand for?",
        "choices": ["<em class='option-letter'>A</em> Internet Protocol", "<em class='option-letter'>B</em> Information Protocol", "<em class='option-letter'>C</em> Information Protection", "<em class='option-letter'>D</em> Internet Protection"],
        "answer": "Option1",
        "value": 400,
        "available": true
    }, {
        "number": 2,
        "q": "Which of the following is NOT a value that the 'type' attribute of an input tag can have?",
        "choices": ["<em class='option-letter'>A</em> Range", "<em class='option-letter'>B</em> Number", "<em class='option-letter'>C</em> Hidden", "<em class='option-letter'>D</em> Checked"],
        "answer": "D",
        "value": 400,
        "available": true
    }, {
        "number": 3,
        "q": "What does the 'meta' tag define?",
        "choices": ["<em class='option-letter'>A</em> Information about the user", "<em class='option-letter'>B</em> Information about the site", "<em class='option-letter'>C</em> User input within the site", "<em class='option-letter'>D</em> The aesthetic of the site"],
        "answer": "B",
        "value": 400,
        "available": true
    }, {
        "number": 4,
        "q": "Which HTML element is NOT a real element?",
        "choices": ["<em class='option-letter'>A</em> 'var'", "<em class='option-letter'>B</em> 'tfoot'", "<em class='option-letter'>C</em> 'item'", "<em class='option-letter'>D</em> 'section'"],
        "answer": "C",
        "value": 400,
        "available": true
    }, {
        "number": 5,
        "q": "The following expression evaluates to TRUE.  NaN == null",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "A",
        "value": 400,
        "available": true
    }],
    "row5": [{
        "number": 1,
        "q": "In some cases, null is not always a 'falsey' value.",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "B",
        "value": 500,
        "available": true
    }, {
        "number": 2,
        "q": "The answer is: !(true === !(false === 0 && false == 0) && !(false === 'false')) || !(!true)",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "A",
        "value": 500,
        "available": true
    }, {
        "number": 3,
        "q": "The following code would NOT produce a syntax error: var return = -44 + 30 + -2 * (9 - 9 * 9)",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "B",
        "value": 500,
        "available": true
    }, {
        "number": 4,
        "q": "What is the difference between setTimeout and setInterval?",
        "choices": ["<em class='option-letter'>A</em> SetTimeout executes the internal code after the delay while setInterval does it before", "<em class='option-letter'>B</em> SetInterval executes the internal code after the delay while setTimeout does it before", "<em class='option-letter'>C</em> SetTimeout executes the internal code after the delay while setInterval repeats the code after its delay", "<em class='option-letter'>D</em> SetTimeout is asynchronous while setInterval is not."],
        "answer": "C",
        "value": 500,
        "available": true
    }, {
        "number": 5,
        "q": "The answer is: !!((!!!False && !!True) || !!!True) && !!!True",
        "choices": ["<em class='option-letter'>A</em> True", "<em class='option-letter'>B</em> False"],
        "answer": "B",
        "value": 500,
        "available": true
    }],
};
const nerdy = {
    "row1": [{
        "number": 1,
        "q": "The Punisher is a fictional character appearing in comic books published by which company?",
        "choices": ["A: DC", "B: Mattel", "C: Marvel", "D: Dark Horse Comics"],
        "answer": "C",
        "value": 100,
        "available": true
    }, {
        "number": 2,
        "q": "SNES is the acronym for what popular gaming console released in the early 1990s?",
        "choices": ["A: Supreme Nintendo Extreme System", "B: SNES is not an acronym", "C: Super Nintendo Entertainment System", "D: Syndicat National l'Ensignment Secondaire"],
        "answer": "C",
        "value": 100,
        "available": true

    }, {
        "number": 3,
        "q": "In the movie The Terminator, what is the name of the company that created Skynet?",
        "choices": ["A: Veridian Dynamics", "B: IntellArms Systems", "C: Cyber Security Solutions (CSS)", "D: Cyberdyne Systems"],
        "answer": "D",
        "value": 100,
        "available": true


    }, {
        "number": 4,
        "q": "What is the secret identity of the fictional, superhero Batman?",
        "choices": ["A: Bruce Wayne", "B: Bruce Banner", "C: Post Malone", "D: I am Batman"],
        "answer": "A",
        "value": 100,
        "available": true


    }, {
        "number": 5,
        "q": "What is the name of the American animated sci-fi sitcom about the misadventures of a mad scientist and his grandson?",
        "choices": ["A: Mork & Mindy", "B: Doc & Marty", "C: Rick & Morty", "D: Batman & Robin"],
        "answer": "C",
        "value": 100,
        "available": true


    }],
    "row2": [{
        "number": 1,
        "q": "In 1975 an engineer created the first electronic camera while working for what company?",
        "choices": ["A: Nikon ", "B: Polaroid", "C: NASA", "D: Cyberdyne Systems"],
        "answer": "A",
        "value": 200,
        "available": true


    }, {
        "number": 2,
        "q": "'Torchwood' is an anagram and spin-off of what popular British sci-fi series?",
        "choices": ["A: Crowd Hoot ", "B: Cow Hotrod", "C: Doctor Who", "D: Cohort Dow"],
        "answer": "C",
        "value": 200,
        "available": true


    }, {
        "number": 3,
        "q": "Star Trek: The Next Generation originally aired in what year?",
        "choices": ["A: 1987 ", "B: 1989", "C: Stardate 47457.1", "D: 1984"],
        "answer": "A",
        "value": 200,
        "available": true


    }, {
        "number": 4,
        "q": "What is the unit of length that is approximately 3.26 light-years?",
        "choices": ["A: Furlong ", "B: parseInt", "C: Lightyear", "D: Parsec"],
        "answer": "D",
        "value": 200,
        "available": true


    }, {
        "number": 5,
        "q": "Each of a classic Rubik’s Cube six faces is covered by how many stickers?",
        "choices": ["A: 54 ", "B: 81 ", "C: 9 ", "D: They're stickers!?"],
        "answer": "C",
        "value": 200,
        "available": true


    }],
    "row3": [{
        "number": 1,
        "q": "1,024 Gigabytes is equal to one what?",
        "choices": ["A: a A Megabyte ", "B: An Ultrabyte", "C: A Terabyte", "D: A Kilobyte"],
        "answer": "C",
        "value": 300,
        "available": true


    }, {
        "number": 2,
        "q": "One kilobyte is equal to how many bytes?",
        "choices": ["A: 1024 ", "B: 256 ", "C: 64 ", "D: 32 "],
        "answer": "A",
        "value": 300,
        "available": true


    }, {
        "number": 3,
        "q": "This planet, in our solar system, rotates clockwise...",
        "choices": ["A: Venus  ", "B: Neptune", "C: Earth", "D: Pluto"],
        "answer": "A",
        "value": 300,
        "available": true


    }, {
        "number": 4,
        "q": "What is name of the world’s largest and most powerful particle accelerator?",
        "choices": ["A: Higgs Boson Cannon ", "B: Large Hadron Collider ", "C: Gamma Radiation Focus Array", "D: Sonic Centrifugal Displacement Converter "],
        "answer": "B",
        "value": 300,
        "available": true


    }, {
        "number": 5,
        "q": "The largest volcano ever discovered in our solar system is located on which planet?",
        "choices": ["A: Mars ", "B: Earth ", "C: Venus ", "D: The Sun "],
        "answer": "A",
        "value": 300,
        "available": true


    }],
    "row4": [{
        "number": 1,
        "q": "What is the name given to an ancient analog computer that was discovered by divers off a Greek island in 1900?",
        "choices": ["A: Solomon's Abacus ", "B: Sony Vaio", "C: the Ikea Mechanica ", "D: Antikythera Mechanism"],
        "answer": "D",
        "value": 400,
        "available": true


    }, {
        "number": 2,
        "q": "What Harvard dropout co-founded Microsoft?",
        "choices": ["A: Marlon Branddo ", "B: Bob Windows", "C: Bill Gates ", "D: Barry Doors"],
        "answer": "C",
        "value": 400,
        "available": true


    }, {
        "number": 3,
        "q": "What is the most abundant element in the earth’s atmosphere?",
        "choices": ["A: Carbon ", "B: Nitrogen", "C: Carbon Dioxide", "D: Oxygen"],
        "answer": "B",
        "value": 400,
        "available": true


    }, {
        "number": 4,
        "q": "What was the name of the first electronic general-purpose computer?",
        "choices": ["A: ENIAC ", "B: Ernie ", "C: HP-dewlett", "D: ONARD"],
        "answer": "A",
        "value": 400,
        "available": true


    }, {
        "number": 5,
        "q": "Bruce Willis played a convict turned time traveler in what 1995 movie?",
        "choices": ["A: Monkey Bone ", "B: A Dozen Monkeys ", "C: 12 Monkeys", "D: Lock, Stock, and Two Smoking Monkeys"],
        "answer": "C",
        "value": 400,
        "available": true


    }],
    "row5": [{
        "number": 1,
        "q": "What does HTTP stand for in a website address?",
        "choices": ["A: Hip To Try Pistachios ", "B: HyperText Transition Procedure", "C: HyperText Transfer Protocol ", "D: HyperText Terminal Process"],
        "answer": "C",
        "value": 500,
        "available": true


    }, {
        "number": 2,
        "q": "A modulator-demodulator is a hardware device better known as what?",
        "choices": ["A: Router ", "B: Modem ", "C: Codec", "D: Motherboard"],
        "answer": "B",
        "value": 500,
        "available": true


    }, {
        "number": 3,
        "q": "The malleus, incus and stapes are found in what part of the human body?",
        "choices": ["A: Hand ", "B: Foot ", "C: Ear ", "D: Nose "],
        "answer": "C",
        "value": 500,
        "available": true


    }, {
        "number": 4,
        "q": "Ganymede, the largest moon in our solar system, belongs to which planet?",
        "choices": ["A: Jupiter ", "B: Uranus ", "C: Neptune ", "D: Saturn"],
        "answer": "A",
        "value": 500,
        "available": true


    }, {
        "number": 5,
        "q": "Orson Welles provided the voice for which Transformer in “The Transformers: The Movie” released in 1986?",
        "choices": ["A: Optimus Prime ", "B: Unicron ", "C: Megatron", "D: Ironhide "],
        "answer": "B",
        "value": 500,
        "available": true


    }]
};

let selectedGenre = programming;

let answeredQuestions = [];
let selectedQuestion = {};
const gameplayD = {
    scoreLimit: 600,
    team1: {
        name: "",
        score: 0
    },
    team2: {
        name: "",
        score: 0
    },
    turn: "team1",
    switchTurn: function () {
        if (this.turn === "team1") {
            this.turn = "team2";
        } else if (this.turn === "team2") {
            this.turn = "team1";
        }
    },
    answerQuestion: function (response) {
        question.style.display = "none";
        if (selectedQuestion.answer === response) {
            this[this.turn].score += selectedQuestion.value;
            if (this[this.turn].score >= this.scoreLimit) {
                console.log("Working");
                alert(this.turn + " wins!!!");
                return "Game Over!"
            }
            this.switchTurn();
            return "Correct!"
        } else {
            return "Incorrect!"
        }
    },
    selectQuestion: function (row, index) {
        if (selectedGenre[row][index].available) {
            selectedQuestion = selectedGenre[row][index];
            selectedGenre[row][index].available = false;


            //REPLACE WITH MODAL
            question.innerHTML = `<p>${selectedQuestion.q}</p><br><p>${selectedQuestion.choices.join("<br>")}</p>`;
            // question.style.display = "flex";


            console.log("The question is:\n" + selectedQuestion.q + "\n Choices are: \n" + selectedQuestion.choices.join("\n"));
            selectedQuestion = {};
        }
        else {
            //If question is NOT available

            console.log("Unavailable");
        }
    }
};

let gameplay;

function init(){
    selectedGenre = programming;
    answeredQuestions = [];
    selectedQuestion = {};
    gameplay = gameplayD;
}

init();

//SELECT FUNCTION

// function selectQuestion(row, index) {
//     if (selectedGenre[row][index].available) {
//         selectedQuestion = selectedGenre[row][index];
//         selectedQuestion.available = false;
//         question.innerHTML = `<p>${selectedQuestion.q}</p><br><p>${selectedQuestion.choices.join("<br>")}</p>`;
//         question.style.display = "flex";
//         console.log("The question is:\n" + selectedQuestion.q + "\n Choices are: \n" + selectedQuestion.choices.join("\n"));
//         return selectedGenre[row][index]
//     } else {
//         console.log("Question is not available");
//         //If unavailable
//         return {}
//     }
// }

let num = 0;
function makeCard(item, row){
    const uniqueID = `${row}-${num}`;
    //NOT IMPORTANT
    // cards.innerHTML += `<div class='card' id="${uniqueID}"><p>Question No.${item.number}</p></div>`;

    let content = "";
    content += `<div class="card text-white  mb-3" style="max-width: 18rem;">`;
    content += `<div class="card-header bg-success">Question No.${item.number}</div>`;
    content += `<div class="card-body">`;
    content += `<h5 class="card-title">${item.q}</h5>`;
    content += `<p class="card-text">
                    <!--answer 1---------------------------------------------->
                    <div class="custom-control custom-radio">
                        <input type="radio" id="A${uniqueID}" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="A${uniqueID}">${item.choices[0]}</label>
                    </div>
                    <!--answer 2---------------------------------------------->
                    <div class="custom-control custom-radio">
                        <input type="radio" id="B${uniqueID}" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="B${uniqueID}">${item.choices[1]}</label>
                    </div>`;
    if (item.choices.length > 2) {
        content += `
                    <!--answer 3 --------------------------------------------->
                    <div class="custom-control custom-radio">
                        <input type="radio" id="C${uniqueID}" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="C${uniqueID}">${item.choices[2]}</label>
                    </div>
                    <!--answer 4---------------------------------------------->
                    <div class="custom-control custom-radio">
                        <input type="radio" id="D${uniqueID}" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="D${uniqueID}">${item.choices[3]}</label>
                    </div> </p>`;
    }
    content += `</div>`;
    $("#cards").append(content);

    //IMPORTANT
    num++;
}



function makeModal(item, row) {
    const uniqueID = `${row}-${num}`;

    let currentModal = "";
    currentModal +=
        <!-- Modal -->
        `<div class="modal fade" id="modal${uniqueID}" tabindex="-1" role="dialog" aria-labelledby="modal${uniqueID}" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Question No.${uniqueID}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
            <div id="questionCard" >
            <!--    the Question ------------------------------------------->
        <div id="questionHolder">
            <h4> ${item.q}</h4>
            </div>
            <!--answer 1------------------------------------------->
        <div class="custom-control custom-radio">
            <input type="radio" id="A${uniqueID}" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="A${uniqueID}">${item.choices[0]}</label>
            </div>
            <!--answer 2---------------------------------------------->
        <div class="custom-control custom-radio">
            <input type="radio" id="B${uniqueID}" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="B${uniqueID}">${item.choices[1]}</label>
            </div>
            <!--   answer 3 ------------------------------------------->`;
    if (item.choices.length >= 2) {
        currentModal += `<div class="custom-control custom-radio">
            <input type="radio" id="C${uniqueID}" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="C${uniqueID}">${item.choices[2]}</label>
            </div>
            <!--    answer 4------------------------------------------->
            <div class="custom-control custom-radio">
                <input type="radio" id="D${uniqueID}" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="D${uniqueID}">${item.choices[3]}</label>
            </div>
            </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-primary">Submit</button>
            </div>
            </div>
            </div>
            </div>`;
    }
    $("#selectedQuestionModal").html(currentModal);
    num++
};

function showQuestions(){
    num = 0;
    selectedGenre.row1.forEach(function (item) {
        makeCard(item, 1)
    });
    num = 0;
    selectedGenre.row2.forEach(function (item) {
        makeCard(item, 2)
    });
    num = 0;
    selectedGenre.row3.forEach(function (item) {
        makeCard(item, 3)
    });
    num = 0;
    selectedGenre.row4.forEach(function (item) {
        makeCard(item, 4)
    });
    num = 0;
    selectedGenre.row5.forEach(function (item) {
        makeCard(item, 5)
    });
}
showQuestions();
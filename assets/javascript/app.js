//onload function displays a play button, which calls question 1 from the game object
window.onload = function() {
    $('#display').html(
        '<h1 id="gTitle">Classical Music Trivia</h1>' +
        '<span id="play">play</span>')
    $('#play').click(game.start);

}

//****global variables

//the variable clockRunning is a flag that will prevent the clock from being sped up unnecessarily
var clockRunning = false;
//the counter will be declared as a setInterval that will be used to call functions every second for a period of time.
var counter;
//correct, incorrect and unanswered will be updated every time a user answers or skips a question. At the end of the game it 
//will be displayed on the results menu.
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var question;
var a;
var b;
var c;
var d;
var userGuess;
var unansweredB = false;
//the Mplay variable is a flag that will prevent music from playing when false.  
var Mplay = false;
//these audio files will play in conjunction with the questions they are associated with.
var audio1 = new Audio("assets/music/rite.mp3");
var audio2 = new Audio("assets/music/magic.mp3");
var audio3 = new Audio("assets/music/moonlight.mp3");
var audio4 = new Audio("assets/music/goldberg.mp3");
var audio5 = new Audio("assets/music/lullaby.mp3");





//******this is the game object, which controls the timer, the trivia questions and the results.


var game = {
    //players will have 20 seconds to answer the question
    time: 20,
    //the answer screen will display for 3 seconds
    aTime: 3,

    //this function starts the clock by switching the clock running flag to true and calls the Q1 function every second.
    start: function() {
        if (!clockRunning) {
            clockRunning = true;
            counter = setInterval(game.Q1, 1000);
        }

    },




    //this function subtracts game.time by one (20 times) every time it is called and displays the current game.time in the UI.
    //it also plays audio1, asks the first multiple choice question, and links the question, asnwers/non-answer and timer to the results.
    //it then calls answer1 every second.
    Q1: function() {
        //this decrements game.time by 1 every second
        game.time--;
        audio1.play();

        //when the question is answered, the userGuess is either recorded as true or false, the music stops,
        //the stop function is called, and answer 1 is called every second.

        $('#display').on("click", "#a", function() {
            game.stop();
            userGuess = true;
            counter = setInterval(game.answer1, 1000);
            audio1.pause();
        });

        $('#display').on("click", "#b", function() {
            game.stop();
            userGuess = false;
            counter = setInterval(game.answer1, 1000);
            audio1.pause();
        });

        $('#display').on("click", "#c", function() {
            game.stop();
            userGuess = false;
            counter = setInterval(game.answer1, 1000);
            audio1.pause();
        });

        $('#display').on("click", "#d", function() {
            game.stop();
            userGuess = false;
            counter = setInterval(game.answer1, 1000);
            audio1.pause();
        });

        //if the timer hits 0, the audio is stopped, unansweredB is set to true,
        //the stop function is called, and answer 1 is called every second.
        if (game.time === 0) {
            game.stop();
            userGuess;
            unansweredB = true;
            counter = setInterval(game.answer1, 1000);
            audio1.pause();
        } else {
            unansweredB = false;
        }



        //this is printing out in the user interface. 
        question = "Who wrote the Rite of Spring?"
        a = "Stravinsky";
        b = "Bach";
        c = "Mozart";
        d = "Brahms";
        game.interface();
    },




    //this function displays the correct answer for question one and stores the userGuess as either correct, incorrect, or unanswered. 
    answer1: function() {


        //this decrements game.aTime by 1 every second
        game.aTime--;

        //if the user does not answer the question, give the correct answer/ picture of the composer.
        if (unansweredB === true) {
            var answer =
                "<h1 class='answer'>" + "Igor Stravinsky wrote the Rite of Spring" + "</h1>" + "<br/>" +
                "<img src='assets/images/stravinsky.jpg' class='cImage'/>"

            $('#display').html(answer);
        } else

            //if the user guesses the correct answer display the word "correct" and a picture of the composer.
            if (userGuess === true) {
                var answer =
                    "<h1 class='answer'>" + "Correct, Igor Stravinsky wrote the Rite of Spring" + "</h1>" + "<br/>" +
                    "<img src='assets/images/stravinsky.jpg' class='cImage'/>"

                $('#display').html(answer);
            } else
                //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
                if (userGuess === false) {
                    var answer =
                        "<h1 class='answer'>" + "Wrong, Igor Stravinsky wrote the Rite of Spring" + "</h1>" + "<br/>" +
                        "<img src='assets/images/stravinsky.jpg' class='cImage'/>"

                    $('#display').html(answer);
                }



        //the results record when aTime===0, so that they are not called multiple times for each answer.
        if ((game.aTime === 0) && (unansweredB === true)) {
            unanswered++;
            console.log("unanswered");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q2, 1000);
        } else

        if ((game.aTime === 0) && (userGuess === true)) {
            correct++;
            console.log("correct");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q2, 1000);
        } else

        if ((game.aTime === 0) && (userGuess === false)) {

            incorrect++;
            console.log("incorrect");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q2, 1000);
        }


    },










    //this function subtracts game.time by one (20 times) every time it is called and displays the current game.time in the UI.
    //it also plays audio2, asks the second multiple choice question, and links the question, asnwers/non-answer and timer to the results.
    //it then calls answer2 every second.
    Q2: function() {
        //this decrements game.time by 1 every second
        game.time--;
        audio2.play();


        //when the question is answered, the userGuess is either recorded as true or false, the music stops,
        //the stop function is called, and answer 2 is called every second.
        $('#display').on("click", "#a", function() {
            game.stop();
            userGuess = false;
            counter = setInterval(game.answer2, 1000);
            audio2.pause();
        });

        $('#display').on("click", "#b", function() {
            game.stop();
            userGuess = false;
            counter = setInterval(game.answer2, 1000);
            audio2.pause();
        });

        $('#display').on("click", "#c", function() {
            game.stop();
            userGuess = true;
            counter = setInterval(game.answer2, 1000);
            audio2.pause();
        });

        $('#display').on("click", "#d", function() {
            game.stop();
            userGuess = false;
            counter = setInterval(game.answer2, 1000);
            audio2.pause();
        });

        //if the timer hits 0, the audio is stopped, unansweredB is set to true,
        //the stop function is called, and answer 2 is called every second.
        if (game.time === 0) {
            game.stop();
            userGuess;
            unansweredB = true;
            counter = setInterval(game.answer2, 1000);
            audio2.pause();
        } else {
            unansweredB = false;
        }


        //this is printing out in the user interface. 
        question = "Who wrote the Magic Flute?"
        a = "Haydn";
        b = "Bach";
        c = "Mozart";
        d = "Ligeti";
        game.interface();

    },


    answer2: function() {

        //game.aTime is subtracted by one every time it is called.
        game.aTime--;


        //if the user does not answer the question, give the correct answer/ picture of the composer.
        if (unansweredB === true) {
            var answer =
                "<h1 class='answer'>" + "Mozart wrote the Magic Flute" + "</h1>" + "<br/>" +
                "<img src='assets/images/mozart.jpg' class='cImage'/>"

            $('#display').html(answer);
        } else

            //if the user guesses the correct answer display the word "correct" and a picture of the composer.
            if (userGuess === true) {
                var answer =
                    "<h1 class='answer'>" + "Correct, Mozart wrote the Magic Flute" + "</h1>" + "<br/>" +
                    "<img src='assets/images/mozart.jpg' class='cImage'/>"

                $('#display').html(answer);
            } else
                //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
                if (userGuess === false) {
                    var answer =
                        "<h1 class='answer'>" + "Wrong, Mozart wrote the Magic Flute" + "</h1>" + "<br/>" +
                        "<img src='assets/images/mozart.jpg' class='cImage'/>"

                    $('#display').html(answer);
                }



        //the results record when aTime===0, so that they are not called multiple times for each answer.
        if ((game.aTime === 0) && (unansweredB === true)) {
            unanswered++;
            console.log("unanswered");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q3, 1000);
        } else


        if ((game.aTime === 0) && (userGuess === true)) {
            correct++;
            console.log("correct");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q3, 1000);
        } else

        if ((game.aTime === 0) && (userGuess === false)) {
            incorrect++;
            console.log("incorrect");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q3, 1000);
        }


    },










    //this function subtracts game.time by one (20 times) every time it is called and displays the current game.time in the UI.
    //it also plays audio3, asks the third multiple choice question, and links the question, asnwers/non-answer and timer to the results.
    //it then calls answer2 every second.

    Q3: function() {
        //this decrements game.time by 1 every second
        game.time--;
        audio3.play();


        //when the question is answered, the userGuess is either recorded as true or false, the music stops,
        //the stop function is called, and answer 3 is called every second.
        $('#display').on("click", "#a", function() {
            game.stop();
            userGuess = false;
            counter = setInterval(game.answer3, 1000);
            audio3.pause();
        });

        $('#display').on("click", "#b", function() {
            game.stop();
            userGuess = true;
            counter = setInterval(game.answer3, 1000);
            audio3.pause();
        });

        $('#display').on("click", "#c", function() {
            game.stop();
            userGuess = false;
            counter = setInterval(game.answer3, 1000);
            audio3.pause();
        });

        $('#display').on("click", "#d", function() {
            game.stop();
            userGuess = false;
            counter = setInterval(game.answer3, 1000);
            audio3.pause();
        });

        //if the timer hits 0, the audio is stopped, unansweredB is set to true,
        //the stop function is called, and answer 3 is called every second.
        if (game.time === 0) {
            game.stop();
            userGuess;
            unansweredB = true;
            counter = setInterval(game.answer3, 1000);
            audio3.pause();
        } else {
            unansweredB = false;
        }


        //this is printing out on the user interface. 
        question = "Who wrote the Moonlight Sonata?"
        a = "Handel";
        b = "Beethoven";
        c = "Bach";
        d = "Bartok";
        game.interface();

    },


    answer3: function() {

        //game.aTime is subtracted by one every time it is called. 
        game.aTime--;

        //if the user does not answer the question, give the correct answer/ picture of the composer.
        if (unansweredB === true) {
            var answer =
                "<h1 class='answer'>" + "Beethoven wrote the Moonlight Sonata" + "</h1>" + "<br/>" +
                "<img src='assets/images/beethoven.jpg' class='cImage'/>"

            $('#display').html(answer);
        } else
            //if the user guesses the correct answer display the word "correct" and a picture of the composer.
            if (userGuess === true) {
                var answer =
                    "<h1 class='answer'>" + "Correct, Beethoven wrote the Moonlight Sonata" + "</h1>" + "<br/>" +
                    "<img src='assets/images/beethoven.jpg' class='cImage'/>"

                $('#display').html(answer);

            } else
                //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
                if (userGuess === false) {
                    var answer =
                        "<h1 class='answer'>" + "Wrong, Beethoven wrote the Moonlight Sonata" + "</h1>" + "<br/>" +
                        "<img src='assets/images/beethoven.jpg' class='cImage'/>"

                    $('#display').html(answer);
                }





        //the results record when aTime===0, so that they are not called multiple times for each answer.
        if ((game.aTime === 0) && (unansweredB === true)) {
            unanswered++;
            console.log("unanswered");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q4, 1000);
        } else


        if ((game.aTime === 0) && (userGuess === true)) {
            correct++;
            console.log("correct");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q4, 1000);

        } else

        if ((game.aTime === 0) && (userGuess === false)) {
            incorrect++;
            console.log("incorrect");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q4, 1000);

        }

    },







    //this function subtracts game.time by one (20 times) every time it is called and displays the current game.time in the UI.
    //it also plays audio4, asks the fourth multiple choice question, and links the question, asnwers/non-answer and timer to the results.
    //it then calls answer4 every second.

    Q4: function() {
        //this decrements game.time by 1 every second
        game.time--;
        audio4.play();

        //when the question is answered, the userGuess is either recorded as true or false, the music stops,
        //the stop function is called, and answer 3 is called every second.

        $('#display').on("click", "#a", function() {
            userGuess = false;
            game.stop();
            counter = setInterval(game.answer4, 1000);
            audio4.pause();
        });

        $('#display').on("click", "#b", function() {
            userGuess = false;
            game.stop();
            counter = setInterval(game.answer4, 1000);
            audio4.pause();
        });

        $('#display').on("click", "#c", function() {
            userGuess = false;
            game.stop();
            counter = setInterval(game.answer4, 1000);
            audio4.pause();
        });

        $('#display').on("click", "#d", function() {
            userGuess = true;
            game.stop();
            counter = setInterval(game.answer4, 1000);
            audio4.pause();
        });

        //if the timer hits 0, the audio is stopped, unansweredB is set to true,
        //the stop function is called, and answer 4 is called every second.
        if (game.time === 0) {
            game.stop();
            userGuess;
            unansweredB = true;
            counter = setInterval(game.answer4, 1000);
            audio4.pause();
        } else {
            unansweredB = false;
        }


        //this is printing out on the user interface. 
        question = "Who wrote the Goldberg Varitations?"
        a = "Purcell";
        b = "Haydn";
        c = "Handel";
        d = "Bach";
        game.interface();

    },


    answer4: function() {

        //game.aTime is subtracted by one every time it is called. 
        game.aTime--;

        //if the user does not answer the question, give the correct answer/ picture of the composer.
        if (unansweredB === true) {
            var answer =
                "<h1 class='answer'>" + "Bach wrote the Goldberg Variations" + "</h1>" + "<br/>" +
                "<img src='assets/images/bach.jpg' class='cImage'/>"

            $('#display').html(answer);
        } else
            //if the user guesses the correct answer display the word "correct" and a picture of the composer.
            if (userGuess === true) {
                var answer =
                    "<h1 class='answer' >" + "Correct, Bach wrote the Goldberg Variations" + "</h1>" + "<br/>" +
                    "<img src='assets/images/bach.jpg' class='cImage'/>"

                $('#display').html(answer);

            } else
                //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
                if (userGuess === false) {
                    var answer =
                        "<h1 class='answer'>" + "Wrong, Bach wrote the Goldberg Variations" + "</h1>" + "<br/>" +
                        "<img src='assets/images/bach.jpg' class='cImage'/>"

                    $('#display').html(answer);
                }


        //the results record when aTime===0, so that they are not called multiple times for each answer.
        if ((game.aTime === 0) && (unansweredB === true)) {
            unanswered++;
            console.log("unanswered");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q5, 1000);
        } else


        if ((game.aTime === 0) && (userGuess === true)) {
            correct++;
            console.log("correct");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q5, 1000);

        } else

        if ((game.aTime === 0) && (userGuess === false)) {
            incorrect++;
            console.log("incorrect");
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q5, 1000);

        }

    },







    //this function subtracts game.time by one (20 times) every time it is called and displays the current game.time in the UI.
    //it also plays audio5, asks the fifth multiple choice question, and links the question, asnwers/non-answer and timer to the results.
    //it then calls answer5 every second.

    Q5: function() {
        //this decrements game.time by 1 every second
        game.time--;
        audio5.play();

        //when the question is answered, the userGuess is either recorded as true or false, the music stops,
        //the stop function is called, and answer 3 is called every second.
        $('#display').on("click", "#a", function() {
            userGuess = false;
            game.stop();
            counter = setInterval(game.answer5, 1000);
            audio5.pause();
        });

        $('#display').on("click", "#b", function() {
            userGuess = false;
            game.stop();
            counter = setInterval(game.answer5, 1000);
            audio5.pause();
        });

        $('#display').on("click", "#c", function() {
            userGuess = true;
            game.stop();
            counter = setInterval(game.answer5, 1000);
            audio5.pause();
        });

        $('#display').on("click", "#d", function() {
            userGuess = false;
            game.stop();
            counter = setInterval(game.answer5, 1000);
            audio5.pause();
        });

        //if the timer hits 0, the audio is stopped, unansweredB is set to true,
        //the stop function is called, and answer 5 is called every second.
        if (game.time === 0) {
            game.stop();
            userGuess;
            unansweredB = true;
            counter = setInterval(game.answer5, 1000);
            audio5.pause();
        } else {
            unansweredB = false;
        }


        //this is printing out on the user interface. 
        question = "Who wrote the German Wiegenlied: Guten Abend, gute Nacht?"
        a = "Handel";
        b = "Beethoven";
        c = "Brahms";
        d = "Bartok";
        game.interface();

    },


    answer5: function() {

        //game.aTime is subtracted by one every time it is called. 
        game.aTime--;

        //if the user does not answer the question, give the correct answer/ picture of the composer.
        if (unansweredB === true) {
            var answer =
                "<h1 class='answer'>" + "Brahms wrote Wiegenlied: Guten Abend, gute Nacht" + "</h1>" + "<br/>" +
                "<img src='assets/images/brahms.jpg' class='cImage'/>"

            $('#display').html(answer);

        } else
            //if the user guesses the correct answer display the word "correct" and a picture of the composer.
            if (userGuess === true) {
                var answer =
                    "<h1 class='answer'>" + "Correct, Brahms wrote Wiegenlied: Guten Abend, gute Nacht" + "</h1>" + "<br/>" +
                    "<img src='assets/images/brahms.jpg' class='cImage'/>"

                $('#display').html(answer);

            } else
                //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
                if (userGuess === false) {
                    var answer =
                        "<h1 class='answer'>" + "Wrong, Brahms wrote Wiegenlied: Guten Abend, gute Nacht" + "</h1>" + "<br/>" +
                        "<img src='assets/images/brahms.jpg' class='cImage'/>"

                    $('#display').html(answer);
                }


        //the results record when aTime===0, so that they are not called multiple times for each answer.
        if ((game.aTime === 0) && (unansweredB === true)) {
            unanswered++;
            console.log("unanswered");
            game.stop();
            game.timeReset();
            game.result();
        } else

        if ((game.aTime === 0) && (userGuess === true)) {
            correct++;
            console.log("correct");
            game.stop();
            game.timeReset();
            game.result();

        } else

        if ((game.aTime === 0) && (userGuess === false)) {
            incorrect++;
            console.log("incorrect");
            game.stop();
            game.timeReset();
            game.result();
        }

    },











    //this function is the userInterface that displays when the user is answering questions.
    interface: function() {


        var html =
            "<h1 class = 'question'>" + question + "</h1>" +
            "<div id = 'a' class = 'button'>" + a + "</div>" +
            "<div id = 'b' class = 'button'>" + b + "</div>" +
            "<div id = 'c' class = 'button'>" + c + "</div>" +
            "<div id = 'd' class = 'button'>" + d + "</div>" +
            "<h1 class = 'clock'>" + game.time + "</h1>"

        $('#display').html(html);
    },

    //this function displays the user's results when the game is over and gives them the option to play again.
    result: function() {
        var end =
            "<h1 id='correct'>" + "Correct:" + correct + "</h1>" +
            "<h1 id='incorrect'>" + "Incorrect:" + incorrect + "</h1>" +
            "<h1 id='unanswered'>" + "Unaswered:" + unanswered + "</h1>" +
            "<div id='resetGame'>" + "Play Again" + "</div>"

        $('#display').html(end);


        //when the user hits the button that says play again, the result menu is reset, 
        //and the audio files are started set to start from the beginning.
        $('#display').on("click", '#resetGame', function() {

            game.start();
            correct = 0;
            incorrect = 0;
            unanswered = 0;
            audio1.currentTime = 0;
            audio2.currentTime = 0;
            audio3.currentTime = 0;
            audio4.currentTime = 0;
            audio5.currentTime = 0;

        });
    },

    //this function stops the timer and sets the clockRunning flag to false.
    stop: function() {
        clearInterval(counter);
        clockRunning = false;
    },

    //this function resets the two timers.
    timeReset: function() {
        game.time = 20;
        game.aTime = 3;
    },




}












//create game object that includes functions for StartTimer, decrement, reset, and questions
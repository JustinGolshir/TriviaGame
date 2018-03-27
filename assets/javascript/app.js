
    $('#start').on('click', function () {
        game.start();
    })
   
    var questions = [{
        question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        choices: ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne"],
        correctAnswer: "John and Mary"
    }, {
        question: "When did the Liberty Bell get its name?",
        choices: ["when it was made, in 1701", "when it rang on July 4, 1776", "in the 19th century, when it became a symbol of the abolition of slavery", "none of the above"],
        correctAnswer: "in the 19th century, when it became a symbol of the abolition of slavery"
    }, {
        question: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
        choices: ["Buttermilk", "Daisy", "Scout", "Tulip"],
        correctAnswer: "Buttermilk"
    }, {
        question: "The Daniel Boon museum at the home where he died can best be described how?",
        choices: ["a log cabin in Kentucky", "a two-story clapboard house in Tennessee", "a four-story Georgian-style home in Missouri", "a three story brick house in Arkansas"],
        correctAnswer: "a four-story Georgian-style home in Missouri"
    }, {
        question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
        choices: ["home computer", "compact disk player", "cordless phone", "dishwasher"],
        correctAnswer: "compact disk player"
    }, {
        question: "Who holds the record for the most victories in a row on the professional golf tour?",
        choices: ["Jack Nicklaus", "Arnold Palmer", "Byron Nelson", "Ben Hogan"],
        correctAnswer: "Byron Nelson"
    }, {
        question: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
        choices: ["Reggie Jackson", "Harmon Killebrew", "Willie Mays", "Frank Robinson"],
        correctAnswer: "Willie Mays"
    }, {
        question: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
        choices: ["8", "18", "38", "58"],
        correctAnswer: "18"
}];

var game = {
    correct: 0,
    incorrect: 0, 
    counter: 5, 
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Game over!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0;i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
            for(var j=0;j<questions[i].choices.length;j++) {
                $('#subwrapper').append("<input type='radio' name='question-" +i+ "' value='" +questions[i].choices[j]+"'>" +questions[i].choices[j])
            }
        }
    },
    done: function(){
        $.each($('input[name="question-0]":checked'), function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'), function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]":checked'), function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4]":checked'), function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5]":checked'), function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6]":checked'), function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7]":checked'), function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });

        this.result();
        },

        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html("<h2>All done!</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }
    }
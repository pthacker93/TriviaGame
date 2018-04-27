var allQuestions = [{
    question: "Before Mt. Everest was discovered, whaich mountain was considered to be the highest mountain in the world?",
    choices: ["Mt. Kilimanjaro", "Kanchenjunga", "Mount Everest"],
    correctAnswer: 1
  },

  {
    question: "Does England have a 4th of July?",
    choices: ["Yes", "No", "I don't know"],
    correctAnswer: 0
  },

  {
    question: "What is Rupert the bear's middle name?",
    choices: ["Bear", "He doesn't have one!", "The", "Rupert"],
    correctAnswer: 2
  },

  {
    question: " What can you never eat for breakfast? ",
    choices: ["Dinner", "Something sugary", "Lunch", "Supper"],
    correctAnswer: 0
  },

  {
    question: "If there are three apples and you took two away, how many do you have?",
    choices: ["One", "Two", "None"],
    correctAnswer: 1
  },

  {
    question: "Spell 'Silk' out loud, 3 times in a row. What do cows drink?",
    choices: ["Milk", "Water", "Juice", "Cows can't drink"],
    correctAnswer: 1
  },

  {
    question: "Which is heavier, 100 pounds of rocks or 100 pounds of gold? ",
    choices: ["100 pounds of rocks", "100 pounds of rocks", "They weigh the same"],
    correctAnswer: 2
  },

  {
    question: "Can you spell 80 in two letters?",
    choices: ["AI-TY", "It's not possible", "EIGH-TY", "A-T"],
    correctAnswer: 3
  },

  {
    question: "What question must always be answered ''Yes''?",
    choices: ["What does Y-E-S spell?", "Will everyone die someday?", "Does everyone have a biological mother?", "Are you a human?"],
    correctAnswer: 0
  },

  {
    question: "How many sides does a circle have?",
    choices: ["The back", "None. It's a circle", "Two", "Four"],
    correctAnswer: 2
  },

  {
    question: "What has a tail but no body?",
    choices: ["A human", "A coin", "A cloud"],
    correctAnswer: 1
  },

  {
    question: "What word in the English language is always spelled incorrectly?",
    choices: ["It's possible to spell anything right as long as you learn it", "Shakespeare", "Onomatopoeia", "Incorrectly"],
    correctAnswer: 3
  },

  {
    question: "When do you stop at green and go at red?",
    choices: ["Watermelon!", "Traffic light!", "Garden"],
    correctAnswer: 0
  },

  {
    question: "What rotates but still remains in the same place?",
    choices: ["Bottle (spin the bottle game)", "Clock", "Stairs"],
    correctAnswer: 2
  },

  {
    question: "How can you lift an elephant with one hand?",
    choices: ["Truck", "Use both hands!", "Use a lever", "There is no such thing"],
    correctAnswer: 3
  }
];
var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      allQuestions[currentquestion].choices[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $("#option0").prop('checked', true);
};

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  };
};

$(document).ready(function() {

  $(".jumbotron").hide();
  $('#start').click(function() {
    $(".jumbotron").fadeIn();
    $(this).hide();
  });

  $(function() {
    $("#progressbar").progressbar({
      max: allQuestions.length - 1,
      value: 0
    });
  });

  setupOptions();

  $("#next").click(function() {
    event.preventDefault();
    checkAns();
    currentquestion++;
    $(function() {
      $("#progressbar").progressbar({
        value: currentquestion
      });
    });
    if (currentquestion < allQuestions.length) {
      setupOptions();
      if (currentquestion == allQuestions.length - 1) {
        $('#submit').html("Submit");
        $('#submit').click(function() {
          $(".jumbotron").hide();
          $("#result").html("Correct Answers: " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
          $("#result").fadeIn(1500);
        });

      };

    };
  });
});
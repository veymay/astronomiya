function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {

  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
}

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
}

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    var element = document.getElementById('question');
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById('choice' + i);
      element.innerHTML = choices[i];

      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}


function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  }
}


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById('progress');
  element.innerHTML = "<span>" + currentQuestionNumber + "-savol</span>" + "<span>Savollar:  " + quiz.questions.length + "ta</span>";
}


function showScores() {
  var gameOverHTML = "<h3 style='margin-top:150px; text-align:center;'>SIZNING NATIJANGIZ</h3>";
  gameOverHTML += "<div id='score'><span>SAVOLLAR SONI: " + quiz.questions.length + "ta</span><span class='info'>TO'G'RI JAVOBLAR: " + quiz.score + "ta</span></div>";
  var element = document.getElementById('quiz');
  element.innerHTML = gameOverHTML;
}


var questions = [
  new Question("Quyoshning massasi Yerning massasidan necha marta katta?", ["333", "3300", "33000", "333000"], "333000"),
  new Question("Quyoshning o'lchami Yerning o'lchamidan necha marta katta?", ["106", "107", "109", "108"], "109"),
  new Question("Quyoshning radiusi necha km?", ["696000", "695000", "693000", "69400"], "696000"),
  new Question("Quyoshning diametrik necha astronomik birlikka teng? ", ["1/107", "1/105", "1/106", "1/104"], "1/107"),
  new Question("Yer atmosferasidan tashqarida bir metr kvadrat yuzaga necha vatt Quyoshning nurlanish quvvati to'g'ri keladi?", ["1365", "1360", "1340", "1460"], "1360"),
  new Question("Merkuriy massasi Yer massasining necha qismini tashkil etadi?", ["0.04", "0.05", "0.004", "0.06"], "0.06"),
  new Question("Merkuriyning Quyosh atrofida aylanish davri necha Yer sutkasiga teng?", ["225", "88", "176", "687"], "88"),
  new Question("Merkuriyning o'z o'qi atrofida aylanish davri necha Yer sutkasiga teng?", ["58.65", "245", "56.85", "243"], "58.65"),
  new Question("Mars massasi Yer massasining necha qismini tashkil etadi?", ["0.6", "0.004", "0.05", "0.11"], "0.11"),
  new Question("Marsning Quyosh atrofida aylanish davri necha Yer sutkasiga teng?", ["88", "225", "687", "176"], "687"),
  new Question("Marsning o’z o’qi atrofida aylanish davri necha Yer sutkasiga teng?", ["1.1", "243", "56.85", "58.65"], "1.1"),
  new Question("Veneraning o’z o’qi atrofida aylanish davri necha Yer sutkasiga teng?", ["500", "243", "58.65", "56.85"], "243"),
  new Question("Veneraning o’rtacha zichligi necha kg/m3 ga teng?", ["5200", "5400", "5440", "3900"], "5200"),
  new Question("Venera sirtidagi o’rtacha harorat necha gradus Selsiga teng?", ["+400", "-130", "+480", "0"], "+480"),
  new Question("Venera atmosferasining planeta sirtiga beradigan bosimi necha Paskal?", ["0.2", "1000", "10000000", "100000"], "10000000"),
  new Question("Venera planetasining radiusi necha km?", ["2439", "3394", "6051", "71400"], "3394"),
  new Question("Quyoshning o’rtacha zichligi nech kg/m3?", ["1410", "1700", "1540", "1650"], "1410"),
  new Question("Quyosh nurlanishi tufayli har sekundda necha million tonna massa yo’qotadi?", ["10", "6", "5", "4"], "4"),
  new Question("Yupiter massasi Yer massasidan necha marta katta?", ["318", "14.5", "17", "95"], "318"),
  new Question("Yupiterning Quyosh atrofida aylanish davri necha Yer yiliga teng?", ["11.86", "29.5", "165", "84.1"], "11.86"),
  new Question("Yupiterning o’z o’qi atrofida aylanish davri nechaga teng?", ["3 soat 50 min", "9 soat 50 min", "50 min", "1 soat 50 min"], "9 soat 50 min"),
  new Question("Merkuriy va Venera planetalari orasidagi masofa necha astronomik uzunlik birligiga teng?", ["0.3", "0.6", "0.82", "0.5"], "0.3"),
  new Question("Saturnning Quyosh atrofida aylanish davri necha Yer yiliga teng?", ["11.86", "84.1", "29.5", "165"], "29.5"),
  new Question("Saturn planetasi sirtidagi o’rtacha harorat necha gradus Selsiy?", ["-145", "-220", "-210", "-180"], "-180"),
  new Question("Saturndan Quyoshgacha bo’lgan masofa necha astronomik birlikka teng?", ["0.4", "5.2", "1.52", "9.5"], "9.5"),
  new Question("Veneradan Quyoshgacha bo’lgan masofa necha astronomik birlikka teng?", ["0.7", "5.2", "1.52", "0.4"], "0.7"),
  new Question("Quyosh sistemasidagi eng baland tog’ qaysi planetada joylashgan?", ["Yer", "Mars", "Venera", "Merkuriy"], "Mars"),
];

var quiz = new Quiz(questions);

populate();
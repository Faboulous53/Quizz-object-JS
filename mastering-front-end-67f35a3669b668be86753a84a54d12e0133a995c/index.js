class Question {
  constructor(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer
  }
  isCorrectAnswer(choice){
    return choice === this.answer;
  }
}

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

class Quiz {
  constructor(questions){
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.question[this.currentQuestionIndex];
  }
  guess(answer){
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}
//Affichage du jeu
const display = {

}

//logique du jeu
quizApp = () => {
  if(quiz.hasEnded()){
    //Ecran de fin
  } else {
    //Afficher question, choix, progression.

  }
}


//creation quizz
let quiz = new Quiz(questions);
quizApp();
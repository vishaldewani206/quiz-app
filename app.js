let question = document.querySelector('#question');
let choices = document.querySelectorAll('.radio');
let next = document.querySelector('#next');
let checkBtn = document.querySelector('#check');
let label = document.querySelectorAll('.label');
let checkQuestion = document.querySelector('#checkQuestion');
let allQuestion = [
  'which one is not operating system',
  'which one is not git command ',
  'what is full form of html',
  'what is css stands for',
  'where is minar-e-pakistan',
];
let options = [
  ['Windows', 'computer', 'Mac', 'Linux'],
  ['git clone', 'git init', 'git checkout', 'cd'],
  ['hyper text markup language', 'text', 'computer', 'hyper'],
  [
    'cascading',
    'cascading style sheet',
    'nothing',
    'hyper text markup language',
  ],
  ['karachi', 'lahore', 'hyderabad', 'mithis'],
];

let rightAnswer = [3, 2, 4, 1, 2, 2];

let a = 0;
//onclick next button
next.addEventListener('click', () => {
  //allquestions
  for (let i = 0; i < allQuestion.length - 1; i++) {
    //check if any radio is clicked
    if (choices[i].checked) {
      //reset a
      if (a >= rightAnswer.length - 1) {
        a = 0;
      }
      //checking if it's right answer
      if (i == rightAnswer[a] - 1) {
        console.log('rigth');
        for (let j = 0; j < options.length; j++) {
          if (j == a) {
            console.log(options[j]);
            //changing labels
            for (let k = 0; k < label.length; k++) {
              label[k].innerHTML = options[j][k];
            }
          }
        }
        question.innerHTML = allQuestion[a];
        checkQuestion.innerHTML = '';
        a++;
        console.log(`a = ${a}`);
      } else {
        checkQuestion.innerHTML = 'Wrong';
        checkQuestion.style.color = 'red';
      }
    }
  }
});

//check btn
checkBtn.addEventListener('click', () => {
  //allquestions
  for (let i = 0; i < 4; i++) {
    //check if any radio is clicked
    if (choices[i].checked) {
      //checking if it's right answer
      if (i == rightAnswer[a] - 1) {
        checkQuestion.innerHTML = 'Right';
        checkQuestion.style.color = 'green';
        console.log('it is right');
      } else {
        checkQuestion.innerHTML = 'Wrong';
        checkQuestion.style.color = 'red';
        console.log('fuck you');
      }
    }
  }
});

//Hamburger
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('nav-active');
});


//Start
if(typeof btns_quiz === 'undefined'){
     btns_quiz = document.querySelector('.btns_quiz');
}

if(typeof play === 'undefined'){
    play = document.querySelector('#play');
}

// Quiz
if(typeof quiz === 'undefined'){
    quiz = document.querySelector('#quiz');
}

//Question Section
if(typeof questNo === 'undefined'){
    questNo = document.querySelector('#questNo');
}
if(typeof questText === 'undefined'){
    questText = document.querySelector('#questText');
}
if(typeof time === 'undefined'){
    time = document.querySelector('#time');
}


//Multiple Choices Of Questions
if(typeof opt1 === 'undefined'){
    opt1 = document.querySelector('#opt1');
}
if(typeof opt2 === 'undefined'){
    opt2 = document.querySelector('#opt2');
}
if(typeof opt3 === 'undefined'){
    opt3 = document.querySelector('#opt3');
}
if(typeof opt4 === 'undefined'){
    opt4 = document.querySelector('#opt4');
}


//Correct And Next Button
if(typeof total_correct === 'undefined'){
    total_correct = document.querySelector('#total_correct');
}
if(typeof next_quest === 'undefined'){
    next_quest = document.querySelector('#next_quest');
}


//Get All H4 From Quiz Sector
if(typeof choice_que === 'undefined'){
    choice_que = document.querySelector('.choice_que');
}


if(typeof index === 'undefined'){
    index = 0;
}
if(typeof timer === 'undefined'){
    timer = 0;
}
if(typeof interval === 'undefined'){
    interval = 0;
}


//Total Points
if(typeof correct === 'undefined'){
    correct = 0;
}


//Store Answer Value
if(typeof UserAns === 'undefined'){
    UserAns = undefined;
}


//Clicked Start Button
play.addEventListener('click', ()=>{
    btns_quiz.style.display = 'none';
    quiz.style.display = 'block';
})





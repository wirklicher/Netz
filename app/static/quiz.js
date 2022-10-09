
//Start
if(typeof btns_quiz === 'undefined'){
     btns_quiz = document.querySelector('.btns_quiz');
}

if(typeof play === 'undefined'){
    play = document.querySelector('#play');
}

if(typeof result === 'undefined'){
    result = document.querySelector('.result');
}

// Quiz
if(typeof quiz === 'undefined'){
    quiz = document.querySelector('#quiz');
}

//Question Section
if(typeof questNo === 'undefined'){
    questNo = document.querySelector('#questionNo');
}
if(typeof questText === 'undefined'){
    questText = document.querySelector('#questionText');
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
    choice_que = document.querySelectorAll('.choice_que');
    
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

if(typeof points === 'undefined'){
    points = document.querySelector("#points")
}




    play.addEventListener('click', ()=>{
    btns_quiz.style.display = "none";
    quiz.style.display = 'block';

    interval = setInterval(countDown, 1000);
    loadData();
})

if (typeof countDown === "undefined"){
     countDown = ()=>{
        if(timer === 20){
            clearInterval(interval);
        }
        else {
            timer++;
            time.innerText = timer;
            //console.log(timer);
        }
    }
}


if(typeof loadData === 'undefined'){
    loadData = ()=>{
        questNo.innerText = index + 1 + ". ";
        questText.innerText = MCQS[index].question;
        opt1.innerText = MCQS[index].choice1;
        opt2.innerText = MCQS[index].choice2;
        opt3.innerText = MCQS[index].choice3;
        opt4.innerText = MCQS[index].choice4;
    
        timer = 0;
    }
}


choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", ()=>{
        choices.classList.add("active");

        if(choiceNo === MCQS[index].answer)
        {
            correct++;
            console.log(correct);
        }
        else {
            correct += 0;
        }

        clearInterval(interval);

    for(i = 0; i <= 3; i++){
        choice_que[i].classList.add("disabled");
    }
    })

    
});

next_quest.addEventListener("click", ()=> {

    console.log(index);
    console.log(MCQS.length - 1);

    if(index !== MCQS.length - 1){
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
            removeActive.classList.remove("disabled");
        })

        loadData();

        total_correct.innerHTML = `${correct} Out Of ${MCQS.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
        
    }
    
    else {
        index = 0;

        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `You got ${correct} Out Of ${MCQS.length}`;
        result.style.display = "block";
    }
    
    for (i = 0; i <= 3; i++){
        choice_que[i].classList.remove("disabled");
    }
})



//Clicked Start Button

 




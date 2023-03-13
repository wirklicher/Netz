
//Start
btns_quiz = document.querySelector('.btns_quiz');



play = document.querySelector('#play');


playagain = document.querySelector('#playagain');


result = document.querySelector('.result');


// Quiz

quiz = document.querySelector('#quiz');


//Question Section

questNo = document.querySelector('#questionNo');

questText = document.querySelector('#questionText');

trophy = document.querySelector('#trophy');


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

    total_correct = document.querySelector('#total_correct');


    next_quest = document.querySelector('#next_quest');



//Get All H4 From Quiz Sector
    choice_que = document.querySelectorAll('.choice_que');
    


var index = 0;


timer = 0;


interval = 0;



//Total Points
correct = 0;



//Store Answer Value

UserAns = undefined;


points = document.querySelector("#points")






play.addEventListener('click', ()=>{
    correct = 0;
    btns_quiz.classList.add('hidden');
    //console.log(btns_quiz.style.display);
    quiz.style.display = 'block';
    

    interval = setInterval(countDown, 1000);
    //console.log(index);
    loadData();
    total_correct.innerHTML = `${correct} z ${MCQS.length}`;
})

     countDown = ()=>{
        if(timer === 60){
            clearInterval(interval);
            next_quest.click();
        }
        else {
            timer++;
            time.innerText = timer;
            //console.log(timer);
        }
    }




    loadData = ()=>{
        questNo.innerText = index + 1 + ". ";
        questText.innerText = MCQS[index].question;
        opt1.innerText = MCQS[index].choice1;
        opt2.innerText = MCQS[index].choice2;
        opt3.innerText = MCQS[index].choice3;
        opt4.innerText = MCQS[index].choice4;

        console.log(MCQS[index].choice1);
        console.log(questText);
    
        timer = 0;
    }




choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", ()=>{
        choices.classList.add("active");

        if(choiceNo === MCQS[index].answer)
        {
            choice_que[choiceNo].classList.add('correct');
            correct++;
            
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



    if(index !== MCQS.length - 1){
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
            removeActive.classList.remove("disabled");
            removeActive.classList.remove('correct');
        })

        loadData();

        total_correct.innerHTML = `${correct} z ${MCQS.length}`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
        
    }
    
    else {
        index = 0;
        

        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `Získal/a jste ${correct} z ${MCQS.length} bodu`;
        result.style.display = "block";

        
    }
    
    for (i = 0; i <= 3; i++){
        choice_que[i].classList.remove('correct');
        choice_que[i].classList.remove("disabled");
    }
})

playagain.addEventListener('click', () => {
    result.style.display = 'none';
    total_correct.innerText = '';
    play.click();
    
})


//Clicked Start Button

 




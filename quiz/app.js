const correctAnswers = ['A', 'C', 'C', 'B', 'B'];
const form = document.querySelector('.quiz-form');

const resultSection = document.querySelector('.result');
const result = document.querySelector('.resultText');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });

    scrollTo(0, 500);

    /*resultSection.setAttribute("class", "result py-4 bg-light text-center");
    result.innerHTML = score + '%';*/

    //Alternative way of doing the commented code above:
    //resultSection.querySelector('span').textContent = `${score}%`;
    resultSection.classList.remove('hidden');

    let outPut = 0;
    let timer = setInterval(() =>{
        resultSection.querySelector('span').textContent = `${outPut}%`;
        if (outPut === score){
            clearInterval(timer);
        }else{
            outPut++;
        }
    }, 10);

})
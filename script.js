const config = window.VALENTINE_CONFIG;

document.title = config.pageTitle;

window.addEventListener('DOMContentLoaded', () => {

document.getElementById('valentineTitle')
.textContent = config.valentineName;

document.getElementById('question1Text')
.textContent = config.questions.first.text;

document.getElementById('yesBtn1')
.textContent = config.questions.first.yesBtn;

document.getElementById('noBtn1')
.textContent = config.questions.first.noBtn;

document.getElementById('question2Text')
.textContent = config.questions.second.text;

document.getElementById('yesBtn2')
.textContent = config.questions.second.yesBtn;

document.getElementById('noBtn2')
.textContent = config.questions.second.noBtn;

document.getElementById('meterText')
.textContent = config.questions.meter.text;

document.getElementById('startText')
.textContent = config.questions.meter.startText;

document.getElementById('nextBtn')
.textContent = config.questions.meter.nextBtn;

});

function showNextQuestion(n) {
document.querySelectorAll('.question-section')
.forEach(q => q.classList.add('hidden'));

document.getElementById(`question${n}`)
.classList.remove('hidden');
}

function moveButton(btn) {
btn.style.position = "absolute";
btn.style.left = Math.random()*80+"%";
btn.style.top = Math.random()*80+"%";
}

const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');

if(loveMeter){
loveMeter.addEventListener('input',()=>{
loveValue.textContent = loveMeter.value;
});
}

function celebrate(){

document.querySelectorAll('.question-section')
.forEach(q=>q.classList.add('hidden'));

const page = document.getElementById('celebration');
page.classList.remove('hidden');

document.getElementById('celebrationTitle')
.textContent = config.celebration.title;

document.getElementById('celebrationMessage')
.textContent = config.celebration.message;
}

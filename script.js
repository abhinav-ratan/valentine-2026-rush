const config = window.VALENTINE_CONFIG;

document.title = config.pageTitle;

window.addEventListener("DOMContentLoaded", () => {

document.getElementById("title")
.textContent = config.valentineName;

document.getElementById("q1")
.textContent = config.questions.first.text;

document.getElementById("yes1")
.textContent = config.questions.first.yesBtn;

document.getElementById("no1")
.textContent = config.questions.first.noBtn;

document.getElementById("q2")
.textContent = config.questions.second.text;

document.getElementById("yes2")
.textContent = config.questions.second.yesBtn;

document.getElementById("no2")
.textContent = config.questions.second.noBtn;

document.getElementById("meterQ")
.textContent = config.questions.meter.text;

document.getElementById("meterText")
.textContent = config.questions.meter.startText;

document.getElementById("nextBtn")
.textContent = config.questions.meter.nextBtn;

});

function nextPage(n){

document.querySelectorAll(".page")
.forEach(p => p.classList.add("hidden"));

document.getElementById("page"+n)
.classList.remove("hidden");
}

function moveButton(btn){

btn.style.position = "absolute";
btn.style.left = Math.random()*80 + "%";
btn.style.top = Math.random()*80 + "%";
}

const meter = document.getElementById("meter");
const meterValue = document.getElementById("meterValue");

if(meter){
meter.addEventListener("input",()=>{
meterValue.textContent = meter.value;
});
}

function showFinal(){

document.querySelectorAll(".page")
.forEach(p => p.classList.add("hidden"));

document.getElementById("final")
.classList.remove("hidden");

document.getElementById("finalTitle")
.textContent = config.celebration.title;

document.getElementById("finalMessage")
.textContent = config.celebration.message;
}

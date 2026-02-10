const config = window.VALENTINE_CONFIG;

document.getElementById("title").innerText =
config.valentineName + ", my love";

function nextPage(n){

document.querySelectorAll(".page")
.forEach(p=>p.classList.add("hidden"));

document.getElementById("page"+n)
.classList.remove("hidden");

}

function moveButton(btn){

btn.style.position="absolute";
btn.style.left=Math.random()*80+"%";
btn.style.top=Math.random()*80+"%";

}

const meter=document.getElementById("meter");
const value=document.getElementById("value");

if(meter){
meter.oninput=()=>{
value.innerText=meter.value+"%";
};
}

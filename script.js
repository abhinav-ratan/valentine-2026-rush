const config = window.VALENTINE_CONFIG;

document.getElementById("title").innerText =
config.valentineName + ", my love";

function nextPage(pageNumber) {

document.querySelectorAll(".page")
.forEach(p => p.classList.add("hidden"));

document.getElementById("page" + pageNumber)
.classList.remove("hidden");

}

function moveButton(btn) {

const x = Math.random() * 80;
const y = Math.random() * 80;

btn.style.position = "absolute";
btn.style.left = x + "%";
btn.style.top = y + "%";

}

const meter = document.getElementById("loveMeter");
const value = document.getElementById("loveValue");

if(meter){
meter.oninput = () => {
value.innerText = meter.value + "%";
};
}

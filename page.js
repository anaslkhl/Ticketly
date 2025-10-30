let ver = document.querySelectorAll(".the-box")
let form = document.querySelector(".myform")
let con = document.querySelector(".container")
let nex = document.getElementById("next")
let formcon = document.querySelector('.form-container')
let prev = document.querySelector("#prev")


let counter = 0;
let numberot = document.getElementById("numofticket")
let plus = document.getElementById("btn11")
let minus = document.getElementById("btn1")

plus.addEventListener("click", inc)
minus.addEventListener("click", dec)

// nex.addEventListener("click", nextone())

// function nextone(){

//     console.log(con.tagName)
// }
prev.addEventListener("click",preve)


function preve(){
    closeForm();
    con.style.display = "grid";
}

function inc() {
    counter++;
    numberot.textContent = counter;

}
function dec() {
    counter--;
    numberot.textContent = counter;

}

ver.forEach(ve => {
    ve.addEventListener("click", openForm)
})
function openForm() {
    form.style.display = "flex";
    con.style.display = "none";
}

function closeForm() {
    document.querySelector(".myform").style.display = "none";

}

nex.addEventListener("click", (e) => {
    formcon.style.display = "block";
    form.style.display = "none";
})





































// 0703788414 gh
let ver = document.querySelectorAll(".the-box")
let form = document.querySelector(".myform")
let con = document.querySelector(".container")
let nex = document.getElementById("next")
let formcon = document.querySelector('.form-container')
let prev = document.querySelector("#prev")

let header = document.querySelector(".header")
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
prev.addEventListener("click", preve)


function preve() {
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
    header.style.display = "none"
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

let firstname = document.getElementById("prenom").value
console.log(firstname)

// console.log(lastname)

let email = document.getElementById("email").value
// console.log(email)

let phone = document.getElementById("phone").value
// console.log(phone)

let participant = document.getElementById("participant1")

let name, lname, eemail, pphone;
name = document.getElementById("name")
lname = document.getElementById("lname")
eemail = document.getElementById("eemail")
pphone = document.getElementById("pphone")

let valid = document.getElementById("myform")

valid.addEventListener("submit", (e) => {
    e.preventDefault()
    let firstname = document.getElementById("prenom")
    let lastname = document.getElementById("nom")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let summar = document.querySelector(".summary")
    let numofpart = Number(document.getElementById("numofpart").textContent);

    summar.innerHTML += `
                    <div >

                    <p id="part1"></p>
                    <ul class="participant-list" style="background-color: red;">

                        <li class="liii" id="name">First name : ${firstname.value}</li>
                        <li class="liii" id="lname">Last name : ${lastname.value}</li>
                        <li class="liii" id="eemail">Email : ${email.value}</li>
                        <li class="liii" id="pphone">Phone : ${phone.value}</li>
                    </ul>
                </div>
    `

    let send = document.getElementById("send")

    if(String(numofpart) == String(numberot.value)){
        send.style.dis
        return;
    }
    document.getElementById("numofpart").textContent = numofpart

    firstname.value =  ""
    lastname.value = ""
    email.value =  ""
    phone.value =  ""

    // name.textContent = firstname
    // lname.textContent = lastname
    // eemail.textContent = email
    // pphone.textContent = phone


})




// function addparticipant(){
//     participant.innerHTML = firstname.value

// }





























// 0703788414 gh
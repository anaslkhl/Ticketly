let ver = document.querySelectorAll(".the-box")
let form = document.querySelector(".myform")
let con = document.getElementById("container")
let nex = document.getElementById("next")
let formcon = document.querySelector('.form-container')
let prev = document.querySelector("#prev")

let header = document.querySelector(".header")
let counter = 0;
let numofticket = document.getElementById("numofticket")
let plus = document.getElementById("btn11")
let minus = document.getElementById("btn1")
let nextstep = document.getElementById("nextStep")
plus.addEventListener("click", inc)
minus.addEventListener("click", dec)

// nex.addEventListener("click", nextone())

// function nextone(){

//     console.log(con.tagName)
// }
prev.addEventListener("click", preve)


function preve() {
    closeForm();
    header.style.display = "flex"
    con.style.display = "grid";
}

// helper that refreshes the summary
function updateTicketSummary() {
  const nuu = document.getElementById('numberof');
  nuu.innerHTML = `<h3>🎫 Nombre de billets ${counter}</h3>`;
}

// initial render
updateTicketSummary();

function inc() {
  counter++;
  numofticket.innerText = counter;
  updateTicketSummary();   // <-- refresh
}

function dec() {
  if (counter > 0) {
    counter--;
    numofticket.innerText = counter;
    updateTicketSummary(); // <-- refresh
  }
}

// ver.forEach(ve => {
//     ve.addEventListener("click", openForm)
// })

nextstep.addEventListener('click', nexxxt)

function nexxxt() {
    formcon.style.display = "none";
    document.querySelector(".confirmation-box").style.display = "block"

}

let selectedev = document.querySelector(".nameselected")
let dateselect = document.querySelector(".dateofselected")
let placeselect = document.querySelector(".placeof")





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


const arraylist = [];

let numofpart = 0;

let valid = document.getElementById("myform")
const send = document.getElementById("send")


valid.addEventListener("submit", (e) => {

    e.preventDefault()
    let firstname = document.getElementById("prenom")
    let lastname = document.getElementById("nom")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let summar = document.querySelector(".summary")


    // let numofpart = Number(document.getElementById("numofpart").innerText);

    summar.innerHTML += `
    <div class="partiinfo">
    
    <p id="part1"></p>
    <ul class="participant-list">
    
    <li class="liii" id="name">First name : ${firstname.value}</li>
    <li class="liii" id="lname">Last name : ${lastname.value}</li>
    <li class="liii" id="eemail">Email : ${email.value}</li>
    <li class="liii" id="pphone">Phone : ${phone.value}</li>
    </ul>
    </div>
    `
    numofpart++;
    document.getElementById("numofpart").innerText = numofpart

    if (numofpart === Number(numofticket.innerText)) {
        valid.style.display = 'none';
        send.disabled = true;
    }
    
    const detas = document.getElementById("deta")
    const ula = document.createElement('ul');
    // ula.className = 'participants-list';
    ula.innerHTML += `
    <ul class="participants-list">
    <li>
    <span><strong>Participant : </strong>${firstname.value + ' ' + lastname.value}</span><br>
    </li>
    <li>
    <span><strong>Téléphone : </strong>${phone.value}</span><br>
    </li>
    <li>
    <span><strong>Email : </strong>${email.value}</span><br>
    </li>
    </ul>
    `;
    detas.appendChild(ula);
    
    valid.reset()
    
    
    // firstname.value = ""
    // lastname.value = ""
    // email.value = ""
    // phone.value = ""
    
    
});


function openForm() {
    header.style.display = "none"
    form.style.display = "flex";
    con.style.display = "none";
}
const nuu = document.getElementById("numberof")
const nuum = document.createElement('h3')
nuu.appendChild(nuum);
const EVENTS = [
    { id: 1, title: 'Samba Dance', date: '22/04/2026', city: 'Marrakech', price: 40, tickets: 400, img: '/img/dj.webp' },
    { id: 2, title: 'Comedy Night', date: '25/04/2025', city: 'Casablanca', price: 40, tickets: 500, img: '/img/dj.webp' },
    { id: 3, title: 'Rock Fest', date: '28/04/2025', city: 'Rabat', price: 20, tickets: 300, img: '/img/dj.webp' },
    { id: 4, title: 'Jazz Evening', date: '30/04/2025', city: 'Tangier', price: 90, tickets: 500, img: '/img/dj.webp' },
    { id: 5, title: 'Hip-Hop Battle', date: '02/05/2025', city: 'Agadir', price: 10, tickets: 400, img: '/img/dj.webp' },
    { id: 6, title: 'Food Expo', date: '05/05/2025', city: 'Fez', price: 60, tickets: 500, img: '/img/dj.webp' },
    { id: 7, title: 'Tech Meet', date: '08/05/2025', city: 'Marrakech', price: 70, tickets: 500, img: '/img/dj.webp' },
    { id: 8, title: 'Fashion Show', date: '10/05/2025', city: 'Essaouira', price: 50, tickets: 500, img: '/img/dj.webp' },
    { id: 9, title: 'Theatre Play', date: '12/05/2025', city: 'Casablanca', price: 85, tickets: 500, img: '/img/dj.webp' }
];

let cc = 0;
const container = document.getElementById('container');
let billettt = 0;
EVENTS.forEach(ev => {
    const shell = document.createElement('div');
    shell.className = 'the-box';
    shell.dataset.id = ev.id;

    shell.innerHTML = `
    <img class="image" src="${ev.img}">
    <div class="divinfo">
    <div class="nameofevent">${ev.title}</div>
    <div class="cidate">
    <div class="city">${ev.city}</div>
    <div class="date">${ev.date}</div>
    </div>
    <div class="prdis">
    <div class="price">${ev.price}$</div>
    <div class="tdispo">${ev.tickets}</div>
    </div>
    </div>
    `;
    billettt += ev.price;
    container.appendChild(shell);

    shell.addEventListener('click', () => {
        openForm();
        document.getElementById('p1').innerText = ev.title;
        document.getElementById('city').innerText = ev.city;
        document.getElementById('date').innerText = ev.date;
        document.getElementById('price').innerText = ev.price + '$';
    });
    cc = ev;

});

const seee = document.getElementById('selectedevent')
const shif = document.createElement('div')
shif.className = 'finaleventshow'


shif.innerHTML = `
<h3>🎟️ Événement sélectionné</h3>
<p class="nameselected"><strong>Nom de l’événement : </strong>${cc.title}</p>
<p class="dateofselected"><strong>Date : </strong>${cc.date}</p>
<p class="placeof"><strong>Lieu :</strong>${cc.city}</p>
<p class="priceof"><strong>price :</strong>${cc.price}$</p>

`;
seee.appendChild(shif);













// 0703788414 gh
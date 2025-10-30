let ver = document.querySelectorAll(".the-box")
let form = document.querySelector(".myform")
let con = document.querySelector(".container")

ver.forEach(ve => {
    ve.addEventListener("click", openForm)
})
function openForm(){
 form.style.display = "flex";
  con.style.display = "none"; 
   } 

function closeForm() {
    document.querySelector(".myform").style.display = "none";
}
// 0703788414 gh
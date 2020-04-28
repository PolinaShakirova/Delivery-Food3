const cardButtons = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const modal = document.querySelector(".close");

cardButtons.addEventListener("click", togglaModal);
close.addEventListener("click", togglaModal);

function togglaModal () {
 modal.classList.toggle("is-open");
}



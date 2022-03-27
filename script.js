var container = document.querySelector(".container");
var headerEl = document.querySelector("header");
var dayDisplayEl = document.querySelector("#currentDay");
dayDisplayEl.innerHTML = moment().format('dddd, MMMM Do');

var blocks = JSON.parse(window.localStorage.getItem('blockData')) || [];

if (blocks.length == 0) {
  for (let i = 1; i < 10; i++) {
    let x = document.getElementById("1" * i);
    blocks.push(x);
  }
}

function save() {
  console.dir(this.previousSibling);
}



document.querySelectorAll(".saveBtn").forEach(saveBtn => {
  saveBtn.addEventListener('click', save);
});




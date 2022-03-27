var container = document.querySelector(".container");
var headerEl = document.querySelector("header");
var dayDisplayEl = document.querySelector("#currentDay");
var btns = document.querySelectorAll(".saveBtn");
var blocks = JSON.parse(window.localStorage.getItem('blockData')) || [];

if (blocks.length == 0) {
  for (let i = 1; i < 10; i++) {
    let x = document.getElementById("1" * i);
    blocks.push(x);
  }
}

function onLoad() {
  dayDisplayEl.innerHTML = moment().format('dddd, MMMM Do');
  loadBlocks();
}

function loadBlocks() {
  for (let i = 1; i < 10; i++) {
    let y = document.getElementById(i.toString());
    let children = y.children;
    console.log(children[1]);
    console.log(y);
    children[1].value = localStorage.getItem(i);
  }
}


function save() {
  var textContent = this.previousElementSibling.value;
  var blockElById = this.parentElement.id;
  localStorage.setItem(blockElById, textContent);
}

onLoad();


btns.forEach(btn => {
  btn.addEventListener("click", save);
});

// for (let i = 1; i < 10; i++) {
//   var blockEl = document.getElementById("#" + i.toString())
//   blockEl.addEventListener("click", save);
// }




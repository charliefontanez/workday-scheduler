var container = document.querySelector(".container");
var headerEl = document.querySelector("header");
var dayDisplayEl = document.querySelector("#currentDay");
var currentTime = moment().hour();
var btns = document.querySelectorAll(".saveBtn");
var blocks = [];

currentTime = 13;
// if (blocks.length == 0) {
//   for (let i = 1; i < 10; i++) {
//     let x = document.getElementById("1" * i);
//     blocks.push(x);
//   }
// }

function onLoad() {
  dayDisplayEl.innerHTML = moment().format('dddd, MMMM Do');
  loadBlocks();

  blocks.forEach(function(data) {
    data.children[1].classList.add("past");
  });
  for (var i = 0; i < 9; i++) {
    if (currentTime == parseInt(blocks[i].id)) {
      blocks[i].children[1].classList.add("present")
    }
    else if (currentTime < parseInt(blocks[i].id)){
      blocks[i].children[1].classList.remove("past");
      blocks[i].children[1].classList.add("future");
    }
  }
}

function loadBlocks() {
  for (let i = 0; i < 9; i++) {
    let y = document.getElementById((i + 9).toString());
    blocks.push(y);
    // let children = y.children;
    console.log(blocks[i].children[1]);
    blocks[i].children[1].value = localStorage.getItem(i);
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


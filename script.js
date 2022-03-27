var container = document.querySelector(".container");
var headerEl = document.querySelector("header");
var dayDisplayEl = document.querySelector("#currentDay");
var currentTime = moment().hour();
var btns = document.querySelectorAll(".saveBtn");
var blocks = [];


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
    let timeBlock = document.getElementById((i + 9).toString());
    blocks.push(timeBlock);
    // let children = y.children;
    console.log(blocks[i].children[1]);
    blocks[i].children[1].value = localStorage.getItem("hour " + (i + 9));
  }
}


function save() {
  var textContent = this.previousElementSibling.value;
  var blockElById = "hour " + this.parentElement.id;
  localStorage.setItem(blockElById, textContent);
}

onLoad();

btns.forEach(btn => {
  btn.addEventListener("click", save);
});


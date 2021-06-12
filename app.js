const body = document.body;
const dayIcon = document.querySelector("#day-image");
const nightIcon = document.querySelector("#night-image");
const toggler = document.querySelector(".toggler");
const wrapper = document.querySelector(".wrapper");
let result = document.querySelector(".result-container");
const advanceCalc = document.querySelector(".advance-calc");
const advanceBtn = document.querySelector(".advance-calc p");
const advance = document.querySelector("#advance");
const rowOne = document.querySelector(".btn-row-1");
const calcTitle = document.querySelector(".calc-title");

// remove pointer selection

body.style.userSelect = "none";

//  grab all buttons

let num = Array.from(document.getElementsByClassName("num"));

// map through all buttons, then listen to what's clicked

num.map((n) => {
  n.addEventListener("click", (e) => {
    // add switch cases to shuffle through buttons clicked
    switch (e.target.innerText) {
      case "CE":
        result.innerText = "";
        break;
      case "←":
        result.innerText = result.innerText.slice(0, -1);
        break;
      case "=":
        try {
          result.innerText = eval(result.innerText);
        } catch {
          result.innerText = "WTF, Try Again!";
        }
        break;
      case "%":
        result.innerText = result.innerText * 0.01;
        break;
      case "X²":
        result.innerText = result.innerText ** 2;
        break;
      case "X³":
        result.innerText = result.innerText ** 3;
        break;
      case "√":
        result.innerText = Math.sqrt(result.innerText);
        break;
      case "cos":
        result.innerText = Math.cos(Math.PI * (result.innerText / 180)).toFixed(
          4
        );
        break;
      case "sin":
        result.innerText = Math.sin(Math.PI * (result.innerText / 180)).toFixed(
          4
        );
        break;
      case "tan":
        result.innerText = Math.tan(Math.PI * (result.innerText / 180)).toFixed(
          4
        );
        break;
      case "log":
        result.innerText = Math.log10(result.innerText).toFixed(4);
        break;
      case "X!":
        function factorial(n) {
          let answer = 1;
          if (n == 0 || n == 1) {
            return answer;
          } else {
            for (var i = n; i >= 1; i--) {
              answer = answer * i;
            }
            return answer;
          }
        }
        result.innerText = factorial(result.innerText);
        break;
      case "NaN":
        result.innerText = "Syntax error";
        break;
      case "Sci":
        result.innerText = "";
        break;
        case "π":
        result.innerText = (result.innerText * Math.PI).toFixed(4);
        break;
      default:
        result.innerText += e.target.innerText;
        break;
    }
  });
});

// advance calc

advance.addEventListener("click", () => {
  if (advanceCalc.style.display === "none") {
    advanceCalc.style.display = "flex";
  } else {
    advanceCalc.style.display = "none";
  }
});

// add event listener to switch icon to

nightIcon.addEventListener("click", () => {
  body.style.backgroundColor = "#000";
  body.style.transition = "all 1.5s ease-in-out";
  toggler.style.backgroundColor = "#000";
  toggler.style.border = "1px solid #fff";
  dayIcon.classList.remove("switch-on");
  nightIcon.classList.add("switch-off");
  wrapper.style.border = "2px solid #fff";
  wrapper.style.color = "#fff";
  result.style.backgroundColor = "#fff";
  result.style.color = "#000";
  body.classList.remove("day-mode");
  advanceCalc.style.backgroundColor = "#fff";
  advance.style.color = "#000!important";
  calcTitle.style.color = "#fff";
  advanceBtn.style.border = "1px solid #fff";
});

dayIcon.addEventListener("click", () => {
  body.style.backgroundColor = "#fff";
  body.style.transition = "all 1.5s ease-in-out";
  toggler.style.backgroundColor = "#fff";
  toggler.style.border = "1px solid #000";
  dayIcon.classList.add("switch-on");
  nightIcon.classList.remove("switch-off");
  nightIcon.style.visibility = "visible";
  wrapper.style.border = "2px solid #000";
  wrapper.style.color = "#000";
  result.style.backgroundColor = "#000";
  result.style.color = "#fff";
  body.classList.add("day-mode");
  advanceCalc.style.backgroundColor = "#000";
  advanceCalc.style.color = "#fff!important";
  advance.style.color = "#fff!important";
  calcTitle.style.color = "#000";
  advanceBtn.style.border = "1px solid #fff";
});

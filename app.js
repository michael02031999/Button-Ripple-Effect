let body = document.getElementsByTagName("body");
let clickMe = document.getElementById("clickMe");
let decoy = document.getElementById("decoy");

clickMe.addEventListener("click", clickMeEvent);

let count = 0;

function clickMeEvent(e) {
  //console.log(e.pageX);

  if (circleIsGone == true || count == 0) {
    count++;
    circleIsGone = false;
    let rect = e.target.getBoundingClientRect();

    let x = e.clientX - rect.x;
    console.log(x);

    //console.log(e.pageY);
    let y = e.clientY - rect.y;
    console.log(y);

    bubblePop(x, y);
  }
}

function bubblePop(xCoordinate, yCoordinate) {
  let newCircle = document.createElement("div");

  clickMe.appendChild(newCircle);
  newCircle.style.position = "absolute";
  newCircle.style.backgroundColor = "white";
  newCircle.style.width = "0px";
  newCircle.style.height = "0px";
  newCircle.style.borderRadius = "50%";

  newCircle.style.transform = "translate(-50%,-50%)";

  let x = xCoordinate + "px";
  let y = yCoordinate + "px";
  console.log(x);
  console.log(y);
  newCircle.style.top = y;
  newCircle.style.left = x;

  likeAStar(newCircle);
}

function likeAStar(circle) {
  // console.log(circle.style.width);

  for (let i = 0; i < 201; i++) {
    setTimeout(() => {
      circle.style.width = i + "px";
      circle.style.height = i + "px";
      //circle.style.border = "5px solid white";
      circle.style.opacity = "0.5";
      circle.style.visbility = "visible";

      if (i == 200) {
        circle.style.opacity = "0";
        /*circle.style.height = "0px";
        circle.style.width = "0px";*/
        circle.style.transition = "opacity 0.5s";
        /*setTimeout(() => {
          circle.style.height = "0px";
          circle.style.width = "0px";
        }, 1000);*/
        getRidOfCircle();
      }
    }, 1 * i);
  }
}

let circleIsGone = false;

function getRidOfCircle() {
  let allCircle = document.getElementsByTagName("div");
  /*console.log(allCircle.length);
  for (let i = allCircle.length - 1; i > 1; i++) {
    allCircle[i].remove();
  }*/

  setTimeout(() => {
    console.log(allCircle);

    if (allCircle[0]) {
      allCircle[0].remove();
      circleIsGone = true;
    }
  }, 500);
}

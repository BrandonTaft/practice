//HTML

{/* <p><button onclick="myMove()">Click Me</button></p> 
<div id ="container">
  <div id ="animate"></div>
</div> */}

// //CSS
// #container {
//     width: 400px;
//     height: 400px;
//     position: relative;
//     background: yellow;
//   }
//   #animate {
//     width: 50px;
//     height: 50px;
//     position: absolute;
//     background: red;
//   }

//JS
function myMove() {
    let id = "";
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }
  
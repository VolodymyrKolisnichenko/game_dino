import React from 'react';
import './App.css';




function App() {
return (
  <div>
    <div className="game"></div>
    <div className="dino"></div>
    <div className="cactus"></div>
  </div>
)

}

export default App;

{/* document.addEventListener("keydown", function(event) {
  jump();
});
function jump () {
  if (dino.classList !="jump") {
      dino.classList.add("jump")
  }
  setTimeout(function() {
      dino.classList.remove("jump")
  }, 300)
}
let isAlive = setInterval (function() {
  let dinoTop = parseInt (window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt (window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >=140) {
      alert ("GAME OVER!!")
  }
}, 10)

return (
  <div className="game">
  <div className="dino"></div>
  <div className="cactus"></div>  
</div>
); */}
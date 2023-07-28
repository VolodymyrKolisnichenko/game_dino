import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {

  const [isJumping, setIsJumping] = useState(false);
  const dinoRef = useRef();
  const cactusRef = useRef();
  const cloudRef = useRef();
  const [score, setScore] = useState(0);


  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      if (!!dinoRef.current && dinoRef.current.classList !== "jump") {
        dinoRef.current.classList.add("jump");
        setTimeout(function () {
          dinoRef.current.classList.remove("jump");
          setIsJumping(false);
        }, 300);
      }
    }
  };


  useEffect(() => {
    const isAlive = setInterval(function () {

      const dinoTop = parseInt(
        getComputedStyle(dinoRef.current).getPropertyValue("top")
      );

      let cactusLeft = parseInt(
        getComputedStyle(cactusRef.current).getPropertyValue("left")
      );

      let cloudLeft = parseInt(
        getComputedStyle(cloudRef.current).getPropertyValue("left")
      );


      if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140 && cloudLeft) {

        alert("Game Over! Your Score : " + score);
        setScore(0);
      } else {
        setScore(score + 1);
      }
    }, 10);

    return () => clearInterval(isAlive);
  });


  useEffect(() => {
    document.addEventListener("keydown", jump);
    document.addEventListener("touchstart", jump);
    return () => {
      document.removeEventListener("keydown", jump);
      document.removeEventListener("touchstart", jump);
    };
  }, []);


  return (
    <div className="game">
      Score : {score}
      <div className="dino" ref={dinoRef}></div>
      <div className="cactus" ref={cactusRef}></div>
      <div className="cloud" ref={cloudRef}></div>
      <div className="cloud-2" ref={cloudRef}></div>
      <div className="sun" ></div>
    </div>
  );
}

export default App;

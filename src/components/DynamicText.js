import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["react", "redux", "node", "sass"];
    let wordIndex = 0;
    let letterIndex = 0;

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter); // on créer un span enfant a letter

      letter.classList.add("letter"); // on ajoute une classe css pour le style
      letter.style.opacity = "0";
      letter.style.animation = "anim 5s ease forwards"; // forwards laisse l'animation dans l'etat
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove(); // au bout de 2000 ms la lettre part du dom
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        // si letterIndex est plus petit que word index
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(loop, 2000);
        }
      }, 80);
    };
    loop();
  }, []);
  return (
    <span className="dynamic-text">
      <span>simply</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;

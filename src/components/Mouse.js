import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    // on pointe le curseur
    const cursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
    });

    // on séléctionne tout les hovers
    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
      });
      // quand le curseur quitte l'élément
      link.addEventListener("mouseleave", () => {
        cursor.style.transition = ".3s ease-out";
        cursor.classList.remove("hovered");
      });
    });
  }, []);
  return <span className="cursor"></span>;
};

export default Mouse;

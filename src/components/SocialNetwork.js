import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a"); //séléctionne tout les a de la classe social-network

    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      link.addEventListener("mouseleave", (e) => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content" l>
        {/* Le mot-clé noopener de l'attribut rel est une mesure de sécurité ajoutée par WordPress pour corriger une faille de sécurité observée */}
        <a
          href="https://www.facebook.com"
          target="_blank "
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-facebook-f"></i>
          </li>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank "
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank "
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;

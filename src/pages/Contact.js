import React from "react";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.5 }}
        variants={pageTransition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>7 bis rue Montubois</p>
              <p>95840 Béthemont-la-forêt</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0695219935" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("téléphone copié !")}
                >
                  06 95 21 99 35
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="silliau.michael@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  silliau.michael@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>From Mika Web Design - 2023</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;

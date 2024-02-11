import React from "react";
import "./Footer.scss";

const buttonsLabels = ["All", "Active", "Completed"];

const Footer = ({ setView, view }) => {
  const handleChangeView = (newView) => {
    setView(newView);
    localStorage.setItem("view", newView);
  };

  return (
    <footer className={"footer"}>
      <div className={"footer__buttons-container"}>
        {buttonsLabels.map((label) => (
          <FooterButton
            key={label}
            label={label}
            active={view === label.toLowerCase()}
            onClick={() => handleChangeView(label.toLowerCase())}
          />
        ))}
      </div>
      <p className={"footer__message"}>Drag and drop to reorder list</p>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/BrandonSdvl"
          target="_blank"
          rel="noreferrer"
        >
          BrandonSdvl
        </a>
        .
      </div>
    </footer>
  );
};

const FooterButton = ({ label, active, onClick }) => {
  return (
    <button
      className={`footer__button ${active ? "footer__button--active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Footer;

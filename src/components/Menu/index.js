import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";
import Button from "../Button";
// import ButtonLink from "../ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Neneflix Logo" />
      </a>
      {/* Trocando a tag styled.a por styled.button no component Button, refencio ele com as="a" para se comportar como a tag a*/}
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;

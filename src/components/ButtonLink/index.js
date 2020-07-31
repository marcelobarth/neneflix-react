import React from "react";

function ButtonLink(props) {
  /*props => {Recebendo propriedades que mandarem. Ex: className: , href:"/",
  que vem da chamada deste componente no outro componete Menu.}*/
  return (
    <a href={props.href} className={props.className}>
      {props.children}
      {/* children é tudo que tem dentro de uma tra ou div. Aqui no caso, traz o texto passado na chamada do ButtonLink do Menu. */}
    </a>
  );
}

export default ButtonLink;

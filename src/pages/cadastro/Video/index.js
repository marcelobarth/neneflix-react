import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";

function CadastrarVideo() {
  return (
    <PageDefault>
      <h1>Cadastro Video</h1>
      <Link to="/cadastro/categoria">Cadastro Categoria</Link>
    </PageDefault>
  );
}

export default CadastrarVideo;

import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";

function CadastrarCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro Categoria</h1>
      <Link to="/cadastro/categoria">Cadastro Categoria</Link>
    </PageDefault>
  );
}

export default CadastrarCategoria;

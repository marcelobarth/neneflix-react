import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import Home from "./pages/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastrarVideo from "./pages/cadastro/Video";
import CadastrarCategoria from "./pages/cadastro/Categoria";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastrarVideo} />
      <Route path="/cadastro/categoria" component={CadastrarCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

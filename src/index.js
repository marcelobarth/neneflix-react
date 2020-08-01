import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastrarVideo from "./pages/cadastro/Video";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastrarVideo} />
      <Route path="/" component={App} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

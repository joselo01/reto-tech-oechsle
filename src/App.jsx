import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { ClientesScreen } from "./pages/ClientesScreen";
import { DesviacionScreen } from "./pages/DesviacionScreen";
import { ProyeccionScreen } from "./pages/ProyeccionScreen";


function App() {
  return (
    <div className="container mt-3">
      <Router>
        <div className="mt-3 mb-5">
          <NavBar />
        </div>
        <Switch>
          <Route path="/" exact component={ClientesScreen}></Route>
          <Route path="/clientes" component={ClientesScreen} exact></Route>
          <Route path="/desviacion" component={DesviacionScreen} exact></Route>
          <Route path="/proyeccion" component={ProyeccionScreen} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Reto Tech
      </Link>
      <div className="d-flex">
      <NavLink className="btn btn-dark mr-2" to="/clientes">
          Listado Clientes
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/desviacion">
          Desviación Estándar
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/proyeccion">
          Proyeccion de análisis
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

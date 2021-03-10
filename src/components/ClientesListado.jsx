import React from "react";
import moment from "moment";
moment.locale("es");

const ClientesListado = (props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            <th scope="col">Fecha de nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {props.clientes.length > 0 ? (
            props.clientes.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.edad}</td>
                <td>
                  {moment(new Date(item.fecha))
                    .add(1, "day")
                    .format("DD-MM-YYYY")}
                </td>
              </tr>
            ))
          ) : props.clientes.length > 0 ? (
            <tr>
              <td>No hay datos para mostrar</td>
            </tr>
          ) : (
            <tr className="d-flex justify-content-center">
              <td>
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ClientesListado;

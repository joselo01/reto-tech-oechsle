import React from "react";
import { firebase } from "../firebase";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientesListado from "../components/ClientesListado";

export const ClientesScreen = () => {
  const [show, setShow] = React.useState(false);
  const [clientes, setClientes] = React.useState([]);
  const [formCliente, setformCliente] = React.useState({
    nombre: "",
    apellido: "",
    edad: "",
    fecha: "",
  });

  const [promedio, setPromedio] = React.useState(0);
  const [error, setError] = React.useState(null);

  const { nombre, apellido, edad, fecha } = formCliente;

  React.useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("clientes").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClientes(arrayData);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerClientes();
  }, []);

  React.useEffect(() => {
    const getPromedio = () => {
      let stateCopy = [...clientes];
      let datasetSum = stateCopy.reduce((a, b) => a + parseInt(b.edad), 0);
      let p = Math.round(datasetSum / stateCopy.length);
      setPromedio(p);
    };
    getPromedio();
  }, [clientes]);

  const handleInputChange = ({ target }) => {
    setformCliente({
      ...formCliente,
      [target.name]: target.value,
    });
  };

  const RegistrarCliente = async (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setError("Nombre Obligatorio");
      return;
    }
    if (!apellido.trim()) {
      setError("Apellido Obligatorio");
      return;
    }

    if (!edad.trim()) {
      setError("Edad Obligatorio");
      return;
    }

    if (!fecha.trim()) {
      setError("Fecha Obligatorio");
      return;
    }

    setError(null);

    try {
      const db = firebase.firestore();
      const nuevoCliente = {
        ...formCliente,
      };
      const data = await db.collection("clientes").add(nuevoCliente);

      setClientes([...clientes, { ...nuevoCliente, id: data.id }]);

      setformCliente("");
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 mb-5">
          <Button variant="primary" onClick={handleShow}>
            Registrar Cliente
          </Button>
        </div>
        <div className="col-md-12">
          <ClientesListado clientes={clientes} />
        </div>
        <div className="col-md-12">
          <Lista promedio={promedio} />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={RegistrarCliente}>
            {error && <div className="alert alert-danger">{error}</div>}

            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control mb-2"
              onChange={handleInputChange}
              value={nombre || ""}
            />

            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              className="form-control mb-2"
              onChange={handleInputChange}
              value={apellido || ""}
            />

            <label>Edad</label>
            <input
              type="text"
              name="edad"
              className="form-control mb-2"
              onChange={handleInputChange}
              value={edad || ""}
            />

            <label>Fecha de nacimiento</label>
            <input
              type="date"
              name="fecha"
              className="form-control mb-2"
              onChange={handleInputChange}
              value={fecha || ""}
            />

            <button type="submit" className="btn btn-dark btn-block mt-2">
              Registrar Cliente
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

function Lista({ promedio }) {
  return (
    <div className="alert alert-info" role="alert">
      El promedio de edad de los clientes es de {promedio} años
    </div>
  );
}

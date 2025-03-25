import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";

const ListaTarea = ({ listaTareas }) => {
  return (
    <section className="container mt-3">
      <ListGroup>
        {listaTareas.map((tarea, posicion) => (
          <Tarea key={posicion} tarea={tarea}></Tarea>
        ))}
      </ListGroup>
    </section>
  );
};

export default ListaTarea;

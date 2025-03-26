import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";

const ListaTarea = ({ listaTareas, borrarTarea }) => {
  return (
    <section className="container mt-3">
      <ListGroup>
        {listaTareas.map((tarea, posicion) => (
          <Tarea key={posicion} tarea={tarea} borrarTarea={borrarTarea}></Tarea>
        ))}
      </ListGroup>
    </section>
  );
};

export default ListaTarea;

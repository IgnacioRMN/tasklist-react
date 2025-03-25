import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";

const ListaTarea = () => {
  return (
    <section className="container">
      <ListGroup>
        <Tarea></Tarea>
        <Tarea></Tarea>
        <Tarea></Tarea>
      </ListGroup>
    </section>
  );
};

export default ListaTarea;

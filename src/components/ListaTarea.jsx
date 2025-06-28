import { ListGroup, Card } from "react-bootstrap";
import Tarea from "./Tarea";

const ListaTarea = ({ listaTareas, borrarTarea }) => {
  return (
    <Card className="list-card">
      <ListGroup>
        {listaTareas.map((tarea, posicion) => (
          <Tarea key={posicion} tarea={tarea} borrarTarea={borrarTarea} />
        ))}
      </ListGroup>
    </Card>
  );
};

export default ListaTarea;

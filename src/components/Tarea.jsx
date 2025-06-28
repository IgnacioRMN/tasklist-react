import { Button, ListGroup } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const Tarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center tarea-fade-in">
      <span>{tarea}</span>
      <Button
        variant="danger"
        onClick={() => borrarTarea(tarea)}
        aria-label="Eliminar tarea"
      >
        <XCircle />
      </Button>
    </ListGroup.Item>
  );
};

export default Tarea;

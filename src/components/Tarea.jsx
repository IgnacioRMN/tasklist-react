import { Button, ListGroup } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const Tarea = ({tarea, borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <Button variant="danger" onClick={()=> borrarTarea(tarea)}>
        <XCircle></XCircle>
      </Button>
    </ListGroup.Item>
  );
};

export default Tarea;

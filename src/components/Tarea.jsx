import { Button, ListGroup } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const Tarea = ({tarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <Button variant="danger">
        <XCircle></XCircle>
      </Button>
    </ListGroup.Item>
  );
};

export default Tarea;

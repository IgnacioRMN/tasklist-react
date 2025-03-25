import { Button, Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";

const FormularioTarea = () => {
  return (
    <div className="mb-4">
      <Form className="container d-flex">
        <Form.Group controlId="formTarea" className="w-100">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
        </Form.Group>
        <Button variant="primary" type="submit">
          <PlusCircle></PlusCircle>
        </Button>
      </Form>
    </div>
  );
};

export default FormularioTarea;

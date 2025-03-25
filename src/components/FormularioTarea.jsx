import { Button, Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  return (
    <section className="mb-4">
      <Form className="container d-flex">
        <Form.Group controlId="formTarea" className="w-100">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
        </Form.Group>
        <Button variant="primary" type="submit">
          <PlusCircle></PlusCircle>
        </Button>
      </Form>
      <ListaTarea  />
    </section>
  );
};

export default FormularioTarea;

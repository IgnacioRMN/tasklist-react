import { Button, Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import ListaTarea from "./ListaTarea";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [listaTareas, setListaTareas] = useState([]);

  const posteriorValidacion = (data) => {
    if (listaTareas.some((tarea) => tarea === data.tarea.trim())) {
      alert("Esta tarea ya existe");
    } else {
      setListaTareas([...listaTareas, data.tarea]);
      reset();
    }
  };

  return (
    <section className="mb-4">
      <Form
        onSubmit={handleSubmit(posteriorValidacion)}
        className="container d-flex"
      >
        <Form.Group controlId="formTarea" className="w-100">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La tarea debe tener 3 caracteres como mínimo",
              },
              maxLength: {
                value: 25,
                message: "La tarea debe tener 25 caracteres como máximo",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          <PlusCircle></PlusCircle>
        </Button>
      </Form>
      <ListaTarea listaTareas={listaTareas} />
    </section>
  );
};

export default FormularioTarea;

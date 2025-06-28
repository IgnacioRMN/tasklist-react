import { Button, Form, Card } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import ListaTarea from "./ListaTarea";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [listaTareas, setListaTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tasklist-tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const posteriorValidacion = (data) => {
    if (listaTareas.some((tarea) => tarea === data.tarea.trim())) {
      alert("Esta tarea ya existe");
    } else {
      setListaTareas([...listaTareas, data.tarea]);
      reset();
    }
  };

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = listaTareas.filter(
      (tarea) => tarea !== nombreTarea
    );
    setListaTareas(tareasFiltradas);
  };

  useEffect(() => {
    localStorage.setItem("tasklist-tareas", JSON.stringify(listaTareas));
  }, [listaTareas]);

  return (
    <section className="mb-4">
      <Card className="form-card">
        <Form
          onSubmit={handleSubmit(posteriorValidacion)}
          className="d-flex gap-2"
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
            <Form.Text className="text-danger">
              {errors.tarea?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-add-task">
            <PlusCircle /> Agregar
          </Button>
        </Form>
      </Card>
      <ListaTarea listaTareas={listaTareas} borrarTarea={borrarTarea} />
    </section>
  );
};

export default FormularioTarea;

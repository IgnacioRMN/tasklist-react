import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTarea from "./components/FormularioTarea";
import ListaTarea from "./components/ListaTarea";

function App() {
  return (
    <body className="gradient-bg">
      <h1 className="text-center m-4">Task List</h1>
      <FormularioTarea />
      <ListaTarea />
    </body>
  );
}

export default App;

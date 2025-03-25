import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <main className="gradient-bg">
        <h1 className="text-center m-4">Task List</h1>
        <FormularioTarea />
      </main>
    </>
  );
}

export default App;

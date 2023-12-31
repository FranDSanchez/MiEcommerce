import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListCotainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListCotainer greetings={"Hola Bienvenido a la tienda"} />;
    </div>
  );
}

export default App;

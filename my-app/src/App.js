import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MidSection from "./components/MidSection";

function App() {
  const text =
    "Somos una empresa nueva e innovadora que busca hacer el manejor de restaurantes y bares mucho mas agil y sencillo y que nuestros clientes puedan dar la mejor atencion de calidad a sus conmensales. Pruebamos gratis un mes y veras como con nosotros ahorras tiempo, y dinero.";
  return (
    <>
      <NavBar />
      <MidSection text={text} />
    </>
  );
}

export default App;

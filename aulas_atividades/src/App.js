//import HelloWorld from "./components/00HelloWorld";
//import Calculadora from "./components/01Calculadora";
//import MyProps from "./components/02MyProps";
//import MeuDados01 from "./atividades/components/MeuDados01";
//import MeuDados02 from "./atividades/components/MeusDados02";
//import Temperatura03 from "./atividades/components/Temperatura03";
//import FunctionA from "./components/03Hierarquia/FunctionA";
//import { Header, Body, Footer } from "./components/04Multiplo";
//import * as Site from "./components/04Multiplo";
/* function App() {
  return (
    <div className="App">
      <Site.Header />
      <Site.Body />
      <Site.Footer />
    </div>
  );
} */

import { SuperMercado, Legume, Bebida } from "./components/05Children";

function App() {
  return (
    <div className="App">
      <SuperMercado nome="O mercadin">
        <Legume nome="verdura" />
        <Bebida nome="só vai" />
      </SuperMercado>
    </div>
  );
}



export default App;
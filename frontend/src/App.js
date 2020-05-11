import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Configuracion from './components/Configuracion';
import Grafico from './components/Grafico';
import Tabla from './components/Tabla';
import Calendario from "./components/Calendario";
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/calendario">
        <Calendario/>
        </Route>
      <Route path="/tabla">
        <Tabla/>
        </Route>
        <Route path="/configuracion">
        <Configuracion/>
        </Route>
        <Route path="/">
        <Grafico/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

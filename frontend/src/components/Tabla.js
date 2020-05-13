import React, { useEffect, useState } from 'react'
import Navegation from './Navegation'
import CardDisable from "./card-disable";
import axios from "axios";
import { Link } from 'react-router-dom';

const Tabla = () => {
  const [datos, setdatos] = useState([]);
  const [cargando, setcargando] = useState(true);
  useEffect(() => {
    async function getPredicciones() {
      let response = await axios.get('http://localhost:4000/')
      setcargando(false)
      setdatos(response.data)
    }
    getPredicciones()
  }, []);

  // si esta cargando muestra el spinner verde
  function Spinner(props) {
    const isCargando = props.cargando;
    if (isCargando) {
      return (
        //muestra el spinner
        <div className="izquierda">
          <div className="d-flex justify-content-center text-success">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <h5 className="carga-text">Cargando</h5>
        </div>
      )
    }else{
      return (
        <tbody>
        {
          datos.map((dato, index) => (
            <tr>
              <th scope="row" key={dato._id}>{index}</th>
              <td className="td-tamaño">{dato.enfermedad}</td>
              <td className="td-tamaño">{dato.probabilidad}</td>
              <td className="td-tamaño">{dato.fecha.substr(0, 16)}</td>
              <td className="td-tamaño">{new Date(dato.fecha).toLocaleTimeString('en-US')}</td>
              <td><button type="button" className="btn btn-outline-success btn-block">Ver Imagen</button> </td>
            </tr>
          ))
        }

      </tbody>
      )
    }
  }

  return (
    <section className="content">
      <CardDisable />
      <div className="tabla">
        <Navegation />
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Buscar"
            v-model="filtroUsuarios"
          />
        <div className="container">
        <button className="btn-filter">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" height={24} viewBox="0 0 24 24" width={24}>
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <ul className="dropdown">
            <li className="active"><Link>Fecha reciente</Link></li>
            <li><Link href="#">Enfermedad</Link></li>
            <li><Link href="#">Hora</Link></li>
          </ul>
        </button>
      </div>
      
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Enfermedad</th>
              <th scope="col">Probabilidad</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Imagen</th>
            </tr>
          </thead>
        <Spinner carga={cargando}/>
        </table>
      </div>
    </section>
  )
}

export default Tabla

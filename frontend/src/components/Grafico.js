import React, { useState } from 'react'
import Navegation from './Navegation'
import { Doughnut } from 'react-chartjs-2';
import axios from "axios";
export default function Grafico() {

  const [imagen, setimagen] = useState("");
  const [urlImage, seturlImage] = useState("");
  const [nameImagen, setnameImagen] = useState("");
  const [predicciones, setpredicciones] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [cargando, setcargando] = useState(false);

  let processFile = (e) => {
    //console.log(e.target.files[0].type);
    e.preventDefault()
    //validand0 el tipo de archivo
    if (e.target.files[0].type === "image/jpg" || e.target.files[0].type === "image/jpeg") {
      console.log('cumplido');
      setimagen(e.target.files[0])
      setnameImagen(e.target.files[0].name)
      //convierto la imagen en url para poder mostrarla en la interfaz
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = e => {
        e.preventDefault();
        seturlImage(e.target.result)
      };
    } else {
      alert('archivo no valido')
    }

  }

  const subirImagen = (e) => {
    e.preventDefault() // Stop form submit
    if (imagen === "") {
      alert('selecciona un archivo')
    }else{
      let formData = new FormData()
      formData.append('imagen', imagen)
      setcargando(true) // muestro el spinner
    axios({ method: 'post', url: 'http://localhost:4000/file', data: formData, headers: { 'Content-Type': 'multipart/form-data' } })
    .then(res => {
      let prediccion = res.data.prediccion
      let data = prediccion.substr(1, 77)
      let predicionesCortada = data.split(" ", 7)    
      setpredicciones(predicionesCortada)     
      setcargando(false) //detengo la carga porque obtengo la prediccion
      setimagen("")
    })
    .catch(err => console.log(err));
  }
  }

  // si esta cargando muestra el spinner verde
  function Spinner(props) {
    const isCargando = props.carga;
    if (isCargando) {
      return (
        //muestra el spinner
        <div className="izquierda">
          <div className="d-flex justify-content-center text-success">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <h5 className="carga-text">Obteniendo prediccion...</h5>
        </div>
      )
    }
    return (
      // sino muestra la carta
      <div className="izquierda">
        <div className="cards">
          <div>
            {urlImage ? // si hay una url de imagen la muestra
              <div className="card__image-holder">
                <img className="card__image" src={urlImage} alt="wave" height="240" width="300" />
              </div> :
              <div></div>
            }
          </div>
          <div className="card-actions">
            <h2>{nameImagen}</h2>
          </div>
        </div>

        <h1>File Upload</h1>
        <input type="file" name="imagen" onChange={processFile} />
        <button onClick={subirImagen}>Upload</button>
      </div>
    )
  }


  // lo que se muestra en pantalla
  return (
    <section className="content">
      {/* Carta */}
      <Spinner carga={cargando} />
      {/* Grafico de barras */}
      <div className="derecha">
        <Navegation />
        <Doughnut data={{
          labels: ["Acné", "Cancer de piel", "Esclerodermia", "Herpes", "Pie de atleta", "Pie sano", "Rostro sano"],
          datasets: [{
            label: 'Resultad0',
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', 'yellow', "#24de2a", "#49046b", "pink"],
            borderColor: 'rgb(255, 99, 132)',
            data: predicciones
          }]
        }} />
      </div>
    </section>
  )
}
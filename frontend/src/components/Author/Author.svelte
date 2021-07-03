<script>
</script>

<div>
  <h1><p class="center">Sobre mí</p></h1>
  <p align="center" class="paddingrl">
    Soy un desarrollador web salvadoreño 🇸🇻 que le gusta mucho aprender dia a
    día, comencé a los 15 años actualmente tengo {new Date().getFullYear() -
      2002} años y cree esta herramienta para ayudar a más doctores.
  </p>

  <div class="grid-cartas">
    <div class="card-enfermedad">
      <h3><p>Github</p></h3>
      <p>
        Puedes acceder al repositorio de código usalo sin ningun problema,
        contribuye y compartelo con tus amigos.
        <br /><br />
        Creado con mucho amor con tecnologias como Python, Tensorflow, Pillow y Keras.
      </p>
    </div>
    <div class="card-enfermedad">
      <h2><p>Cáncer de piel</p></h2>
    </div>
    <div class="card-enfermedad">
      <h2><p>Esclerodermia</p></h2>
    </div>
    <div class="card-enfermedad">
      <h2><p>Herpes genital</p></h2>
    </div>
    <div class="card-enfermedad">
      <h2><p>Pie de atleta</p></h2>
    </div>
  </div>
</div>

<style>
  .grid-cartas {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    padding-left: 10%;
    padding-right: 10%;
  }
  .card-enfermedad {
    width: 90%;
    -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    padding: 10px;
  }
  .card-enfermedad:hover {
    color: white;
    background: #3a0ca3;
    transition: 0.3s;
  }
</style>

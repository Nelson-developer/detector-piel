<script>
</script>

<div>
  <h1><p class="center">Por qué SkinFlow</p></h1>
  <p align="center" class="paddingrl">
    Es una aplicación web que te permite obtener predicciones sobre 5
    enfermedades o infecciones más comunes de la piel
  </p>

    <div class="grid-cartas">
      <div class="card-enfermedad">
        <h2><p>Acné</p></h2>
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
    grid-template-columns: repeat(auto-fill, minmax(23.5rem, 1fr));
  }
  .card-enfermedad {
    width: 90%;
    -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    border-radius: 5%;
  }
  .card-enfermedad:hover {
    color: white;
    background: #3a0ca3;
    transition: 0.3s;
  }
  .paddingrl {
    padding-left: 25%;
    padding-right: 25%;
  }
</style>

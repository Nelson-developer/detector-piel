<script>
</script>

<div>
  <div class="grid-prediccion">
    <div class="center">
      <button
        class="btn-imagen"
        on:click={() => {
          document.querySelector("#inputfile").click();
        }}>Seleccionar imagen</button
      >
      <input
        type="file"
        accept="image/jpeg"
        id="inputfile"
        style="display: none;"
      />
    </div>
    <div class="center">
      <div class="card-resultado">
        <br />
        <div class="center">
          <img
            src="https://www.famousbirthdays.com/faces/wong-jacobo-youtubestar-image.jpg"
            alt=""
            width="300px"
            height="300px"
          />
        </div>
        <h3>
          <p class="center">Resultados</p>
        </h3>

        <div class="grid-resultado-total">
          <div class="m-b">Acné</div>
          <div class="m-b">50%</div>

          <div class="m-b">Cáncer de piel</div>
          <div class="m-b">12%</div>

          <div class="m-b">Esclerodermia</div>
          <div class="m-b">10%</div>

          <div class="m-b">Herpes genital</div>
          <div class="m-b">20%</div>

          <div class="m-b">Pie de atleta</div>
          <div class="m-b">100%</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @media (min-width: 1024px) {
    .grid-prediccion {
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }

  @media (max-width: 1024px) {
    .grid-prediccion {
      display: grid;
      grid-template-columns: 100%;
    }
  }

  .btn-imagen {
    font-size: 17px;
    font-weight: 700;
    width: 95%;
    padding: 15px;
    border: none;
    cursor: pointer;
    color: white;
    background: #3a0ca3;
    margin-bottom: 15px;
  }

  .card-resultado {
    width: 95%;
    -webkit-5ox-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    background: #ffffff;
  }
  .grid-resultado-total {
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: center;
    font-weight: 700;
  }
  .m-b {
    margin-bottom: 10px;
  }
</style>

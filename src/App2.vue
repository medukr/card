<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <a class="navbar-brand" href="#">Home</a>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Resume <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Contacts</a>
          <a class="nav-item nav-link" href="#">About</a>
        </div>
      </div>


      <div class="ml-auto">
        <div class="d-flex">

          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fab fa-github"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fab fa-skype"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fab fa-telegram"></i></a>
            </li>
          </ul>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </nav>


    <div class="container container-fluid">
      <div class="row">

        <!--Profile Begin-->
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div class="card" id="hexagon" style="">
              <img class="card-img-top card__image" src="/assets/images/Observation_i02.jpg" alt="Card image cap">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <i class="fab fa-php"></i>
                  <i class="fab fa-js"></i>
                </h5>
                <p class="card-text">Developer</p>
              </div>
            </div>
          </div>
        <!--Profile END-->

        <!--Content Begin-->
        <div class="col-lg-8 col-md-6 col-sm-12 pt-3">

        </div>
        <!--Content END-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
  @import "../assets/styles/card.css";
</style>

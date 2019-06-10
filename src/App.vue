<template>
  <div id="app">
    <c-navbar></c-navbar>


    <div class="container container-fluid">
      <div class="row">

        <c-profile></c-profile>



        <div class="col-lg-8 col-md-6 col-sm-12 pt-3">



          <router-view></router-view>



        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import CNavbar from './components/navbar'
  import CProfile from './components/profile'
  import CAccordion from './components/acccordion'
export default {
  name: 'app',
  components:{
    CNavbar,
    CProfile,
    CAccordion
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  @import "../assets/styles/card.css";
</style>

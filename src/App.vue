<template>
  <div id="app">
    <navbar/>
    <div class="container-view">


      <router-view/>
      
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
  }
  :root{
  --doneColor: #26A65B;
  --deleteColor: rgba(231, 76, 60,  80%);
  }
  #app{
    background-color: #22313F;
    min-height: 100vh;
  }
  .container-view{
    padding-right: 4rem;
    padding-left: 4rem;
    margin-top: 3rem;
  }
</style>

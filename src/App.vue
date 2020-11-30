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
  },
 
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
  .card-header{
  background-color: rgba(0,0,0, 62%) !important;
  color: #D1D1D1 !important;
  font-family: 'Pacifico', cursive !important;
  font-size: 1.15rem !important;
  letter-spacing: 2.5px !important;
}
.card-body{
    font-family: 'Chilanka', cursive !important;
    color: #ECECEC !important;
    font-size: 1.1rem !important;
}

  .card{
  box-shadow: 0 4px 4px rgba(0,0,0,25%) !important;
  background-color: #2A4D57 !important;
  border-radius: 16px !important;
}
  .input-unstyled{
    border: none;
    width: 100%;
    outline: none;
    height: 100%;
    padding-left: 16px;
    font-family: 'Chilanka', cursive;
  }
  .input-unstyled:focus{
  border: 2.5px dotted rgba(42, 54, 87, 100%);
  box-shadow: 1px 1px 3px 7px rgba(42, 54, 87, 60%);
  transition: 1s all;
}
.icon-input{
  position: absolute;
  right: 8px;
}
label{
   font-family: 'Chilanka', cursive;
}
.input-wrong{
  border: 1px solid rgba(231, 76, 60,  80%) !important;
  transition: all 1.5s !important;
  box-shadow: 3px 3px 4px rgba(231, 76, 60,  30%);
}
</style>

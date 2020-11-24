<template>
	<div class="card">
		<div class="card-header">
			<h3 class="text-center">{{index+1}}.  {{name}}</h3>
		</div>
    <div class="card-body">
      <p class="text-white">{{desc}} </p>
    </div>
    <div class="card-footer">
      <button class="btn btn-done mr-3"><i class="fa fa-check-circle mr-2" style="font-size: 1rem;"></i>Done</button>
      <button class="btn btn-delete"><i class="fa fa-trash"></i></button>
    </div>
	</div>
</template>

<script>
export default {

  name: 'Task',

  props: ['id', 'name','desc', 'isDone', 'index'],


  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.card{
  box-shadow: 0 4px 4px rgba(0,0,0,25%);
  background-color: #2A4D57;
  min-height: 300px;
  max-height: 300px;
  overflow: auto;
  border-radius: 16px;
}
.card-header{
  background-color: rgba(0,0,0, 62%);
}

.card-header h3{
  color: #D1D1D1;
  font-family: 'Pacifico', cursive;
  font-size: 1.1rem;
  letter-spacing: 2.5px
}
.card-body{
    font-family: 'Chilanka', cursive;
    color: #ECECEC;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
}
.card-footer{
  border-top: 1px solid #101D21;
  display: flex;
  padding-top: 1.2rem;
  padding-bottom: 1.1rem;
}
.btn-done{
  width: 100%;
  background-color: #26A65B;
  color: #E3E3E3;
  font-family: 'Pacifico', cursive;
  box-shadow: 4px 4px 4px rgba(0,0,0,25%);
  border-radius: 10px;
  font-size: 1.2rem;
}
.btn-delete{
  width: 30%;
  background-color: rgba(231, 76, 60,  80%);
  font-size: 1.2rem;
  box-shadow: 4px 4px 4px rgba(0,0,0,25%);
  border-radius: 10px;
  color: #E3E3E3;
}
</style>
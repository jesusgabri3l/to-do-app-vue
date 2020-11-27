<template>
	<div class="card" v-bind:id="index">
		<div class="card-header">
			<h3 class="text-center" v-bind:class="{ done: isDone }">
        <router-link to = "/" >
          {{name}} <i class=" ml-2 fas fa-angle-right" style="vertical-align: bottom;"></i>
        </router-link>
      </h3>
     
       
		</div>
    <div class="card-body">
      <p class="text-white" v-bind:class="{ done: isDone }">{{desc}}</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-done mr-3" v-bind:disabled="isDone" @click = "doneTask(index)"><i class="fa fa-check-circle mr-2" style="font-size: 1rem;"></i>Done</button>

      <button class="btn btn-delete" @click = "confirmAlert(index)"><i class="fa fa-trash"></i></button>
    </div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {

  name: 'TaskCard',

  props: ['id', 'name','desc', 'isDone', 'index'],

  methods:{
    ...mapMutations(['doneTask', 'deleteTask']),

     showDoneAlert(){
        this.$swal({
        icon: 'success',
        title: 'Your task has been done!',
         timer: 1500,
         allowOutsideClick: false,
         showConfirmButton: false,
         iconColor: '#26A65B'
        })
      },

    confirmAlert(index){
      let text = this.isDone ? "You have done this task already, you're free to delete it. But, are you sure?" : "Hey, you haven't done this task yet, are you sure to delete it?"
      this.$swal(
        {
        title: 'Are you sure?',
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal(
            'Deleted!',
            'Your task has been deleted.',
            'success'
          )
            this.deleteTask(index)
        }

      }
      )
    },


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
  font-size: 1.15rem;
  letter-spacing: 2.5px
}
.card-body{
    font-family: 'Chilanka', cursive;
    color: #ECECEC;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
}
.card-footer{
  border-top: 1px solid #101D21;
  display: flex;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
}
.btn-done{
  width: 100%;
  background-color: var(--doneColor);
  color: #E3E3E3;
  font-family: 'Pacifico', cursive;
  box-shadow: 4px 4px 4px rgba(0,0,0,25%);
  border-radius: 10px;
  font-size: 1.15rem;
}
.btn-delete{
  width: 30%;
  background-color: var(--deleteColor);
  font-size: 1.15rem;
  box-shadow: 4px 4px 4px rgba(0,0,0,25%);
  border-radius: 10px;
  color: #E3E3E3;
}
.done{
  text-decoration: line-through;
  text-decoration-color: var(--deleteColor);
   text-decoration-style: wavy;
}
a{
  color: #E3E3E3;
}
</style>
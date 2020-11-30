<template>
	<div style="position: relative;">
    <button class="btn-addTask btn" @click="showModal"><i class="fa fa-plus"></i></button>
	<div class="row" >
		<div class="col-md-3" style="margin-top: 1.5rem; " v-for = "(task, index) of tasks">
			<TaskCard v-bind="task" v-bind:index="index"/>
		</div>
	</div>
 
<!-- MODAL PARA AGREGAR -->
  <b-modal ref="addTaskModal" hide-footer title="Add new task"    @show="resetModal" @hidden="resetModal">
      <div class="d-block text-center">
        <div class="form-row">
          <div class="col-md-12 form-group">
            <label for="">Task name</label>
            <input type="text" class="form-control taskInput" v-model = "newTask.name" placeholder="To do my room">
          </div>
                </div>
          <div class="form-row">
          <div class="col-md-12 form-group">
            <label for="">Task description</label>
            <textarea class="form-control taskInput" v-model = "newTask.desc" placeholder="I have to do my room, because is very messy"></textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer d-flex justify-content-center">
      <button class="btn btn-done" @click="fieldsValidation">
        <i class="fa fa-plus mr-2"  style="font-size: 1rem;"></i>Add task
      </button>
      </div>
    </b-modal>

	</div>
</template>

<script>
 import {mapState, mapMutations} from 'vuex'
 import TaskCard from '@/components/TaskCard'
export default {

  name: 'TaskList',
  components: {
  	TaskCard
  },
  data () {
    return {
      newTask:{
        name: '',
        desc : ''
      }
    }
  },
  	computed : {
      ...mapState(['tasks']),
   },
   methods: {

   	...mapMutations(['addTask']),

     showModal() {
        this.$refs['addTaskModal'].show()
      },

       hideModal() {
        this.$refs['addTaskModal'].hide()
      },

      resetModal() {
        this.newTask.name = ''
        this.newTask.desc = ''
        this.hideModal()
      },

      showAddedTaskAlert(){
        this.$swal({
        icon: 'success',
        title: 'Task added!',
         timer: 1500,
         showConfirmButton: false,
         iconColor: '#26A65B'
        })
      },

      fieldsValidation(){

      let inputs = document.querySelectorAll('.taskInput')
      let validation = true
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('input-wrong', 'animate__animated', 'animate__shakeX', 'animate__fast')
        if(inputs[i].value == '' || inputs[i].value == null){
          inputs[i].classList.add('input-wrong', 'animate__animated', 'animate__shakeX', 'animate__fast')
          validation = false
        } 
      }
      if(validation){
        this.hideModal()
        this.showAddedTaskAlert()
        this.addTask(this.newTask)
      }
      },
   }
}
</script>

<style lang="css" scoped>
.btn-addTask{
  position: absolute; 
  top: -40px;
  left: -50px;
  background-color: var(--doneColor);
  color: #E3E3E3;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  box-shadow: 4px 4px 4px rgba(0,0,0,25%);
  display: flex;
  align-items: center;
  justify-content: center;

}
.btn-done{
  width: 70%;
  background-color: var(--doneColor);
  color: #E3E3E3;
  font-family: 'Pacifico', cursive;
  box-shadow: 4px 4px 4px rgba(0,0,0,25%);
  border-radius: 10px;
  font-size: 1.2rem;
}
.form-group label{
 font-family: 'Chilanka', cursive;
 font-weight: 400;
}




</style>
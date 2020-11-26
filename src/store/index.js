import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	tasks: []
},

  mutations: {

  	addTask(state,task){
     let id = state.tasks.length + 1
  		state.tasks.push({
        id: id,
        name: task.name,
        desc: task.desc,
        isDone: false
      })
  	},
    doneTask(state, index){
      state.tasks[index].isDone = true
    },
    deleteTask(state, index){
      state.tasks.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})

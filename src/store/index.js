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
      console.log(state.tasks)
  	}
  },
  actions: {
  },
  modules: {
  }
})

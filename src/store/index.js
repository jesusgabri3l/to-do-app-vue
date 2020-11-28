import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	tasks: [],
    profile: {
      name: 'Jesús Gabriel',
      nickname: 'jesusgabri3l',
      description: 'I want to be a front-end developer'
    }
},
  mutations: {

    initialiseStore(state) {
      let datos = JSON.parse(localStorage.getItem('tasks'))
      if(datos == null) {
        state.tasks = []
      }else{
        state.tasks = datos
      }
    },

    initialiseProfile(state){
      let profile = JSON.parse(localStorage.getItem('profile'))
      console.log(profile)
      if(profile == null){
        localStorage.setItem('profile', JSON.stringify(state.profile))
      }else{
        state.profile = profile
      }
    },


  	addTask(state,task){
     let id = state.tasks.length + 1
  		state.tasks.push({
        id: id,
        name: task.name,
        desc: task.desc,
        isDone: false
      })
      localStorage.setItem('tasks',  JSON.stringify(state.tasks));
  	},
    doneTask(state, index){
      state.tasks[index].isDone = true
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, index){
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  actions: {
  },
  modules: {
  }
})

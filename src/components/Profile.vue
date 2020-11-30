<template>
	<div class="card">
		<div class="card-header">
			<h4>My profile<i class="fa fa-user ml-2"></i></h4>
		</div>
		<div class="card-body">
			<div class="form-row">

				<inputType col = "col-md-6" label = "Name" placeholder = "Jesús Gabriel" v-bind:valueInput = "profile.name" @input-value = "profile.name = $event" />

				<inputType col = "col-md-6" label = "Nickname" placeholder = "jesusgabri3l" v-bind:valueInput = "profile.nickname" @input-value = "profile.nickname = $event" />
			</div>

			<div class="form-row mt-3">
				<inputType col = "col-md-12" label = "Description" placeholder = "Some short description" v-bind:valueInput = "profile.description" @input-value = "profile.description = $event" />
			</div>
		</div>
		<div class="card-footer d-flex justify-content-center align-items-center py-3">
			<button class="btn btn-done" style="width: 50%;" @click = "editProfile(profile); showUpdatedAlert()"><i class="fa fa-save mr-2"></i>Save profile</button>
      
		</div>
	</div>
</template>

<script>
import InputType from '@/components/InputType'
import {mapState, mapMutations} from 'vuex'
export default {

  name: 'Profile',
  components:{
  	InputType
  },
  data () {
    return {
   
    }
  },
  methods:{
    ...mapMutations(['editProfile']),
  	 isFocus(event){
  		event.target.parentElement
  	},
    showUpdatedAlert(){
       this.$swal({
        icon: 'success',
        title: 'Profile updated!',
         timer: 1500,
         showConfirmButton: false,
         iconColor: '#26A65B'
        })
    },

  },
  computed : {
      ...mapState(['profile']),
   }
}
</script>

<style lang="css" scoped>
.card{
	min-width: 80%;
	max-width: 80%;
}
.card-body{
	padding: 2rem;
}
h4{
	font-family: 'Pacifico', cursive;
}
.btn-done{
  width: 30%;
  background-color: var(--doneColor);
  color: #E3E3E3;
  font-family: 'Pacifico', cursive;
  box-shadow: 4px 4px 4px rgba(0,0,0,25%);
  border-radius: 10px;
  font-size: 1.2rem;
}

</style>
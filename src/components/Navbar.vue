<template>
	<div>
		<div class="navbar-container">
			<div class="nav">
				<div class="nav-logo-container">
					<h1 class="m-0">To-do List</h1>
				</div>
				<div class="nav-links-container">
					<router-link to = "/tasks" >
						<i class="fa fa-tasks mr-2" style="font-size: 1rem; "></i>Tasks
					</router-link>
      				<router-link 
      				:to="{name : 'Profile', params : {nickname : profile.nickname} }">
      					<i class="fa fa-id-badge mr-2" style="font-size: 1rem;"></i>{{profile.nickname}}
      				</router-link>	
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {

  name: 'navbar',

  data () {
    return {

    }
  },
 computed : {
      ...mapState(['profile']),
   }
}
</script>

<style lang="css" scoped>
	.navbar-container{
		width: 100%;
		height: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color:	rgba(42, 54, 87, 51%);
		box-shadow: 0 4px 4px  rgba(0,0,0,25%)
	}
	.nav{
		width: 85%;
		height: 100%;
		display: flex; 
		justify-content: space-between;
		align-items: center;
		background-color: transparent;
	}
	.nav-logo-container{
		font-family: 'Pacifico', cursive;
		color: #ECECEC;
	}
	.nav-links-container a{ 
		font-family: 'Chilanka', cursive;
		color: #ECECEC;
		padding-right: 0;
		padding-left: 4rem;
		font-size: 1.2rem;
	}
	.router-link-exact-active{
		text-decoration: underline;
		padding-bottom: .5rem;
		text-decoration-style: wavy;
		text-decoration-color: var(--doneColor)
	}
	a:hover{
		text-decoration: underline;
		padding-bottom: .5rem;
		text-decoration-style: wavy;
		text-decoration-color: var(--doneColor);
		transition: all 1.2s;
	}
</style>
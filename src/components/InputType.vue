<template>
	<div class="form-group" v-bind:class="[col]">
		<label for="">{{label}}</label>
		<div class="form-control d-flex align-items-center justify-content-between py-0 px-0 " style="position: relative;">
			<input type="text" class="input-unstyled" v-bind:placeholder="placeholder" v-model = "valueInput">
			<i class="far fa-edit px-2"></i>	
		</div>
	</div>
</template>

<script>
export default {
  name: 'InputType',

  props: ['col', 'label', 'placeholder', 'valueInput'],

  data () {
    return {
    	
    }
  },
  methods:{

  }
}
</script>

<style lang="css" scoped>
</style>
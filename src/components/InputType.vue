<template>
	<div class="form-group" v-bind:class="[col]">
		<label for="">{{label}}</label>
		<div class="form-control d-flex align-items-center justify-content-between py-0 px-0 " style="position: relative;">
			<input type="text" class="input-unstyled" v-bind:placeholder="placeholder" v-model = "valueInput" v-on:change="$emit('input-value', value);">
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

  },

  
}
</script>

<style lang="css" scoped>
.input-wrong{
  border: 2px solid rgba(231, 76, 60,  80%) !important;
  transition: all 1.5s !important;
  box-shadow: 0 0 4px 2px rgba(231, 76, 60,  30%);
}
</style>
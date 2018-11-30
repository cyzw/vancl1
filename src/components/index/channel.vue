	<template>
		<div>
			<div class='c-header' slot='title'><span class='back' @click='back()'><</span><span>频道</span></div>
			<ul class='c-list'>
				<li v-for='(v,i) in list' :key='i'>
					<router-link :to="'/same/'+v.id"><img v-bind:src="v.img"/></router-link>
				</li>
			</ul>
		</div>
	</template>
	<script>
		export default{
			data(){
				return{
				   list:[
					   {img:require('../../assets/images/02.jpg'),id:1},
					   {img:require('../../assets/images/03.jpg'),id:2},
					   {img:require('../../assets/images/04.jpg'),id:3},
					   {img:require('../../assets/images/07.jpg'),id:4},
					   {img:require('../../assets/images/05.jpg'),id:5},
					   {img:require('../../assets/images/06.jpg'),id:6},
					   {img:require('../../assets/images/01.jpg'),id:7},
					   {img:require('../../assets/images/10.jpg'),id:8},
					   {img:require('../../assets/images/08.jpg'),id:9},
					   {img:require('../../assets/images/09.jpg'),id:10},
					   {img:require('../../assets/images/11.jpg'),id:11},
					   {img:require('../../assets/images/12.jpg'),id:12}
				   ]
				}
			},
			mounted(){
				console.log(this.$route.params)
			},
			methods:{
				back(){
					this.$router.go(-1)
				}
			}
		}

	</script>
	<style scoped>
		body{
			margin:0px;
			font-size:16px;
		}
		.c-list li{			
			margin: 0px 0px 10px;	
		}
		.c-list li:last-child{
			margin-bottom: 70px;
		}
	</style>
<template>
  <div id="app">
<!-- 		{{hides()}} -->
		<slot name='title'>
			
		</slot>
	
		<ul class='nav-list clear' v-show='flag'>
				<li>
					<router-link to='/home'><span class='home'></span></router-link>
				</li>
				<li>
					<router-link to='/classify'><span class='classify'></span></router-link>
				</li>
				<li>
					<router-link to='/channel'><span class='channel'></span></router-link>
				</li>
				<li>
					<router-link to='/trolley'><span class='trolley'></span></router-link>
				</li>
				<li>
					<router-link to='/my'><span class='my'></span></router-link>
				</li>
		</ul>
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      flag:true,
			show:true,
			msg:''
		}
	},
	mounted(){
	//	console.log(this.$route.params.id)
		if(this.$route.params.id==1){
			this.$route.push('/shoes')
		}else if(this.$route.params.id==2){
			this.$route.push('/knitwear')
		}
		 
	},
	methods:{
			back(){
				this.$router.go(-1)
			}
	}
}
</script>

<style lang="scss">
	body{
		font-size: 12px;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
	width:100%;
	overflow-X:hidden;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #666;
  text-decoration: none;
	display:inline-bolck;
}
img{
	width:100%;
}
input{
	box-sizing:border-box;
	border:none;
	outline:none;
}
.nav-list{
    display:flex;
    width:100%;
    position:fixed;
    bottom:0px;
    left:0px;
    background: #fff;
    border-top:1px solid #ccc;
    height:67px;
    margin:0px;
		z-index:99;
}
.nav-list li{
  flex:1;
  height:67px;
	text-align: center;
}
.nav-list li span{
		width:40px;
		height:67px;
		display: inline-block;		
		transform: scale(0.6);
}
.home{
  background:url('./assets/images/navBgimgNew.png') no-repeat -10px -4px;  
}
.classify{
  background:url('./assets/images/navBgimgNew.png') no-repeat -10px -84px;  
}
.channel{
  background:url('./assets/images/navBgimgNew.png') no-repeat -11px -167px;  
}
.nav-list li .trolley{
	width:50px;
  background:url('./assets/images/navBgimgNew.png') no-repeat -5px -245px;  
}
.nav-list li .my{
  background:url('./assets/images/navBgimgNew.png') no-repeat -10px -325px;  
}
.router-link-active .home{
  background:url('./assets/images/navBgimgNew.png') no-repeat -10px -404px;  
}
.router-link-active .classify{
		background:url('./assets/images/navBgimgNew.png') no-repeat -10px -484px;  
}
.router-link-active .channel{
		background:url('./assets/images/navBgimgNew.png') no-repeat -11px -566px;  
}
li .router-link-active .trolley{
		background:url('./assets/images/navBgimgNew.png') no-repeat -5px -645px;  
}
li .router-link-active .my{
		background:url('./assets/images/navBgimgNew.png') no-repeat -10px -725px;  
}
.clear::before{
	content:'';
	clear:both;
	display:table;
}
.c-header{
	width:100%;
	height:48px;
	position:relative;
	background:#b81c22;
	color:#fff;
	font-size:16px;
	line-height:48px;
	margin-bottom: 3px;
	text-align:center;
}
.back{
	position:absolute;
	left:20px;
	top:50%;
	margin-top:-24px;
	font-size:24px;
}

</style>

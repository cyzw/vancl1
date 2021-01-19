<template>
	<div>
	<div class='c-header' slot='title'>
		<span class='back' @click='back()'><</span>
		<span>测试测试频道</span>
	</div>
	<div>
		<div >
			<img src="../../assets/images/201.jpg" alt="" />
			<img src="../../assets/images/202.jpg"/>
		</div>
		<div>
			<ul class='s-list'>
				<li v-for='(v,i) in list'>
					<router-link to='/prodetails'>
						<div class='s-img'>
							<img :src="v.img" alt="" />
							<span class='s-circle'>抢</span>
						</div>
						<p>{{v.desc}}</p>
						<p class='s-p'>特惠价{{v.price}}</p>
					</router-link>
				</li>
			</ul>
			<div class='none'></div>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.$http.get('./data/data.json')
				.then((response)=>{
				
					console.log(this.$route.params)
					if(this.$route.params.id==1){
						this.list = response.data.shirt
					}else if(this.$route.params.id==2){
						this.list = response.data.relaxshirt
					}else if(this.$route.params.id==4){
						this.list = response.data.knitwear
					}
					else if(this.$route.params.id==12){
						this.list = response.data.socks
					}
					else if(this.$route.params.id==6){
						this.$router.push(`/shoes`)
					}
					
//					console.log(this.list)
				})
				.catch(function (error) {
					console.log(error);
				})
				.then(function () {
					// always executed
				});
			
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
	
</script>

<style>
	.s-list{
		/*display: flex;*/
		width: 100%;
	}
	.s-list li{
		float: left;
		width: 50%;
		word-wrap:break-word;	
		text-align: center;
		padding:10px 10px ;
		box-sizing: border-box;
		
	}
	.s-p{
		color:#B81B22;
		margin-top: 5px;
	}
	.s-img{
		position: relative;
	}
	.s-circle{
		position: absolute;
		width: 36px;
		height: 36px;
		border-radius:50%;
		background: #B81B22;
		color: #fff;
		top:0px;
		right: 0px;
		text-align: center;
		line-height: 36px;
   		font-size: 18px;
	}
	.none{
		clear: both;
		margin-bottom: 70px;
	}
</style>
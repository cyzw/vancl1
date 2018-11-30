<template>
	<div>
		<div class='c-header' slot='title'><span class='back' @click='back()'><</span><span>鞋频道</span></div>
		<div>
			<ul class='s-list'>
				<li v-for='(v,i) in shoesList' :key='i'>
					<router-link to='/#'>
						<img :src='v.img'/>
					</router-link>	
					<img src="" alt="" />
				</li>				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				shoesList:[
					{
						id:1,
						img:require('../../assets/images/2018_8_29_9_31_37_9283.jpg')
					},
					{
						id:2,
						img:require('../../assets/images/2018_8_29_9_32_7_2419.jpg')
					},
					{
						id:3,
						img:require('../../assets/images/2017_6_22_13_46_30_6475.jpg')
					},
					{
						id:4,
						img:require('../../assets/images/2017_6_22_13_57_17_3208.jpg')
					},
					{
						id:5,
						img:require('../../assets/images/2018_10_26_14_7_45_6601.jpg')
					},
					{
						id:6,
						img:require('../../assets/images/2018_10_26_13_59_3_6461.jpg')
					},
					{
						id:7,
						img:require('../../assets/images/2018_8_29_9_33_47_4215.jpg')
					},
					{
						id:8,
						img:require('../../assets/images/2018_8_29_9_34_2_974.jpg')
					},
					{
						id:9,
						img:require('../../assets/images/2018_8_29_9_34_20_7482.jpg')
					},
					{
						id:10,
						img:require('../../assets/images/2018_8_29_9_34_44_1470.jpg')
					},
					{
						id:11,
						img:require('../../assets/images/2018_8_29_9_43_26_5757.jpg')
					},
					{
						id:12,
						img:require('../../assets/images/2018_8_29_9_42_14_8984.jpg')
					},
					{
						id:13,
						img:require('../../assets/images/2018_8_29_9_32_7_2419.jpg')
					},
					{
						id:14,
						img:require('../../assets/images/2018_8_29_9_44_44_6869.jpg')
					},
					{
						id:15,
						img:require('../../assets/images/2018_8_29_9_45_27_1127.jpg')
					},
					{
						id:16,
						img:require('../../assets/images/2018_8_29_9_45_9_8621.jpg')
					},
					{
						id:17,
						img:require('../../assets/images/2018_6_28_15_40_44_4238.jpg')
					},
					{
						id:18,
						img:require('../../assets/images/2017_6_22_13_56_43_8983.jpg')
					},
					{
						id:19,
						img:require('../../assets/images/2017_6_22_13_56_59_4351.jpg')
					},
					{
						id:20,
						img:require('../../assets/images/2017_6_22_13_57_17_3208.jpg')
					},
					{
						id:21,
						img:require('../../assets/images/2017_6_22_13_57_47_4390.jpg')
					},
					{
						id:22,
						img:require('../../assets/images/2018_6_28_15_41_26_9632.jpg')
					},
					{
						id:23,
						img:require('../../assets/images/2017_6_22_13_59_55_2173.jpg')
					},
					{
						id:24,
						img:require('../../assets/images/2017_6_22_14_0_12_5589.jpg')
					},
					{
						id:25,
						img:require('../../assets/images/2018_6_28_15_42_11_4611.jpg')
					},
					{
						id:26,
						img:require('../../assets/images/2018_6_28_15_36_59_2821.jpg')
					},
					{
						id:27,
						img:require('../../assets/images/2017_6_22_14_1_50_8460.jpg')
					}
					
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
	.s-list{
		overflow: hidden;		
	}
	.s-list li{
		float:left;
		width: 50%;
		margin-top: -17px;
	}
	.s-list li:nth-of-type(7),.s-list li:nth-of-type(12),
	.s-list li:nth-of-type(17),.s-list li:nth-of-type(22),.s-list li:nth-of-type(25){
		width: 100%;
	}
	.s-list li:nth-of-type(26),.s-list li:nth-of-type(27){
		margin-bottom: 50px;
	}
	.s-list li a{
		display: block;
	}
</style>
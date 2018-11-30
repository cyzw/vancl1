<template>
	<div>
		<div class='c-header' slot='title'><span class='back' @click='back()'><</span><span>商品详情</span></div>
		<div id='pro'>			
			<mt-swipe :auto="4000">
			<mt-swipe-item> 
				<router-link to='/k'>
					<img src='../../assets/images/33.jpg' />
				</router-link>
			</mt-swipe-item>	
			<mt-swipe-item>
				<router-link to='/k'>
					<img src='../../assets/images/33.jpg' />
				</router-link>
			</mt-swipe-item>
			<mt-swipe-item>
				<router-link to='/k'>
					<img src='../../assets/images/33.jpg' />
				</router-link>
			</mt-swipe-item>
			</mt-swipe>
			<div class='p-middel'>
				<p>凡客衬衫，牛津纺 领尖扣 男款 天蓝色</p>
				<p class='p-price'><del>398元</del>198元</p>
				<p class='p-check'><router-link to='/#'>充100返100，点击充值</router-link></p>
				<p class='p-free'><span>免邮</span>全场购物满199元免运费</p>
			</div>
			<div class='p-select'>
				<p @click='show()'>
					<span class='p-icon'></span>
					<span class='p-gt'></span>
					<span class='p-selected'>选择颜色/尺码</span>
				</p>
				<div class='p-options animated slideDown slideUp ' v-show='flag'>
					<p>选择颜色</p>
					<div class='p-color'>
						<span @click='selectcolor()'>天蓝色</span>
						<span @click='selectcolor()'>天蓝色</span>
						<span @click='selectcolor()'>天蓝色</span>
						<span @click='selectcolor()'>天蓝色</span>
						<span @click='selectcolor()'>天蓝色</span>
						<span @click='selectcolor()'>天色</span>
						<span @click='selectcolor()'>天蓝色</span>
					</div>
					<hr/>
					<p>尺码选择</p>					
					<div class='p-size'>
						<span @click='selectsize()'>S</span>
						<span @click='selectsize()'>m</span>
						<span @click='selectsize()'>L</span>
						<span @click='selectsize()'>xl</span>
						<span @click='selectsize()'>xxl</span>
					</div>
					<hr/>
					<p>购买数量</p>					
					<div class='p-num'>
						<span @click='reduce()'></span>
						<span>{{num}}</span>
						<span @click='add()'></span>
					</div>
					<hr />
				</div>
				<hr v-show='flag2'/>
			</div>
		</div>	
			<div class='p-details'>
				<mt-navbar v-model="selected"  :class="tabBarFixed == true ? 'isFixed' :''" id='tabBar'>
				  <mt-tab-item id="1">商品详情</mt-tab-item>
				  <mt-tab-item id="2">评论</mt-tab-item>
				  <mt-tab-item id="3">咨询</mt-tab-item>
				</mt-navbar>
				<hr class='p-h'/>
				<!-- tab-container -->
				<mt-tab-container v-model="selected">
				  <mt-tab-container-item id="1">
					 <img src='../../assets/images/34.jpg' >
					 <img src='../../assets/images/35.jpg' >
					 <img src='../../assets/images/36.jpg' >
					 <img src='../../assets/images/37.jpg' >
					 <img src='../../assets/images/38.jpg' >
					 <img src='../../assets/images/34.jpg' >
					 <img src='../../assets/images/39.jpg' >
					 <img src='../../assets/images/40.jpg' >
					 <img src='../../assets/images/41.jpg' >
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
					<ul class='p-comment'>
						<li>
							<p>
								<span class='p-name'>来自:<small>XXXX</small></span>
								<span class='p-time'>2018-11-16</span>
							</p>
							<p>质量很好</p>
						</li>
						<li>
							<p>
								<span class='p-name'>来自:<small>XXXX</small></span>
								<span class='p-time'>2018-11-16</span>
							</p>
							<p>质量很好</p>
						</li>
					</ul>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
					<mt-cell v-for="n in 6" :title="'选项 ' + n" />
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
			<div class='p-footer'>
				<router-link to='/trolley'>
					<span class='p-trolley'></span>
				</router-link>
				<router-link to='/#' class='p-add'>加入购物车</router-link>
			</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:false,
				flag2:true,
				num:1,
				selected:"1",
				tabBarFixed:false,
				list:[]
			}
		},
		mounted(){
			this.$http.get('./data/details.json')
				.then((response)=>{
					console.log(response);
					this.list = response.data.jack
					console.log(this.list)
				})
				.catch(function (error) {
					console.log(error);
				})
				.then(function () {
					// always executed
				}); 
		},
		methods:{
			show(){
				this.flag=!this.flag;
				this.flag2=!this.flag2
			},
			reduce(){
				if(this.num<=1){
					alert('购买数量为1-100');					
				}else{
					--this.num
				}				
			},
			add(){
				if(this.num>100){
					alert('购买数量为1-100')
				}else{
					++this.num
				}				
			},
			selectcolor(){
				
			},
			back(){
				this.$router.go(-1)
			}
		}
	}

</script>
<style>
	#pro{
		padding: 10px 25px 0px;
	}
	#pro .mint-swipe{
		padding:0px 10px;
	}
	.p-free,.p-options p{
		padding:10px 0px;
	}
	#pro .mint-swipe-items-wrap{
		height:0px;
		padding-bottom:97%;
	}
	#pro .mint-swipe-indicators{
		bottom:30px;
	}
	#pro .mint-swipe-indicator{
		opacity:0.6;
	}
	#pro .mint-swipe-indicator.is-active{
		background:red;	
	}
	.p-middel p{
		margin:10px 0px;
		font-size:14px;
		color:#4c4c4c;
	}
	.p-free{
		border-top:1px solid #ccc;
		border-bottom:1px solid #ccc;
		color:#717070;
	}
	.p-free span{
		color:white;
		display:inline-block;
		background:#b81c22;
		padding:0px 2px;
		font-size:12px;	
	}
	.p-check a,.p-middel p.p-price,del{
		color:#c8161e;
		font-size:14px;
	}
	.p-middel p.p-price{
		font-size:16px;
	}
	del,.p-free span,.p-icon,.p-options span{
		margin-right:8px;
	}
	.p-select{
		cursor:pointer;
	}
	.p-select>p{
		background:#f5f5f5;
		padding:10px;
		font-size:13px;
	}
	.p-select p span{
		width:1.35em;
		height:1.35em;
		background-size:contain;
	}
	.p-icon{
		float:left;		
		background:url(../../assets/images/size_icon.jpg) no-repeat center center;		
	}
	.p-gt{
		float:right;
		background:url(../../assets/images/swordr_icon.jpg) no-repeat center center;
	}
	.p-options span{
		display:inline-block;
		padding:0.5em 0.8em;
		border:1px solid #ccc;
		margin:0px 0.2em 0.5em 0px;
	}
	.p-num,.p-comment li p{
		overflow:hidden;
	}
	.p-num span{
		float:left;
		width:24px;
		height:24px;
		line-height:24px;
		padding:0px;
		margin-right:10px;
		text-align:center;
		border:1px solid #666;
		border-radius:2px;
	}
	.p-num span:first-child{
		background:#f5f5f5 url(../../assets/images/minus.jpg) no-repeat center center;
		background-size:contain;
		border:none;
	}
	.p-num span:last-child{
		background:#4d4d4d url(../../assets/images/plus.jpg) no-repeat center center;
		background-size:contain;
	}
	hr{
		margin:10px 0px 0px 0px;
		color:#4d4d4d;
	}
	.p-h{
		margin-top:0px;
	}
	.mint-navbar .mint-tab-item.is-selected{
		color:#c8161e;
		border:none;
	}
	.p-comment li{
    	padding: .5em 2em 0 2em;
	    color: #999;
	    border-bottom: 1px dashed #999;
	    font-size: 15px;
	}
	.p-comment li p{
		margin-bottom:4px;
	}
	.p-name{
		float:left;
	}
	.p-time{
		float:right;
	}
	.isFixed{
		position:fixed;
		top:0px;
		left:0px;
	}
	.p-footer{
		position:fixed;
		bottom: 0px;
		left: 0px;
		width:100%;
		border-top:1px solid #ccc;
		height: 67px;
		z-index: 999;
		background: white;
	} 
	.p-footer a{
		float:left;
		width:50%;
		height:100%;
		text-align: center;
		line-height: 67px;
	}
	.p-add{
		color:#fff;
		background:#B81B22;
		font-size: 16px;
	}
	.p-trolley{
		display: inline-block;
		width: 55px;
		height: 41px;
		background:url(../../assets/images/navBgimgNew.png) no-repeat -5px -245px ;
		transform: scale(0.7);
		position: relative;
    	top: 10px;
	}
</style>
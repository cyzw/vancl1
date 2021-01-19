
	<template>
		<div id='home'>
			<div class='banner' id='mybanner'>
				<mt-swipe :auto="4000">
				  <mt-swipe-item>
					<router-link to='/k'>
						<img src='../../assets/images/14.jpg' />
				    </router-link></mt-swipe-item>
				  <mt-swipe-item>
					<router-link to='/k'>
						<img src='../../assets/images/15.jpg' />
					</router-link></mt-swipe-item>
				  <mt-swipe-item>
					<router-link to='/k'>
						<img src='../../assets/images/16.jpg' />
					</router-link></mt-swipe-item>
				  <mt-swipe-item>
					  <router-link to='/k'>
						  <img src='../../assets/images/17.jpg' />
					  </router-link></mt-swipe-item>
				  <mt-swipe-item>
					<router-link to='/k'>
						<img src='../../assets/images/18.jpg' />
					</router-link></mt-swipe-item>
				</mt-swipe>
				<div class='h-search-box'>
					<form mehtod='' action=''class='h-search-form'>
						<input type='button' value="" class='h-search-btn' />
						<input type="text" value="" class='h-search' placeholder='熊本熊' />	
					</form>
					<router-link to='/l'>
						<span class='h-msg'>...</span>
						<sup class='h-circle'></sup>
					</router-link>
				</div>	
			</div>
			<div class='h-menu'>
				<p><router-link to='/h'><img src="../../assets/images/19.jpg" /></router-link></p>
				<ul class='h-list'>
					<li>
						<router-link to='/g'>
							<p class='h-p'><img src="../../assets/images/2018_1_10_15_53_37_1188_55x60.jpg"/></p>
							<p>新品测试</p>
						</router-link>
					</li>
					<li>
						<router-link to='/g'>
							<p class='h-p'><img src="../../assets/images/2018_1_10_15_53_37_9203_59x56.jpg"/></p>
							<p>频道测试</p>
						</router-link>
					</li>
					<li>
						<router-link to='/g'>
							<p class='h-p'><img src="../../assets/images/2018_7_26_14_37_13_4000_59x56.jpg"/></p>
							<p>衬衫测试</p>
						</router-link>
					</li>
					<li>
						<router-link to='/g'>
							<p class='h-p'><img src="../../assets/images/2018_8_24_11_37_23_9993_59x59.jpg"/></p>
							<p>帆布鞋测试</p>						
						</router-link>
					</li>
					<li>
						<router-link to='/g'>
							<p class='h-p'><img src="../../assets/images/2018_8_31_16_38_7_8073_59x59.jpg"/></p>
							<p>V团测试</p>
						</router-link>
					</li>
				</ul>
			</div>
			<section>
				<div class="h-class">					
					<div class='h-title'>
						<img   src='../../assets/images/20.jpg'  />
						<span>日式免烫 全新上线</span>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/21.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							 <div class="swiper-container">
								<div class="swiper-wrapper">
								  <div class="swiper-slide" v-for='(v,i) in list'>
								  	<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								  </div>								  
								</div>
							</div> 												
						</div>
					</div>	
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/30.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list2'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/104.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list3'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/105.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list4'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/106.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list5'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/107.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list6'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/108.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list7'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/113.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list8'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/109.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list9'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/110.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list10'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/111.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list11'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					<div class='h-con'>
						<router-link to='/k'>
							<img src='../../assets/images/112.jpg'  class='h-con-img'>
							<span class='up-triangle'></span>
						</router-link >
						<div class='h-middel'>	
							<div class="swiper-container">
								<div class="swiper-wrapper">
								<div class="swiper-slide" v-for='(v,i) in list12'>
									<router-link to='/prodetails'>
										<img :src='v.url'  />
										<p class='h-middel-p'>{{v.title}}</P>
										<p>售价：{{v.original}}</P>
										<span>充值相当于：</span> 
										<span class='h-price'>{{v.present}}</span>
									</router-link>
								</div>								  
								</div>
							</div> 												
						</div>
					</div>
					
				</div>
				<div class='h-footer'>
					<p class='t-p'>1589776****<span>|</span><router-link to='/#'>退出</router-link></p>
					<div class='t-bottom'>				
						<img src="../../assets/images/help.jpg" alt="" />
						<img src="../../assets/images/d2.jpg" alt="" />			
						<img src="../../assets/images/pcsite.jpg" alt="" />			
						<img src="../../assets/images/weixin.jpg" alt="" />				
					</div>
					<p>京ICP证100557号</h3></p>
				</div>
			</section>
		</div>
	</template>

	<script>
		import Swiper from 'swiper';
		export default{
			data(){
				return{
					list:[],
					list2:[],
					list3:[],
					list4:[],
					list5:[],
					list6:[],
					list7:[],
					list8:[],
					list9:[],
					list10:[],
					list11:[],
					list12:[]
				}
			},
			methods:{
				
			},
			mounted(){
				this.$http.get('./data/home.json')
				.then((response)=>{
					this.list = response.data.jack;
					this.list2 = response.data.shirt;
					this.list3 = response.data.shoes;
					this.list4 = response.data.jacket;
					this.list5 = response.data.coat;
					this.list6 = response.data.sport;
					this.list7 = response.data.hoodie;
					this.list8 = response.data.Tshirt;
					this.list9 = response.data.pants;
					this.list10 = response.data.socks;
					this.list11 = response.data.house;
					this.list12 = response.data.bag;
				})
				.catch(function (error) {
					console.log(error);
				})
				.then(function () {
					// always executed
				});  
				new Swiper('.swiper-container', {				
    			initialSlide :0,
					loop:true,
					observer:true,
					slidesPerView: 0,
					pagination: {
					el: '.swiper-pagination',
				   	clickable: true,
				  },
				})
			}
		}	
	</script>
	<style>
		#home img{
			width: 100%;
		}
		#home .h-menu,.h-title,.h-middel{
			padding:10px;
		}
		#home .h-list{
			display: flex;
			margin-top: 10px;
		}
		#home .h-list li{
			flex:1;
		}
		#home .h-list li img{
			width:2.8em;
			height:2.8em;
		}
		#home .h-list p{
			text-align: center;
			font-size: 0.85em;
		}
		#home .h-title{
			text-align:left;
		}
		#home .h-title img{
			width:1.2em;
			height:1.3em;
			vertical-align:sub;
		}
		#home .h-title span{
			font-size:1.3em;
		}
		#home .mint-swipe-items-wrap{
			height:0px;
			padding-bottom:62.8%;
		}
		#home .h-con {
			padding-bottom:10px;
		}			
		#home .h-con a,.banner{
			position:relative;
		}
		#home .up-triangle{
			content:'';
			position: absolute;
			bottom: 0;
			left: .83em;
			border: 1rem solid transparent;
			border-bottom: 1rem solid #fafafa;
		}
		#home .h-search-box{
			position:absolute;
			top:10px;
			width:100%;
		}
		#home .h-search-form{
			display:inline-block;
			width:80%;
			height:2em;
			border-radius:2em;
			background:#fff;
			cursor: pointer;
			border:1px solid #aaa;
			padding:3px 0px 3px 10px;
			box-sizing:border-box;
			position:relative;
			margin-left:10px;
		}
		#home input{
			border:none;	
			outline:none;
			font-size:1em;
			padding-left:10px;
			width:1.3em;
			height:1.3em;			
		}
		#home .h-search-btn{
			background:url(../../assets/images/search2.png) no-repeat;
			background-size: contain;	
			vertical-align: sub;
		}
		#home .h-search{
			width:85%;
			line-height:1.3em;			
		}
		#home .h-msg{
			display:inline-block;
			width:2em;
			height:1.4em;
			border:1px solid #666;
			line-height:1em;
			border-radius:6px;
			margin-left:10px;
			text-align:center;
			font-weight:bold;
		}
		#home .h-circle{
			display:inline-block;
			width:5px;
			height:5px;
			border-radius:50%;
			background:#aaa;
		}
		#home .h-middel{
			width:100%;
		}
		 #home .h-middel .mint-swipe-items-wrap{
			 height:240px;
			 padding-bottom:0px;
			 width:99999px;
		 }
		 #home .h-middel .mint-swipe-item,.swiper-slide{
			 width:131px !important;
			 display:inline-block;
			 position:static;
			 float:left;
			 margin-right:10px;
			 -webkit-transform:translateX(0px);
			 color:#565656;
		 }
		 #home .h-middel .h-middel-p{
			text-overflow: ellipsis;
			line-height: 1.5em;
			overflow: hidden;	
			margin:0.2em 0;
			white-space: nowrap;
		 }
		 #home .h-middel p:nth-of-type(2){
			 color:#ccc;
			 margin-bottom:0.2em;
		 }
		 #home .h-price{
			 color:red;
		 }
		#home .h-footer{
			padding:50px 20px 150px;
			text-align:center;
		}
		#home .h-footer img{
			width: 42px;
			margin-right: 20px;
		}
		.t-p span{
			margin:0px 5px;
		}
		.t-bottom{
			width: 75%;
			margin: 15px auto 10px;
			padding: 20px 0px;
			border-top:1px solid #4c4d4d;
			border-bottom:1px solid #4c4d4d;
		}
		.t-bottom img{
			width: 42px;
			margin-right: 20px;
		}
		#home .t-bottom img:last-child{
			margin-right: 0px;
		}
	</style>
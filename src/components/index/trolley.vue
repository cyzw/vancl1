<template>
	<div>
		<div class='c-header' slot='title'>	<span class='back' @click='back()'><</span><span>购物车</span></div>
		<div class='t-wrap' v-show="flag">
			<div class='t-box'>
				<span>购物车还是空的，赶紧去选购</span>
			</div>
			<div class='t-btn'>
				<router-link to='/#'>我的收藏</router-link>
				<router-link to='/#'>去逛逛</router-link>
			</div>
			<p class='t-p'>1589776****<span>|</span><router-link to='/#'>退出</router-link></p>
			<div class='t-bottom'>				
				<img src="../../assets/images/help.jpg" alt="" />
				<img src="../../assets/images/d2.jpg" alt="" />			
				<img src="../../assets/images/pcsite.jpg" alt="" />			
				<img src="../../assets/images/weixin.jpg" alt="" />				
			</div>
			<p>京ICP证100557号</h3></p>
		</div>
		<div class='t-wrap'>
			<div class='t-title'>
				<span>在售商品：</span>
				<button>删除</button>
				<button>全不选</button>				
			</div>
			<div class='t-tab'>
				<ul class='t-tab-list'>
					<li>
						<input type="checkbox" class='t-checkbox' />
						<router-link to='/#'>
							<img src="../../assets/images/jack.jpg"  />
							<div>
								<p>凡客衬衫 吉国武 轻弹免烫 白领</p>
								<p><span>颜色：白色</span><span>尺码：M</span><span class='t-del'></span></p>
								<p>
									<span class='t-price'>￥498</span>
									<span class='t-reduce t-num' ></span>
									<input type="text" class='t-num t-text' value="1" />
									<span class='t-plus t-num'></span>
								</p>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div class='t-pay'>
				<div class='t-left'>
					<p>需支付:<span class='t-price'>￥996</span></p>
					<p>总金额：996元，以优惠0元</p>
				</div>
				<div class='t-right'> 
					<button><router-link to='/#'>结算(2)</router-link></button>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:false
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
			
	}

</script>
<style scoped>
	.t-wrap{
		padding:0px 20px;
		text-align: center;
	}
	.t-box{
		border:2px solid #ccc;
		height: 200px;
		line-height: 200px;
	}
	.t-title button,.t-right button{
		float:right;
		background:#b81c22;
		color: #fff;
		border: none;
	}
	.t-btn a{
		display: inline-block;
		width: 157px;
		height:35px;
		background:#f5f5f5;
		border-radius:3px;
		text-align: center;
		line-height: 35px;
		margin: 10px 10px 55px 0px;
	}
	.t-p span{
		margin:0px 5px;
	}
	.t-bottom{
		width: 75%;
		margin: 40px auto 10px;
		padding: 20px 0px;
		border-top:1px solid #4c4d4d;
		border-bottom:1px solid #4c4d4d;
	}
	.t-bottom img{
		width: 42px;
		margin-right: 20px;
	}
	.t-bottom img:last-child{
		margin-right: 0px;
	}
	.t-title{
		overflow:hidden;
		padding:5px 0px;
		border-bottom:1px solid #ccc;
	}
	.t-title span,.t-tab-list li img,.t-checkbox,.t-left{
		float:left;
	}
	.t-title button{
		margin-left: 10px;
		padding: 3px 5px;
		border-radius: 3px;
	}
	.t-tab-list{
		text-align: left;
		margin-top:10px;
	}
	.t-tab-list li{
	    border-bottom: 1px solid #e3e3e3;
	    position: relative;
	    overflow: hidden;
	}
	.t-checkbox{
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;		
	}
	.t-tab-list li img{
		width: 84px;
		height: 84px;
		margin: 0px 10px 0px 30px;
	}
	.t-tab-list li p{
		margin-bottom: 10px;
	}
	.t-price{
		color: #b81c22;
	}
	.t-tab-list li span,.t-text{
		margin-right:5px;
	}
	.t-del{
		float: right;
		width: 21.59px;
		height: 21.59px;
		background:url(../../assets/images/del-car.png) no-repeat;
		background-size: cover;		
	}
	.t-num{
		display: inline-block;
		width: 2.3em;
		height: 2.3em;		
		vertical-align: middle;		
	}
	.t-text{
		text-align: center;
		line-height: 2.3em;
		border: 1px solid #ccc;
	}
	.t-reduce{		
		background: url(../../assets/images/reduce.png) no-repeat;
		background-size:cover;
	}
	.t-plus{
		background: url(../../assets/images/n-plus.png) no-repeat;
		background-size:cover;		
	}
	.t-pay{
		position: fixed;
		bottom: 0px;
		left: 0px;
		padding: 0.9rem 0;
	    width: 100%;
	    z-index: 99999;
	    background-color: #f5f5f5;
	    border-top: 1px solid #999;
	    overflow: hidden;
	}
	.t-pay div{
		padding:0px 20px;
		text-align: left;
	}
	.t-right button{
		padding:9px 28px;
		font-size: 14px;
	}
	.t-right button a{
		display: block;
		color: #fff;
	}
</style>
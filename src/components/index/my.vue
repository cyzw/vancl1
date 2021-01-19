<template>	
	<div>
		<div class='c-header' slot='title'><span class='back' @click='back()'><</span><span>个人中心</span></div>		
		<div class='m-img'>
			<div class='m-setting'><span></span></div>
			<div class='m-middel'>					
				<img src="../../assets/images/H5-V0.jpg"/>
				<p>1587271653</p>
				<router-link to='/#' class='m-member'></router-link>
			</div>
			<ul class='m-bottom'>
				<li>积分测试:</li>
				<li>测试余额:</li>
				<li>测试成长值:</li>
			</ul>
		</div>
		<div class='m-content'>
			<ul class='m-list'>
				<p class='m-title'>
					<router-link to='/#' class='m-title1'>全部订单</router-link>
				</p>
				<li>
					<router-link to='/#'>
						<span class='m-one'></span>
						<p>进行中</p>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-two'></span>
						<p>已完成</p>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-three'></span>
						<p>待评价</p>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-four'></span>
						<p>无效</p>
					</router-link>
				</li>
			</ul>
			<ul class='m-list2'>
				<li>
					<router-link to='/#' class='m-list2-one'>
						<span class='m-list2-span'></span>
						<span>充值返现</span>
						<span class='m-last'>充100返100</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-list2-span one'></span>
						<span>我的私人定制</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-list2-span two'></span>
						<span>物流查询</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#' class='last'>
						<span class='m-list2-span three '></span>
						<span>退货记录</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-list2-span four'></span>
						<span>地址管理</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-list2-span five'></span>
						<span>我的礼品卡</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-list2-span six'></span>
						<span>我的优惠券</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#' class='last'>
						<span class='m-list2-span seven '></span>
						<span>我的积分</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-list2-span eight'></span>
						<span>我的评论</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#'>
						<span class='m-list2-span nine'></span>
						<span>我的提问</span>
					</router-link>
				</li>
				<li>
					<router-link to='/#' class='last'>
						<span class='m-list2-span ten'></span>
						<span>投诉建议</span>
					</router-link>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}

</script>
<style scoped>
	a,.m-list2 li span{
		display: block;
		color: #000;
	}
	.m-list2 li span.m-last{
		color:red;
	}
	.c-header{
		margin-bottom:0px;
	}
	.m-img{
		height:17.8em;
		background: url(../../assets/images/uc-topbgd.png) no-repeat center center;
		color: #fff;
	}
	.m-setting{
		text-align: right;
		padding:10px 10px 0px 10px;
	}
	.m-setting span,.m-list li span{
		display: inline-block;
		width: 24px;
		height: 24px;
		background:url(../../assets/images/order-icon.png) no-repeat 0px 0px;
		background-size: 1.8em 8em;;
	}
	.m-middel{
		text-align: center;		
	}
	.m-middel img{
		width:78px;
		height:78px;
		border-radius:50%;
		margin-bottom: 7px;
	}
	.m-member{
		display: inline-block;
		width:60px;
    	height:18px;
		background:url(../../assets/images/H5-NewV0.png) no-repeat;
		margin:8px 0px;
		background-size: cover;
	}
	.m-bottom li{
		display: inline-block;
		width: 32%;
		text-align: center;
		font-size: 13px;
	}
	.m-content{
		background: #f0eff5;
		height:300px;
		padding-top:10px;
	}
	.m-list,.m-list2{
		background: #fff;
		overflow: hidden;
	}
	.m-title1{
		padding:10px;
		font-size: 13px;
		border-bottom: 1px solid #f0eff5;
		position: relative;
	}
	.m-title1::after{
		content: "";
	    position: absolute;
	    top: 50%;
	    right: 1rem;
	    width: 0.8rem;
	    height: 0.8rem;
	    border-top: 1px solid #a5a5a5;
	    border-right: 1px solid #a5a5a5;
	    transform: translateY(-50%) rotate(45deg);
	    -webkit-transform: translateY(-50%) rotate(45deg);
	}
	.m-list li,.m-list2 li{
		float:left;
		width: 25%;
		text-align: center;
		padding: 10px 0px;
	}
	.m-list li span{
		width:37px;
		height:37px;
		transform: scale(0.7);	
	}
	.m-list li span.m-one{
		background: url(../../assets/images/uc-order-icon.png) no-repeat 0px -42px;
	}
	.m-list li span.m-two{
		background: url(../../assets/images/uc-order-icon.png) no-repeat 0px -81px;
	}
	.m-list li span.m-three{
		background: url(../../assets/images/uc-order-icon.png) no-repeat -1px -122px;
	}
	.m-list li span.m-four{
		background: url(../../assets/images/uc-order-icon.png) no-repeat 0px -163px;
	}
	.m-list2{
		margin-top: 10px;		
	}
	.m-list2 li{
		border-bottom:1px solid #ccc;
		padding: 0px;
	}
	.m-list2 li a{
		border-right:1px solid #ccc;
		margin: 18px 0px;
	}
	.m-list2 li a.m-list2-one{
		margin:18px 0px 2px;
	}
	.m-list2 li:nth-of-type(9),.m-list2 li:nth-of-type(10),
	.m-list2 li:nth-of-type(11),.m-list2 li a.last{
		border: none;
	}
	.m-list2 li:first-child{
		margin: 0px;
	}
	.m-list2 li .m-list2-span{
		margin: 0px auto 5px;
		width:36px;
		height:36px;
		background:url(../../assets/images/uc-section-icon.png) no-repeat -3px -5px;
		background-size:3rem 42rem;
	}
	.m-list2 li .m-list2-span.one{
		background-position: -8px -64px;
	}
	.m-list2 li .m-list2-span.two{
		background-position:-8px -582px ;
	}
	.m-list2 li .m-list2-span.three{
		background-position: -8px -633px;
	}
	.m-list2 li .m-list2-span.four{
		background-position: -5px -196px;
	}
	.m-list2 li .m-list2-span.five{
		background-position: -4px -99px;
	}
	.m-list2 li .m-list2-span.six{
		background-position: -6px -243px;
	}
	.m-list2 li .m-list2-span.seven{
		background-position: -5px -439px;
	}
	.m-list2 li .m-list2-span.eight{
		background-position: -5px -302px;
	}
	.m-list2 li .m-list2-span.nine{
		background-position: -2px -393px;
	}
	.m-list2 li .m-list2-span.ten{
		background-position: -5px -487px;
	}
</style>
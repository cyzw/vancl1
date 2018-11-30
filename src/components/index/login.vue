	<template>
		<div>
			<div class='c-header' slot='title'><span class='back' @click='back()'><</span><span>登录</span></div>
			<div>
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1">登录</mt-tab-item>
				  <mt-tab-item id="2">注册</mt-tab-item>
				</mt-navbar>
				<!-- tab-container -->
				<mt-tab-container v-model="selected">
				  <mt-tab-container-item id="1">
					<form method='' action='#' onsubmit="return false">
						<div class='l-input'>
							<input type='text' placeholder='点击输入手机号/Email' value=''v-model='username' />
							<span class='tips'></span>
							<input type='password' placeholder='请输入密码' value='' v-model='password' />
							<input type='submit' value='登录' class='btn' @click='login()' />
							<div class='l-middel clear'>
								<router-link to='/#' class='l-right'>手机账号取回密码<span>></span></router-link>
							</div>							
							<ul class='clear l-bottom'>
								<p>使用其他账号登录</p>
								<li>
									<router-link to='/#' class='l-one'></router-link>										
								</li>
								<li>
									<router-link to='/#' class='l-two'></router-link>										
								</li>
								<li>
									<router-link to='/#' class='l-three'></router-link>										
								</li>
								<li>
									<router-link to='/#' class='l-four'></router-link>										
								</li>
							</ul>							
						</div>	
					</form>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
					 <form method='' action='#' onsubmit="return false">
					 	<div class='l-input'>
					 		<input type='text' placeholder='点击输入手机号/Email' value=''  />
					 		<input type='password' placeholder='请输入密码' value='' />
					 		<input type='password' placeholder='确认密码' value='' />
					 		<input type='submit' value='注册' class='btn' id='regBtn' />							
					 	</div>	
					 </form>
				  </mt-tab-container-item>
				</mt-tab-container>
		
			</div>
		</div>
	</template>

	<script>
		export default{
			data(){
				return{
					selected:'1',
					username:'',
					password:''
				}	
			},
			mounted(){
				this.$http.get('./data/user.json', {
				    params: {
				      user:this.username,
				      pass:this.password
				    }
			  	})
			  	.then(function (response) {
			    	console.log(response.data.user[0].username);
			    	console.log(response.data.user[0].password)
			    	user
			  	})
			 	 .catch(function (error) {
			   	 console.log(error);
			 	 })
			  	.then(function () {
			  	  // always executed
			  	});  
			},
			methods:{
				login(){
					if(this.username==''){
						alert('手机号不能为空')
					}else if(this.password==''){
						alert('密码不能为空')
					}else{
//						this.$router.push('/home')
					}
				}
				
			}
		}

	</script>
	<style scoped>
		.mint-navbar{
			width:87.3%;
			margin:0 auto;
		}
		.mint-tab-item-label{
			font-size:16px;	
		}
		.mint-navbar .mint-tab-item.is-selected {
			border-bottom: 3px solid #b81b22;
			color: #666;
		}
		.l-input{
			padding:2.5em 2em 0 2em;
		}
		.l-input input{
			width:100%;
			background:#f5f5f5;
			padding:0.8em;
			color:#b5b5b5;
		}
		.tips{
			display: block;
			margin:10px 0px;
		}
		.l-input .btn{
			background:#b81b22;
			font-size:16px;
			color:#fff;
			letter-spacing: 10px;
			margin-bottom:0px;
			height:45px;
		}	
		.l-middel{
			margin:10px 0px;
			overflow:hidden;
		}
		.l-middel span{
			margin-left:10px;
		}
		.l-left{
			float:left;
		}
		.l-right{
			float:right;
		}
		.l-bottom{
			margin-top:40px;
		}
		.l-bottom li{
			display:inline-block;
			margin-right:12px;
		}
		.l-bottom li a{
			display:inline-block;
			width:30px;
			height:30px;
			background:url(../../assets/images/loginlogs.png) no-repeat;
			transform:scale(0.8)
		}
		.l-bottom li a.l-one{
			background-position: 1px -4px;
		}
		.l-bottom li a.l-two{
			width: 41px;
			height: 34px;
			background-position: -62px 0px;
		}
		.l-bottom li a.l-three{
			background-position: -136px -2px;
		}
		.l-bottom li a.l-four{
			background-position: -204px -2px;
		}
		p{
			margin-bottom: 5px;
		}
	</style>
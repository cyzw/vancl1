	<template>		
		<div class='classify'>
			<div class='c-header' slot='title'><span class='back' @click='back()'><</span><span>分类</span></div>
			<div class='c-wrap'>
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1">推荐</mt-tab-item>
				  <mt-tab-item id="2">男装</mt-tab-item>
				  <mt-tab-item id="3">女装</mt-tab-item>
				  <mt-tab-item id="4">男鞋</mt-tab-item>
				  <mt-tab-item id="5">女鞋</mt-tab-item>
				  <mt-tab-item id="6">袜品</mt-tab-item>
				  <mt-tab-item id="7">家居</mt-tab-item>
				  <mt-tab-item id="8">童装</mt-tab-item>
				  <mt-tab-item id="9">内衣</mt-tab-item>
				</mt-navbar>
				<!-- tab-container -->
				<mt-tab-container v-model="selected">
					<mt-tab-container-item id="1">
						<div class='c-right' v-for='(v,i) in list' :key='i'>
							<router-link to='/k'>
								<img :src='v.Logo' />
								<p>{{v.TypeName}}</p>
							</router-link>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<div class='c-right' v-for='(v,i) in list2' :key='i'>
							<router-link to='/k'>
								<img :src='v.url' />
								<p>{{v.title}}</p>
							</router-link>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="3">
						<div class='c-right' v-for='(v,i) in list3' :key='i'>
							<router-link to='/k'>
								<img :src='v.url' />
								<p>{{v.title}}</p>
							</router-link>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="4">
						<div class='c-right' v-for='(v,i) in list4' :key='i'>
							<router-link to='/k'>
								<img :src='v.url' />
								<p>{{v.title}}</p>
							</router-link>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="5">
						<div class='c-right' v-for='(v,i) in list5' :key='i'>
							<router-link to='/k'>
								<img :src='v.url' />
								<p>{{v.title}}</p>
							</router-link>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="6">
						<div class='c-right' v-for='(v,i) in list6' :key='i'>
							<router-link to='/k'>
								<img :src='v.url' />
								<p>{{v.title}}</p>
							</router-link>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="7">
						<div class='c-right' v-for='(v,i) in list7' :key='i'>
							<router-link to='/k'>
								<img :src='v.url' />
								<p>{{v.title}}</p>
							</router-link>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="8">
						<div class='c-right' v-for='(v,i) in list8' :key='i'>
							<router-link to='/k'>
								<img :src='v.url' />
								<p>{{v.title}}</p>
							</router-link>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="9">
						<div class='c-right' v-for='(v,i) in list9' :key='i'>
							<router-link to='/k'>
								<img :src='v.url' />
								<p>{{v.title}}</p>
							</router-link>
						</div>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
	</template>

	<script>
		
		export default{
			data(){
				return {
					selected:'1',
					list:[],
					list2:[],
					list3:[],
					list4:[],	
					list5:[],
					list6:[],
					list7:[],
					list8:[],
					list9:[]
					
				}
			},
			mounted(){
				this.$http.get('./data/classify.json')
				.then((response)=>{
					this.list = response.data.recommend;
					this.list2 = response.data.man;
					this.list3 = response.data.woman;
					this.list4 = response.data.manshoes;
					this.list5 = response.data.womanshoes;
					this.list6 = response.data.socks;
					this.list7 = response.data.house;
					this.list8 = response.data.child;
					this.list9 = response.data.shirts;
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
	<style scoped>
		.classify{
			baground:#e5e5e5;
			text-align:center;
		}
		.c-wrap{
			display:flex;
			margin-top:-4px;
		}
		.mint-navbar{
			width:25%;
			flex-direction: column;
			background:#e5e5e5;
			height:660px;
		}
		.mint-tab-container{
			flex-grow:1;
			width:75%;
			margin-bottom: 70px;
		}
		.mint-navbar .mint-tab-item{
			border:1px solid #fff;
			flex:none;
		}
		.mint-navbar .mint-tab-item.is-selected{
			color:#b81c22;
			border:none;
			background:#fff;
		}
		
		.c-right{
			float:left;
			width:33.3%;
		}
		.c-right img{
			width:75%;
			margin:0.83em;
		}
	</style>
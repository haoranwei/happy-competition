<!-- HTML部分 -->
<template>
	<section>
		<header class="top_tips">
			<span class="num_tip" v-if="fatherComponent == 'home'">{{ week }}</span>
			<!-- //如果其父组件是home，则显示level -->
			<span class="num_tip" v-if="fatherComponent == 'item'">题目{{ itemNum }}</span>
			<!-- //如果其父组件是item，则显示题号 -->
		</header>
		<!-- //如果其父组件是home -->
		<div v-if="fatherComponent == 'home'">
			
			<div class="home_logo item_container_style">
				AnswerGame
				有奖问答竞赛<br>
				主办方：<br>
				Redamancy
				.website
			</div>
			<router-link to="login" class="login">登录</router-link>
			<router-link to="item" class="start">开始</router-link>
			<!-- to="item"指定链接的目标路由。在这种情况下，它指向了item路由。 -->
		</div>
		<!-- 如果其父组件是login -->
		<div v-if="fatherComponent == 'login'" >
			<div >
				<ul class="login-container">
					<li>
						<label >用户：</label>
						<input type="text" v-model="email" class="transparent-input">
					</li>
					<br>
					<li>
						<label >密码：</label>
						<input type="text" v-model="password" class="transparent-input">
					</li>
				</ul>
				<button class="login2" @click="login()">登录</button>
				<router-link to="register">
					<button class="register2">注册</button>
				</router-link>"
			</div>
		</div>
		<!-- 如果其父组件是register -->
		<div v-if="fatherComponent == 'register'" >
			<div >
				<ul class="login-container">
					<li>
						<label >用户：</label>
						<input type="text" v-model="email" class="transparent-input">
					</li>
					<br>
					<li>
						<label >密码：</label>
						<input type="text" v-model="password" class="transparent-input">
					</li>
				</ul>
				<a style="font-size: small;" href="">了解竞赛的隐私政策</a>
				<a style="font-size: small;" href="">个人信息收集清单</a>
				<button @click="returnToLogin()" class="register2">
					注册
				</button>
			</div>
		</div>
		<!-- //如果其父组件是item -->
		<div v-if="fatherComponent == 'item'">
			<div class="item_back item_container_style">
				<div class="item_list_container" v-if="itemDetail.length > 0">
					<header class="item_title">{{ itemDetail[itemNum - 1].topic_name }}</header>
					<ul>
						<li v-for="(item, index) in itemDetail[itemNum - 1].topic_answer" :key="item.topic_answer_id"
							@click="choosed(index, item.topic_answer_id)" class="item_list">
							<span class="option_style"
								:class="{ 'has_choosed': choosedNum == index }">{{ chooseType(index) }}</span>
							<span class="option_detail">{{ item.answer_name }}</span>
						</li>
					</ul>
				</div>
			</div>
			<span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
			<span class="submit_item button_style" v-else @click="submitAnswer"></span>
		</div>
	</section>
</template>

<!-- JS部分 -->
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
	name: 'itemcontainer',
	data() {
		return {
			itemId: null, //题目ID
			choosedNum: null, //选中答案索引
			choosedId: null, //选中答案id
			email:null,  // 电子邮件地址，默认为null
			password:null,  // 密码，默认为null
		}
	},
	// 父组件，定义props数组，包含一个元素，值为fatherComponent
	// 这个函数用于接收父组件传递过来的fatherComponent的值
	props: ['fatherComponent'],
	computed: mapState([
		'itemNum', //第几题
		'week', //第几周
		'itemDetail', //题目详情
		'timer', //计时器

		'NewEmail',  // 新邮件
		'NewPassword',  // 新密码
		'registeredEmail',  // 已注册的邮箱
		'registeredPassword'  // 已注册的密码
	]),
	methods: {
		...mapActions([
			'addNum',
			'initializeData',
			'setNewEmail',
			'setNewPassword',
			'setRegisteredEmail',
			'setRegisteredPassword',
		]),
		//点击下一题
		nextItem() {
			if (this.choosedNum !== null) {
				this.choosedNum = null;
				//保存答案, 题目索引加一，跳到下一题
				this.addNum(this.choosedId)
			} else {
				alert('未选择答案哦~')
			}
		},
		//索引0-3对应答案A-B
		chooseType: type => {
			switch (type) {
				case 0: return 'A';
				case 1: return 'B';
				case 2: return 'C';
				case 3: return 'D';
			}
		},
		//选中的答案信息
		choosed(type, id) {
			this.choosedNum = type;
			this.choosedId = id;
		},
		//到达最后一题，交卷，请空定时器，跳转分数页面
		submitAnswer() {
			if (this.choosedNum !== null) {
				this.addNum(this.choosedId)
				clearInterval(this.timer)
				this.$router.push('score')
				// this.$router是Vue Router实例的引用，
				// 	push()方法是this.$router对象的一个方法，用于通过编程方式导航到不同的路由。
				// 	调用this.$router.push('score')时，会触发Vue Router的路由切换逻辑，并将用户导航到名为'score'的路由。
			} else {
				alert('您还没有选择答案哦')
			}
		},
		login(){
			this.setNewEmail(this.Email); // 将注册页面输入的邮箱值保存到email
			this.setNewPassword(this.Password); // 将注册页面输入的密码值保存到password
			if(this.NewEmail == this.registeredEmail && this.NewPassword == this.registeredPassword){
				this.$router.push('item')
				// console.log('登录成功')
			}else{
				alert('用户名或密码错误')
			}
		},
		returnToLogin() {
		this.$router.push('/login'); // 跳转到登录页面
		this.setEmail(this.registeredEmail); // 将注册页面输入的邮箱值保存到email
		this.setPassword(this.registeredPassword); // 将注册页面输入的密码值保存到password
		},
	},
	created() {
		//初始化信息
		if (this.fatherComponent == 'home') {
			this.initializeData();
			document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)';
		}
	}
}
</script>


<!-- CSS部分 -->
<style lang="less">
.top_tips {
	position: absolute;
	height: 7.35rem;
	width: 3.25rem;
	top: -1.3rem;
	right: 1.6rem;
	background: url(../images/WechatIMG2.png) no-repeat;
	background-size: 100% 100%;
	z-index: 10;

	.num_tip {
		position: absolute;
		left: 0.48rem;
		bottom: 1.1rem;
		height: 0.7rem;
		width: 2.5rem;
		font-size: 0.6rem;
		font-family: '黑体';
		font-weight: 600;
		color: #a57c50;
		text-align: center;
	}
}

.item_container_style {
	height: 11.625rem;
	width: 10.15rem;
	background-repeat: no-repeat;
	position: absolute;
	top: 4.6rem;
	left: 2rem;
	
}

.home_logo {
	// background-image: url(../images/1-2.png);
	// background-size: 10.142rem 90%;
	// background-position: center center;
	height: 6.5rem;
	width: 7.5rem;
	font-family: 'Courier New', Courier, monospace;
	color:black;
	font-size: larger;
	font-weight:900;
	margin: 0 auto;
	position: relative;
	left: 0.4rem;
	top:6rem;
}

.item_back {
	background-image: url(../images/2-1.png);
	background-size: 100% 100%;
}

.start {
	display: block;
	height: 1.8rem;
	width: 4rem;
	background-size: 100% 100%;
	position: absolute;
	top: 16.8rem;
	left: 50%;
	margin-left: -2.4rem;
	background-repeat: no-repeat;
	border: 1px solid rgb(131, 215, 140);;
	border-radius: 13%;
	text-align: center;
	background-color: rgb(131, 240, 186);
	color: rgb(165, 124, 80);
	font-size: larger;
	font-weight: 300;
}

.login {
	display: block;
	height: 1.8rem;
	width: 4rem;
	background-size: 100% 100%;
	position: absolute;
	top: 14.8rem;
	left: 50%;
	margin-left: -2.4rem;
	background-repeat: no-repeat;
	border: 1px solid rgb(131, 215, 140);;
	border-radius: 13%;
	text-align: center;
	background-color: rgb(131, 240, 186);
	color: rgb(165, 124, 80);
	font-size: larger;
	font-weight: 300;
}


// 登录页
.transparent-input {
  background-color: transparent;
  border: 2px solid #000; /* 可选：添加边框 */
  height: 1rem;
  border-radius: 8%;
}

.login-container{
	display: block;
	height: 3.5rem;
	width: 10rem;
	background-size: 100% 100%;
	position: absolute;
	top: 2.8rem;
	left: 50%;
	line-height: 10%;
	margin-left: -3.6rem;
	background-repeat: no-repeat;
	font-size: large;
}

.login-container li{
	color: aliceblue;
}

.transparent-input::placeholder{
	color: aliceblue;
}


.login2 {
	display: block;
	height: 1.2rem;
	width: 3rem;
	background-size: 100% 100%;
	position: absolute;
	top: 6.8rem;
	left: 50%;
	margin-left: -2rem;
	background-repeat: no-repeat;
	border: 1px solid rgb(131, 215, 140);;
	border-radius: 13%;
	text-align: center;
	background-color: rgb(131, 240, 186);
	color: rgb(165, 124, 80);
	font-size: large;
	font-weight: 300;
}

.register2 {
	display: block;
	height: 1.2rem;
	width: 3rem;
	background-size: 100% 100%;
	position: absolute;
	top: 8.2rem;
	left: 50%;
	margin-left: -2rem;
	background-repeat: no-repeat;
	border: 1px solid rgb(131, 215, 140);;
	border-radius: 13%;
	text-align: center;
	background-color: rgb(131, 240, 186);
	color: rgb(165, 124, 80);
	font-size: large;
	font-weight: 300;
}

input {
	color: white;
}
.next_item {
	background-image: url(../images/2-2.png);
}

.submit_item {
	background-image: url(../images/3-1.png);
}

.item_list_container {
	position: absolute;
	height: 7.0rem;
	width: 8.0rem;
	top: 2.4rem;
	left: 3rem;
	-webkit-font-smoothing: antialiased;
}

.item_title {
	font-size: 1rem;
	font-family: 'Courier New', Courier, monospace;
	color: white;
	line-height: 1rem;
}

.item_list {
	font-size: 0;
	margin-top: 0.4rem;
	width: 10rem;

	span {
		display: inline-block;
		font-size: 0.7rem;
		color: white;
		vertical-align: middle;
		font-weight: bold;
	}

	.option_style {
		height: 0.725rem;
		width: 0.725rem;
		// 圆
		border: 1px solid white;
		border-radius: 50%;
		line-height: 0.725rem;
		text-align: center;
		margin-right: 0.3rem;
		font-size: 0.5rem;
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
	}

	.has_choosed {
		background-color: #ffd400;
		color: #575757;
		border-color: #ffd400;
	}

	.option_detail {
		width: 7.5rem;
		padding-top: 0.11rem;
	}

}

.button_style {
	display: block;
	height: 2rem;
	width: 4rem;
	background-size: 100% 100%;
	position: absolute;
	top: 16.8rem;
	left: 50%;
	margin-left: -2rem;
	background-repeat: no-repeat;
}

</style>

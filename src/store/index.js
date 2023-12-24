import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)
// 在上面的示例中，我们首先导入了 Vue、Vuex，然后使用 Vue.use(Vuex) 注册了 Vuex。接着创建了一个 store 对象，
// 其中定义了 state、mutations、actions 等属性和方法，用于管理应用程序的状态和实现状态变更的逻辑。
// 最后，我们将 store 对象注入到根组件中，使其可以在组件中访问和使用。

// 定义了答题内容
const state = {
	week: '第0周', //活动周数
	itemNum: 1, // 第几题
	allTime: 0,  //总共用时
	timer: '', //定时器
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "1.v-model是语法糖吗?",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 1,
			"topic_id": 20,
			"answer_name": "不是",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 2,
			"topic_id": 20,
			"answer_name": "不确定",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 3,
			"topic_id": 20,
			"answer_name": "不严谨",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 4,
			"topic_id": 20,
			"answer_name": "是",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "2.Vue.js 中的选项式 API 是什么？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 5,
			"topic_id": 21,
			"answer_name": "对象式 API",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 6,
			"topic_id": 21,
			"answer_name": "数组式 API",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 7,
			"topic_id": 21,
			"answer_name": "函数式 API",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 8,
			"topic_id": 21,
			"answer_name": "选项式 API",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "3.在 Vue.js中,哪个选项用于条件渲染？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 9,
			"topic_id": 21,
			"answer_name": "v-if",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 10,
			"topic_id": 21,
			"answer_name": "v-show",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 11,
			"topic_id": 21,
			"answer_name": "v-for",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 12,
			"topic_id": 21,
			"answer_name": "v-bind",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "4.Vue.js中,哪个用于循环渲染列表？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 13,
			"topic_id": 21,
			"answer_name": "v-for",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 14,
			"topic_id": 21,
			"answer_name": "v-bind",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 15,
			"topic_id": 21,
			"answer_name": "v-on",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 16,
			"topic_id": 21,
			"answer_name": "for-each",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "5.哪个选项用于创建一个新的 Vue 实例？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 17,
			"topic_id": 21,
			"answer_name": "new Vue() ",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 18,
			"topic_id": 21,
			"answer_name": "new Vue() ",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 19,
			"topic_id": 21,
			"answer_name": "createVue()",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "initVue()",
			"is_standard_answer": 0
		}],
		NewEmail: '', // 用户邮箱
		NewPassword: '', // 用户密码
		registeredEmail: '', // 注册页面输入的邮箱
		registeredPassword: '', // 注册页面输入的密码
	}],
	answerid: [], //答案id
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})

// 这段代码是使用Vuex库创建一个新的状态管理对象。它导出一个Vuex.Store的实例，这个实例包含三个部分：

// - state：用于存储应用程序的状态数据。
// - actions：用于定义可以异步执行的操作，通常用于提交（dispatch）mutations。
// - mutations：用于更改state中的数据，必须是同步操作且会直接修改state。

// 这个store对象可以在Vue组件中使用，通过`this.$store`来访问。在Vue组件中，
// 可以通过调用`store.commit`方法来触发actions，或者通过调用`store.dispatch`方法来触发mutations。
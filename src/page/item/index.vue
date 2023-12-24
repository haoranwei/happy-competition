<template>
  	<div>
    	<itemcontainer father-component="item"></itemcontainer>
		<!-- //item组件由js语句从../../components/itemcontainer引入 -->
		<!-- father-component属性定义其父组件是item -->
  	</div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

//导出Vue.js组件对象，名称item
export default {
	name: 'item',
  	components: {
   		itemcontainer
  	},
  	created(){
      //进入题目页面，开始计时
  		this.$store.commit('REMBER_TIME');
  	}
}

</script>

<style lang="less">
    

</style>

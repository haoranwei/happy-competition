<template>
  	<div class="home_container">
        <itemcontainer father-component="home"></itemcontainer>
        <!-- itemcontainer 组件由js语句从components/itemcontainer引入 -->
        <!-- father-component 属性指定了它的父组件为 home。 -->
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

// export default 导出了一个Vue.js组件对象，其中包含了组件的名称name、组件选项以及组件的生命周期钩子函数。
export default {
	name: 'home',
  	components: {
  		itemcontainer
  	},
    created(){
        
    }
}
</script>

<!-- css -->
<style lang="less" scoped>
    .home_container{

    }
</style>

<!-- lang="less" 属性指定了样式表使用的编程语言为less。
     scoped 属性表示样式只适用于当前组件或页面，避免样式污染其他组件或页面。
在样式表中，有一个名为 .home_container 的类选择器，它被大括号 { } 包围，
如果你想为 .home_container 类添加样式规则，你可以在 { } 中添加相应的CSS属性和值。 -->
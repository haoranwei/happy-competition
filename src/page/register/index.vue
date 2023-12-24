<template>
    <div class="register_container">
      <itemcontainer father-component="register"></itemcontainer>
      <!-- itemcontainer 组件由js语句从components/itemcontainer引入 -->
      <!-- father-component 属性指定了它的父组件为 home。 -->
  </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

// export default 导出了一个Vue.js组件对象，其中包含了组件的名称name、组件选项以及组件的生命周期钩子函数。
export default {
  name: 'register',
    components: {
        itemcontainer
    },
  created(){
      
  }
}
</script>

<!-- css -->
<style lang="less" scoped>
  .register_container{

  }
</style>
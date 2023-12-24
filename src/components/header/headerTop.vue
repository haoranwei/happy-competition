<template>
  <section>
    <h3>test-slot</h3>
    <slot name="one">1222</slot>
  </section>
  <section>
    <h3>test-two</h3>
    <slot name="two"></slot>
  </section>
  <section>
    <h3>test-three</h3>
    <slot name="three"></slot>
  </section>
</template>

<script>
  export default {
    name: "header"
  }
</script>

<style scoped>

</style>

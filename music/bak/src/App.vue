<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Range></Range> -->
  </div>
</template>

<script>
// import Range from "@/components/Range";
export default {
  name: "App",
  components: {
    // Range,
  },
};
</script>

<style lang="less" >
.html,
.body,
#app {
  height: 100%;
}
</style>

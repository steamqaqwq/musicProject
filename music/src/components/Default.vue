<template>
  <div>
    <div class="banner">
      <Banner></Banner>
    </div>
    <div class="rank">
      <Rank></Rank>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Rank from "@/components/Rank";
export default {
  name: "Default",
  components: {
    Banner,
    Rank,
  },
};
</script>

<style>
</style>
<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item, index) in bannerList" :key="index">
      <!-- <h3>{{ item.title }}</h3> -->
      <img :src="item.url" class="image" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        {
          title: "1",
          url: "https://kwimg3.kuwo.cn/star/upload/ecom/1633056344133.jpg",
        },
        {
          title: "2",
          url: "https://kwimg4.kuwo.cn/star/upload/81/46/1633056460578_.jpg",
        },
        {
          title: "郭德纲",
          url: "https://kwimg1.kuwo.cn/star/upload/94/28/1631809740820_.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.image {
  height: 90%;
  width: 100%;
}
</style>
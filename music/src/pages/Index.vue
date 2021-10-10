<template>
  <el-container>
    <el-header>
      <div class="headerBox">
        <ul class="nav1">
          <a href=""><img src="../assets/logo.png" alt="" />Music音乐</a>
          <li><a href="">发现音乐</a></li>
          <li><a href="">我的音乐</a></li>
          <li><a href="">Vip会员</a></li>
          <div class="header-right">
            <el-input
              v-model="search"
              placeholder="查找歌曲"
              prefix-icon="el-icon-search"
            ></el-input>
            <div class="login-info">
              <!-- <el-avatar :size="40" :src="circleUrl"></el-avatar> -->
              <div><a href="">登录</a>|<a href="">注册</a></div>
            </div>
          </div>
        </ul>
        <ul class="nav2">
          <li><a href="">首页</a></li>
          <li><a href="">排行榜</a></li>
        </ul>
      </div>
    </el-header>
    <el-main>
      <div class="banner">
        <Banner></Banner>
      </div>
      <div class="rank">
        <Rank></Rank>
      </div>
    </el-main>
    <el-footer>
      Copyright © 2021 GoodGoodStudy DayDayUp. All Rights Reserved.
    </el-footer>
    <Player></Player>
  </el-container>
</template>

<script>
import Banner from "@/components/Banner";
import Rank from "@/components/Rank";
import Player from "@/components/Player/Player";

export default {
  name: "Index",
  components: {
    Banner,
    Rank,
    Player,
  },
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      search: "",
    };
  },
};
</script>

<style lang='less'>
.el-container {
  text-align: center;
}
.el-header {
  height: 130px !important;
  border-bottom: 1px solid grey;
  text-align: center;
  padding: 0;
}
.el-main {
  margin: 0 auto;
  width: 960px;
  min-height: 800px;
  overflow: hidden !important;
}
.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  background: rgba(29, 29, 29, 0.772);
}
.headerBox {
  width: 100%;
  height: 100%;
  a img {
    height: 60%;
    vertical-align: middle;
  }
}
.nav1 {
  margin: 0 auto;
  width: 960px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  //   justify-content: space-between;
  height: 80px;
  line-height: 80px;
  font-size: 18px;
  border-bottom: 1px solid #3498db;
  li {
    width: 120px;
    // padding: 5px 0;
    padding: 0 10px;

    a {
      display: inline-block;
      height: 100%;
      width: 100%;
      padding: 0 10px;
    }
  }
  li a:hover {
    background-color: #3498db;
  }
  .header-right {
    margin-left: auto;
  }
  .el-input {
    width: 250px;
  }
  .login-info {
    width: 100px;
    display: inline-flex;
    margin-left: 10px;
    height: 100%;
  }
}
.nav2 {
  margin: 0 auto;
  width: 880px;
  height: 50px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  //   height: 50px;
  //   line-height: 50px;
  align-items: center;
  li {
    background-color: rgba(210, 157, 157, 0.745);
    border-radius: 10%;
    padding: 2px 10px;
    margin-left: 20px;
  }
  li a:hover {
    color: #3498db;
  }
}
</style>
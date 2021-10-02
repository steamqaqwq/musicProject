<template>
  <el-container class="container">
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="" />
        <span>Music后台管理</span>
      </div>
      <el-button type="primary" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">音乐管理</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer> 2021版权 </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Index",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  img {
    height: 50px;
  }
  span {
    font-size: 30px;
    font-weight: 770;
    color: rgba(255, 255, 255, 0.772);
  }
  > div {
    display: flex;
    align-items: center;
  }
}

.el-aside {
  //   background-color: rgb(0, 255, 119);
  .el-menu {
    border-right: 0;
  }
}
.el-main {
  background-color: #fff;
}
.el-footer {
}
.el-container {
  //   background-color: rgba(26, 89, 156, 0.372);
}
.container {
  height: 100%;
}
</style>
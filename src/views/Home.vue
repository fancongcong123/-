<template>
  <div>
    <h2>首页</h2>
    <span class="iconfont iconicon-test"></span>
    <router-link to="/login">登录页</router-link>
    <router-link to="/register">注册页</router-link>
  </div>
</template>

<script>
export default {
  created() {
    this.$axios({
      url: "http://157.122.54.189:9083/post",
      // type:
      method: "get",
    }).then((res) => {
      console.log(res.data.data[0]);
    });
  },
};
</script>

<style lang="less" scoped>
</style>
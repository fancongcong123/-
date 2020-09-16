<template>
  <div class="pageWrapper">
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logoWrapper">
      <span class="iconfont iconweixin"></span>
    </div>
    <div class="inputDom">
      <input type="text" placeholder="请输入账号" />
    </div>
    <div class="inputDom">
      <input type="text" placeholder="请输入昵称" />
    </div>
    <div class="inputDom">
      <input type="password" placeholder="请输入密码" />
    </div>
    <div class="button">点击注册</div>
  </div>
</template>

<script>

export default {};
</script>

<style lang="less" scoped>
.pageWrapper {
  padding: 20/360 * 100vw;
  .iconicon-test {
    font-size: 27/360 * 100vw;
  }
}
.logoWrapper {
  text-align: center;
  .iconweixin {
    font-size: 126/360 * 100vw;
    color: #0a0;
  }
}
.inputDom {
  padding-bottom: 20/360 * 100vw;
  color: turquoise;
  input {
    border: none;
    outline: none;
    width: 100%;
    border-bottom: 1px solid #ccc;
    font-size: 18/360 * 100vw;
  }
}
.button {
  background-color: #0a0;
  text-align: center;
  line-height: 48/360 * 100vw;
  margin-top: 40/360 * 100vw;
  border-radius: 24/360 * 100vw;
  color: #fff;
}
</style>
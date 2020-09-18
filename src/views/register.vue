<template>
  <div class="pageWrapper">
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logoWrapper">
      <span class="iconfont iconweixin"></span>
    </div>
    <!-- 父组件需要主动接受子组件触发的事件 -->
    <AuthInput
      type="text"
      placeholder="请输入账号"
      :rule="/^\d{6}$/"
      err_msg="请输入正确手机号"
      true_msg="手机号正确"
      @valChange="setUsername"
    />
    <AuthInput
      type="text"
      placeholder="请输入昵称 "
      :rule="/^\d{3}$/"
      err_msg="请输入正确昵称"
      @valChange="setNickname"
    />

    <AuthInput
      type="password"
      placeholder="请输入密码"
      :rule="/^\d{6}$/"
      err_msg="请按照格式输入密码"
      @valChange="setPassword"
    />

    <!-- 2. 父组件进行监听 -->
    <AuthBtn btnText="提交注册" @submit="register" />
  </div>
</template>

<script>
import AuthInput from "@/components/AuthInput";
import AuthBtn from "@/components/AuthBtn";
export default {
  data() {
    return {
      username: "",
      nickname: "",
      password: "",
    };
  },
  components: {
    AuthInput,
    AuthBtn,
  },
  methods: {
    register() {
      console.log("用户名:", this.username);
      console.log("昵称:", this.nickname);
      console.log("密码:", this.password);
    },
    // 获取用户输入的值  保存在data中
    setUsername(newName) {
      this.username = newName;
    },
    setNickname(newNickname) {
      this.nickname = newNickname;
    },
    setPassword(newPass) {
      this.password = newPass;
    },
  },
};
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
    font-size: 50/360 * 100vw;
    color: #0a0;
  }
}
</style>
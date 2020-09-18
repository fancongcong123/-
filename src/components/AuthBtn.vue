<template>
  <div class="button" @click="handleClick">{{btnText}}</div>
</template>

<script>
export default {
  props: ["btnText"],
  methods: {
    handleClick() {
      console.log("被点击了");
      this.$emit("submit");
    },
  },
};
</script>

<style lang="less" scoped>
.button {
  background-color: #0a0;
  text-align: center;
  line-height: 48/360 * 100vw;
  margin-top: 40/360 * 100vw;
  border-radius: 24/360 * 100vw;
  color: #fff;
}
</style>
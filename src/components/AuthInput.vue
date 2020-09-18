<template>
  <div class="inputDom">
    <input
      :class="{error:!isValid}"
      :type="type"
      :placeholder="placeholder"
      v-model="val"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
export default {
  props: ["type", "placeholder", "err_msg", "rule"],
  data() {
    return {
      val: "",
      isValid: true,
    };
  },
  watch: {
    val() {
      if (this.val == "") {
        this.isValid = true;
        return;
      }
      if (this.rule.test(this.val)) {
        console.log("正确");
        this.isValid = true;
      } else {
        console.log(this.err_msg);
        this.isValid = false;
      }
      // 子传父触发事件
      this.$emit("valChange", this.val);
    },
  },
  methods: {
    handleBlur() {
      console.log("失去焦点");
      if (!this.isValid) {
        this.$toast.fail(this.err_msg);
        // alert(this.err_msg);
        return;
      }
    },
  },
};
</script>



<style lang="less" scoped>
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
  .error {
    border-bottom: 1px solid #f00;
  }
}
</style>
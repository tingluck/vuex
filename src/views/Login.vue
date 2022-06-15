<template>
  <div>
    <p>
      <input type="text" v-model='username' name="username" placeholder="用户名" />
      <input type="text" v-model='ped' name="pwd" placeholder="密码" />
      <button @click="fn">登录</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonLogin",

  data() {
    return {
        username:'',
        ped:''
    };
  },

  mounted() {},

  methods: {
    fn() {
      if (this.username && this.ped) {
        localStorage.setItem("username", this.username);
        // 跳转到首页
        this.$router.push("/");
      } else {
        alert("不可以为空");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
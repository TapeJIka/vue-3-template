<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </header>
  <div class="container">
    <div class="sidebar-left">

    </div>
    <div class="content">
      <RouterView />
      <h1>asdasd</h1>
    </div>
    <div class="sidebar-right">

    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  },
}
</script>
<style>
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 70px 20px 70px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.sidebar-left {

}
.sidebar-right {

}
</style>

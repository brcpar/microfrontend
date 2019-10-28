<template>
  <div id="navbar-app" style="min-height:100vh">
    <div id="nav">
      <div>
        <router-link to="/main">Main application</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about">About</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/dashboard">Dashboard</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/agents">Agents</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#navbar-app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
    text-align: -webkit-left;
}
#nav a {
  font-weight: bold;
  color: white;
}
#nav a.router-link-exact-active {
  color: #34a2bc;
}
.nav-item {
  padding-top: 20px;
}
</style>

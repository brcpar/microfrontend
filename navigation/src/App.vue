<template>
  <div class="navbar-app" style="min-height:100vh">
    <div class="nav">
      <div class="nav-item">
        <router-link to="/main">Main application</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about">About</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/dashboard">Dashboard</router-link>
      </div>
      <div class="nav-item" v-on:click="setActive(),setActive2()">
        <router-link v-bind:class="{'router-link-active' : $route.path.startsWith('/agents') }" to="/agents/manage">Agents</router-link>
      </div>
      <Agents v-if="this.$route.path.startsWith('/agents')" />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Agents from './components/agents.vue';

@Component({
  components: {
    Agents,
  },
  // data() {
  //   return {
  //     colorNav: true,
  //     isActive: false,
  //   }
  // },
  methods: {
    setActive: function() {
      debugger;
      // if (this.$data.colorNav) {
      //   alert('is true');
      // }
      // else{
      //   alert('is false');
      // }
    },
  },
})
export default class App extends Vue {
  public data() {
    return {
      isActive: false,
      colorNav: false,
    };
  }
  public setActive2() {
    debugger;
    alert('sup homie2');
    console.log('setActive2');
  }
}
</script>

<style>
.navbar-app a {
  text-decoration: none;
  cursor: pointer;
}
.navbar-app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
}
.navbar-app .nav {
  padding: 10px;
  text-align: -webkit-left;
}
.navbar-app .nav-item > a {
  color: white;
}
.navbar-app .nav a.router-link-active {
  color: #34a2bc;
}
.navbar-app .nav a.router-link-exact-active {
  color: #34a2bc;
}
.navbar-app .nav-item {
  padding-top: .75em;
  padding-bottom: .75em;
  padding-right: .75em;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
}

.navbar-app .nav-menu .nav-sub-item.router-link-active:before {
  color: #34A2BC;
}

.navbar-app .nav-menu .nav-sub-item:before {
  content: "\f111";
  display: inline;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 10px;
  line-height: 21px;
  color: #363e45;
  text-rendering: auto;
  margin-left: -5px;
}

.navbar-app .nav-menu {
  background-color: #141718;
  margin-left: -10px;
  margin-right: -10px;
}

.navbar-app .nav-sub-item {
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  margin-left: 1em;
  border-left: 1px solid #363e45;
  color: #f7f7f7;
  flex: 0 0 auto;
  justify-content: flex-start;
  text-align: left;
  font-size: 14px;
  display: flex;
}

.navbar-app .nav-menu>.nav-sub-item:first-child {
  padding-top: 0.5em;
}

.navbar-app .nav-sub-item.active {
  color: #34a2bc;
}

.navbar-app .nav-sub-item-content {
  margin-left: 0.75em;
  flex: 1;
  margin-right: 0.75em;
}
</style>

<template>
  <div class="navbar-app" style="min-height:100vh">
    <div class="navbar-header">
      <router-link to="/main" class="navbar-brand"><span class="logo-figure"></span></router-link>
    </div>
    <div class="nav">
      <div class="nav-item">
        <router-link to="/dashboard"><i class="mdi mdi-gauge-low"></i> Launchpad</router-link>
      </div>
      <DashboardAppSubNav v-if="this.$route.path.startsWith('/dashboard')"></DashboardAppSubNav>
      <div class="nav-item">
        <router-link to="/main"><i class="mdi mdi-account-multiple-outline"></i> Leads</router-link>
      </div>
      <MainAppSubNav v-if="this.$route.path.startsWith('/main')" />
      <div class="nav-item">
        <router-link to="/contacts"><i class="mdi mdi-notebook-outline"></i> Contacts</router-link>
      </div>
      <ContactsSubNav v-if="this.$route.path.startsWith('/contacts')"></ContactsSubNav>
      <div class="nav-item">
        <router-link to="/communications"><i class="mdi mdi-inbox"></i> Communications</router-link>
      </div>
      <CommunicationSubNav v-if="this.$route.path.startsWith('/communications')"></CommunicationSubNav>
      <div class="nav-item">
        <router-link to="/about">About</router-link>
      </div>      
      <div class="nav-item">
        <router-link to="/agents"><i class="mdi mdi-account-circle-outline"></i> Agents</router-link>
      </div>
      <Agents v-if="this.$route.path.startsWith('/agents')" />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import Agents from './components/agents.vue';
import MainAppSubNav from './components/mainAppSubNav.vue';
import DashboardAppSubNav from './components/dashboardAppSubNav.vue';
import CommunicationSubNav from './components/communicationSubNav.vue';
import ContactsSubNav from './components/contactsSubNav.vue';

@Component({
  components: {
    Agents,
    MainAppSubNav,
    DashboardAppSubNav,
    CommunicationSubNav,
    ContactsSubNav,
  },
})
export default class App extends Vue {}
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
.navbar-app .nav .nav-item>a.router-link-active {
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

.nav-sub-menu .nav-sub-menu-item:before {
  content: "";
}

.nav-sub-menu .nav-sub-menu-item {
  margin-left: 1em;
  padding-left: 1em;
}

.navbar-app .nav-menu .nav-sub-item:before, .nav-sub-menu-item:before {
  content: "\F764";
  display: inline;
  font: normal normal normal 14px/1 "Material Design Icons";
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

.navbar-app .nav-sub-item, .nav-sub-menu .nav-sub-menu-item {
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

.navbar-app .navbar-header {
  flex: 0 0 auto;
  height: 60px;
  background-color: #34A2BC;
  float: none;
  transition: all 320ms cubic-bezier(0.6, 0, 0.735, 0.045);
}

.navbar-app>.navbar-header>.navbar-brand {
  display: block;
  width: 100%;
  line-height: 50px;
  height: 50px;
  text-align: center;
  transition: all 320ms cubic-bezier(0.6, 0, 0.735, 0.045);
  padding: 0;
  overflow: hidden;
  margin-left: 0;
  float: left;
  font-size: 18px;
}

.navbar-app>.navbar-header>.navbar-brand>.logo-figure {
  width: 100%;
  background-image: url(https://searchgothamcityhomes.com/img/dashboard/logo/logo-figure.png);
  background-repeat: no-repeat;
  background-position: center calc(29px - 16px);
  position: relative;
  background-size: 32px 32px;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  height: 50px;
}
</style>

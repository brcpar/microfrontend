<template>
<div id="mainapp">
<v-app class="leadListApp">
  <v-content>
    <lead-list/>
  </v-content>
</v-app>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LeadList from './views/LeadList.vue';

@Component({
  components: {
    LeadList,
  },
  methods: {
    mouseOverMethod(){
      
    }
  }
})
export default class App extends Vue {}
</script>

<style>
.leadListApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
<div id="mainapp">
<v-app class="leadListApp">
  <v-content>
        <universal-lead-details v-if="selectedLead.id !== ''"/>
    <router-view/>
    <!-- <lead-list v-show="$route.path === '/main'"/>
    <this-place-view v-show="$route.path.startsWith('/main/this')"/> -->
  </v-content>
</v-app>
</div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import LeadList from './views/LeadList.vue';
import ThisPlaceView from './views/ThisPlaceView.vue';
import UniversalLeadDetails from '@/components/UniversalLeadDetails.vue';
import { mapState } from 'vuex';

@Component({
  components: {
    LeadList,
    UniversalLeadDetails,
    ThisPlaceView,
  },
  computed: {
    ...mapState('lead', ['selectedLead']),
    },
})
export default class App extends Vue {
  public data() {
    return {
    };
  }
}
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

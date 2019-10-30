<template>
<div id="mainapp">
<v-app class="leadListApp">
  <v-content>
    <universal-lead-details v-if="selectedLead.id !== ''"/>
    <lead-list @do-thing="doThing"/>
  </v-content>
</v-app>
</div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue'
import LeadList from './views/LeadList.vue';
import UniversalLeadDetails from '@/components/UniversalLeadDetails.vue';
import { mapState } from 'vuex';

@Component({
  components: {
    LeadList,
    UniversalLeadDetails,
  },
  methods:{
    setActive: function() {
      debugger;
    }
  },
  computed:{
    ...mapState('lead', ['selectedLead'])
    }
})
export default class App extends Vue {
  data() {
    return {
    }
  }
  public setActive(){
    debugger;
  }
  private doThing(item){
    debugger;
    // this.selectedLead = item;
    // this.$data.shouldShowComponent = true;
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

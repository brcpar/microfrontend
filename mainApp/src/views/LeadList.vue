<template>
  <v-container class="leadList">
  <div style="display:flex">
    <span style="font-weight:bold;flex-grow: 1;">
      Lead Name
    </span>
    <span style="font-weight:bold;flex-grow: 1;">
        Lead Type
    </span>
    <span style="font-weight:bold;flex-grow: 1;">
      Registartion Date
  </span>
  </div>
    <div style="overflow: auto;height: calc(100vh - 100px);margin-top:10px">
      <lead-card
      v-for="(item, index) in leads"
      v-bind:lead="item"
      v-bind:index="index"
      v-bind:key="item.id"
    ></lead-card>
    </div>
  </v-container>
</template>
<script lang="ts">
// @ is an alias to /src
import LeadCard from '@/components/LeadCard.vue';
import { mapState, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  // methods: mapActions("dialer", ["answerCall"]),
  computed: mapState('lead', ['leads']),
  components: { LeadCard },
  methods:{
    mouseOverMethod(){

    }
  }
})
export default class LeadList extends Vue {
  public name = 'list';
  private components = {
    LeadCard,
  };
  private created() {
    this.$store.dispatch('lead/getLeads');
  }
  data(){
    return{
      hover: true,
    }
  }
}
</script>

<style>
.lead-card:hover {
  background: green;
}
.hover {
    background: green;
}
</style>

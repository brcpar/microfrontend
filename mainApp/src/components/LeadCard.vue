<template>
  <v-hover v-slot:default="{ hover }">
    <v-row no-gutters :class="{active: hover}" v-on:click="setLead()">
      <v-col>
        <v-card class="pa-2 card-cell" outlined tile>{{lead.firstName}} {{lead.lastName}}</v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2 card-cell" outlined tile>{{lead.leadType}} Lead</v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2 card-cell" outlined tile>{{computedRegisteredDate}}</v-card>
      </v-col>
    </v-row>
  </v-hover>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Lead } from '../store/lead/types';

@Component({})
export default class LeadCard extends Vue {
  @Prop() private lead!: Lead;
  public data() {
    return {
      thisValue: 'passedValue',
    };
  }
  get computedRegisteredDate() {
    this.lead.registeredDate = new Date(
      new Date().setDate(Math.floor(Math.random() * 30)),
    ).toDateString();
    return this.lead.registeredDate;
  }
  public setLead() {
    this.$store.dispatch('lead/setLead', this.lead);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.odd .card-cell {
  background: lightgrey !important;
}
.active .card-cell {
  background: #34a2bc !important;
}
.row.no-gutters:nth-of-type(odd) {
  background-color: grey !important;
}
</style>

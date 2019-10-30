<template>
<v-hover v-slot:default="{ hover }">
  <v-row no-gutters :class="{active: hover}"  v-on:click="dothis()" >
      <v-col >
        <v-card class="pa-2 card-cell" outlined tile>
          {{lead.firstName}} {{lead.lastName}} {{thisValue}}
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2 card-cell" outlined tile>
          {{lead.leadType}} Lead
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2 card-cell" outlined tile>
          {{lead.registeredDate}}
        </v-card>
      </v-col>
  </v-row>
</v-hover>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Lead } from '../store/lead/types';

@Component
export default class LeadCard extends Vue {
  @Prop() private lead!: Lead;
  public data() {
    return {
      thisValue: 'passedValue',
    };
  }
  public computed(){

  }
  public dothis() {
    debugger;
    this.$store.dispatch('lead/setLead', this.$props.lead);


    if (this.$data.thisValue === 'nope'){
      this.$data.thisValue = 'yup'
    }
    else {
      this.$data.thisValue = 'nope'
    }
    if (this.$props.lead.firstName === 'nope'){
          this.$props.lead.firstName = "yup"
    }
    else{
      this.$props.lead.firstName = "nope"
    }
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
.odd .card-cell{
  background: lightgrey !important;
}
.active .card-cell {
  background: #34a2bc !important;
}
.row.no-gutters:nth-of-type(odd) {
  background-color: grey !important;
}
</style>

<template>
<v-row
      no-gutters
    >
      <v-col
        v-for="n in 3"
        :key="n"
        :cols="n === 2 ? 6 : undefined"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{lead.firstName}} {{lead.lastName}}
        </v-card>
      </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Lead } from '../store/lead/types';

@Component
export default class LeadCard extends Vue {
  @Prop() private lead!: Lead;
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
</style>

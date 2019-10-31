<template>
  <v-container class="leadList">
    <div style="display:flex">
      <span style="font-weight:bold;flex-grow: 1;">Lead Name</span>
      <span style="font-weight:bold;flex-grow: 1;">Lead Type</span>
      <span
        style="font-weight:bold;flex-grow: 1;"
        @click="sortLeads('registrationDate')"
      >Registration Date</span>
    </div>
    <div class="lead-card-table">
      <lead-card
        v-for="(item, index) in leads"
        v-bind:lead="item"
        v-bind:index="index"
        v-bind:key="item.id"
        :class="{'odd': index%2!==0}"
      >></lead-card>
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
  methods: {
    ...mapActions('lead', ['sortLeads']),
  },
})
export default class LeadList extends Vue {
  public name = 'list';
  private components = {
    LeadCard,
  };
  public data() {
    return {
      firstSort: true,
    };
  }
  private created() {
    this.$store.dispatch('lead/getLeads');
  }
}
</script>

<style>
.lead-card-table {
  overflow: auto;
  height: calc(100vh - 100px);
  margin-top: 10px;
}
.lead-card:hover {
  background: green;
}
.hover {
  background: green;
}
</style>

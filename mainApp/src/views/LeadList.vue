<template>
  <v-container class="leadList">
    <lead-card
      v-for="(item, index) in leads"
      v-bind:lead="item"
      v-bind:index="index"
      v-bind:key="item.id"
    ></lead-card>
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
})
export default class LeadList extends Vue {
  public name = 'list';
  private components = {
    LeadCard,
  };
  private created() {
    this.$store.dispatch('lead/getLeads');
  }
}
</script>

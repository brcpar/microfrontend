<template>
  <div class="filters">
      <div v-for="f in filters" :key="f.id" >{{f.name}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Filter } from '../store/filter/types';
import { mapState, mapActions } from 'vuex';

@Component({
    computed: mapState('filter', ['filters']),
})
export default class Filters extends Vue {
  private created() {
      this.$store.dispatch('filter/getFilters');
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
</style>

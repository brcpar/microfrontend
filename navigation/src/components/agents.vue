<template>
  <div class="nav-menu">
    <router-link to="/agents" class="nav-sub-item"><div class="nav-sub-item-content">Manage Agents</div></router-link>
    <router-link to="/agents/leadrouting" class="nav-sub-item"><div class="nav-sub-item-content">Lead Routing</div></router-link>
    <router-link to="/agents/remarketing" class="nav-sub-item"><div class="nav-sub-item-content">Remarketing</div></router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Agents extends Vue {
}
</script>

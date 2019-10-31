<template>
  <div class="nav-menu">
    <router-link to="/main" class="nav-sub-item"><div class="nav-sub-item-content">Main</div></router-link>
    <router-link to="/main/this" class="nav-sub-item"><div class="nav-sub-item-content">This Place</div></router-link>
    <router-link to="/main/that" class="nav-sub-item"><div class="nav-sub-item-content">That Place</div></router-link>
    <router-link to="/main/here" class="nav-sub-item"><div class="nav-sub-item-content">Here</div></router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Agents extends Vue {
}
</script>
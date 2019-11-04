<template>
    <div class="nav-menu">
        <router-link to="/dashboard" class="nav-sub-item"><div class="nav-sub-item-content">Team Dashboard</div></router-link>             
        <router-link to="/dashboard/broker" class="nav-sub-item"><div class="nav-sub-item-content">Broker Dashboard</div></router-link>        
        <router-link to="/dashboard/agent" class="nav-sub-item"><div class="nav-sub-item-content">Agent Dashboard</div></router-link>                          
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default  class DashboardAppSubNav extends Vue {

}
</script>
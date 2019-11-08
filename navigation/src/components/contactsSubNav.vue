<template>
    <div class="nav-menu">
        <router-link to="/contacts" class="nav-sub-item"><div class="nav-sub-item-content">Contacts</div></router-link>             
        <router-link to="/contacts/vendor" class="nav-sub-item"><div class="nav-sub-item-content">Vendor</div></router-link>                  
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default  class ContactsSubNav extends Vue {

}
</script>
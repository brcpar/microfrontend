<template>
    <div class="nav-menu">
        <router-link to="/communications" class="nav-sub-item"><div class="nav-sub-item-content">CINC Inbox</div></router-link>
        <div class="nav-sub-menu" v-show="isInbox">
            <router-link to="/communications" class="nav-sub-menu-item"><div class="nav-sub-menu-item-content"><i class="mdi mdi-inbox"></i> Inbox</div></router-link>
            <router-link to="/communications/starred" class="nav-sub-menu-item"><div class="nav-sub-menu-item-content"><i class="mdi mdi-star"></i> Starred</div></router-link>
            <router-link to="/communications/sent" class="nav-sub-menu-item"><div class="nav-sub-menu-item-content"><i class="mdi mdi-send"></i> Sent</div></router-link>
            <router-link to="/communications/drafts" class="nav-sub-menu-item"><div class="nav-sub-menu-item-content"><i class="mdi mdi-file"></i> Drafts</div></router-link>
            <router-link to="/communications/trashed" class="nav-sub-menu-item"><div class="nav-sub-menu-item-content"><i class="mdi mdi-trash-can-outline"></i> Trashed</div></router-link>
        </div>   
        <router-link to="/communications/gmail" class="nav-sub-item"><div class="nav-sub-item-content">Gmail Inbox</div></router-link>
        <router-link to="/communications/templates" class="nav-sub-item"><div class="nav-sub-item-content">Templates</div></router-link>
        <router-link to="/communications/behavioralmessaging" class="nav-sub-item"><div class="nav-sub-item-content">Behavioral Messaging</div></router-link>
        <router-link to="/communications/campaigns" class="nav-sub-item"><div class="nav-sub-item-content">Campaigns</div></router-link>
        <router-link to="/communications/crmconnect" class="nav-sub-item"><div class="nav-sub-item-content">CRM Connect Inbox</div></router-link>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default  class CommunicationSubNav extends Vue {
    get isInbox() {
        return this.$route.path === '/communications' || this.$route.path === '/communications/starred' || this.$route.path === '/communications/sent' || this.$route.path === '/communications/drafts' ||
        this.$route.path === '/communications/trashed';
    }
}
</script>
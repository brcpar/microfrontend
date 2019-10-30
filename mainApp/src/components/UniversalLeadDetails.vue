<template>
  <div class="universal-lead-details">
<div class="js-leftcolumn js-scrollbar leftcolumn-wrapper skinny-scrollbar skinny-scrollbar--y"><div class="leftcolumn"><div id="detail-close" class="panel-close">
          <button class="close-universal-details" @click="closeUniversalDetails()">x</button>
    <div class="panel-controls">
        <a href="#" class="js-closedetails">
            <span class="ico-close2" title="Close Detail Panel"></span>
        </a>
        <a href="#" class="js-fullscreen">
            <span class="ico-expand slim-only" title="Toggle Default"></span>
            <span class="ico-expand default-only" title="Toggle Fullscreen"></span>
            <span class="ico-contract full-only" title="Toggle Slim"></span>
        </a>
    </div>
</div>
<div class="leftcol-top js-leftcol-top pb10">
    <div>
        <div class="leftcolumn-profilepic" style="padding-top: 20px;margin-bottom: -20px;">
            <div class="leftcolumn-sendlinks" style="top:8px;">
            </div>

            <div class="leftcolumn-sendlinks" style="top:40px;">
                <div class="leftColumn-sendlink js-forceshow-prolinc-dropdown" data-placement="bottom">
                    <i class="icon-leads leftcolumn-sendlinksicon"></i>
                    <div class="btn-group">

                    </div>
                </div>
            </div>
            <img style="min-height: 64px" class="img-circle  img-bordered-white  pointer js-social-link" title=" Social Info needs to be pulled " src="//s-static.cinccdn.com/images/lead.png">

            <div class="leftcolumn-communicationicons">
                <a :href="'tel:' + selectedLead.phone" class="leftcolumn-communicationicon pointer js-call">
                    <span class="js-Left-tooltip" data-toggle="tooltip" data-placement="bottom" :title="'Call ' + selectedLead.firstName"><i class="icon-phone"></i></span>
                </a>
                <div class="leftcolumn-communicationicon pointer js-send-text">
                    <span class="js-Left-tooltip" data-toggle="tooltip" data-placement="bottom" :title="'Text ' + selectedLead.firstName"><i class="icon-feedback"></i></span>
                </div>

                <div class="leftcolumn-communicationicon pointer js-email-address">
                    <span class="js-Left-tooltip" data-toggle="tooltip" data-placement="bottom" :title="'Email ' + selectedLead.firstName"><i class="icon-communication"></i></span>
                </div>
            </div>
        </div>
        <div>
            <div class="js-baseplaceholder">
                <h3 class="mt0 ellipsis" :title="selectedLead.firstName + ' ' + selectedLead.lastName">
                    <span>{{selectedLead.firstName}} {{selectedLead.lastName}}</span>
                    
                </h3>
                <div class="pb5">
                    <i class="valid-phone-icon pointer icon-invalid text-orange details-icon"></i>
                    
                    <div class="btn-group">
                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <span class="" style="color:#018aab;">{{computedPhoneNumber}}</span> <span class="caret"></span>
                        </a>
                    </div>
                </div>
                <div class="pb5 ellipsis leftcolumn-email" :title="selectedLead.email">
                    <i class="valid-email-icon pointer icon-valid text-success details-icon"></i>
                    <a class="js-email-address" style="color:#018aab;" :title="selectedLead.email">{{computedEmail}}</a>
                </div>
            </div>
        </div>
        <div class="minigrid minigrid-thirds pt5" style="display:flex">
            <div class="lead-type-check" style="flex: 0 33.333%">
                <div class="checkbox custom-checkbox" title="Buyer Lead">
                    <input type="checkbox" id="lead-details-cb-buyer-lead" class="js-lead-type" name="buyerLead" value="1" data-target="div" data-contextual="stroke" :checked="selectedLead.leadType === 'Buyer'">
                    <label for="lead-details-cb-buyer-lead">Buyer</label>
                </div>
            </div>
            <div class="lead-type-check" style="flex: 0 33.333%">
                <div class="checkbox custom-checkbox" title="Seller Lead">
                    <input type="checkbox" id="lead-details-cb-seller-lead" class="js-lead-type" name="sellerLead" value="1" data-target="div" data-contextual="stroke" :checked="selectedLead.leadType === 'Seller'">
                    <label for="lead-details-cb-seller-lead">Seller</label>
                </div>
            </div>
            <div class="lead-type-check" style="flex: 0 33.333%">
                <div class="checkbox custom-checkbox" title="Partial Lead">
                    <input type="checkbox" id="lead-details-cb-partial-lead" class="js-lead-type" name="incompleteLead" value="1" data-target="div" data-contextual="stroke" :checked="selectedLead.leadType === 'Partial'">
                    <label for="lead-details-cb-partial-lead">Partial</label>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
</div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapActions } from 'vuex';
import { Lead } from '../store/lead/types';

@Component({
      computed: {
          ...mapState('lead', ['selectedLead']),
          computedEmail: function() {
              debugger;
            return this.selectedLead.firstName + '.' + this.selectedLead.lastName + '@gmail.com';
          },
          computedPhoneNumber: function() {
              debugger;
              this.selectedLead.phoneNumber = Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15);
            return this.selectedLead.phoneNumber;
          },
      }
})
export default class UniversalLeadDetails extends Vue {
  @Prop() private lead!: Lead;
  public closeUniversalDetails() {
      debugger;
      this.$store.dispatch('lead/setLeadDefault');
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leftcolumn-profilepic img {
    max-width: 64px;
    max-height: 64px;
}
    .no-dialog-title .ui-dialog-titlebar {
        display: none;
    }

    .ui-dialog .ui-dialog-content {
        padding: 5px;
        color: #FFF;
    }

    .ui-dialog {
        background-color: #3A424A;
        border-radius: 2px;
        border-color: #3A424A;
    }

    .mlra {
        margin-left: auto;
        margin-right: auto;
    }
.close-universal-details {
    border:1px solid;
    cursor: pointer;
    background-color: grey;
    left: 0px;
    position: absolute;
    width:20px;
}
.universal-lead-details .leftcolumn-wrapper {
    background-color: #f7f7f7;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    flex: 0 0 320px;
}
.universal-lead-details {
    border: 1px solid;
    position: absolute;
    right:0px;
    min-height: 100vh;
    z-index: 999;
    background-color: white;
    width: 70%;
    flex:0 1 100%;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    background-color: #fff;
}
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

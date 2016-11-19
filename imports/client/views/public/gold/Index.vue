<template>
    <div>
        <div style="padding-top: 100px;">
            <div id="index-header" v-depth="1" style="width: 100%; height: 100%; opacity: 1; position: absolute; top: 0; left: 0;" class="background-purple-900">
            </div>
            <img src="/packages/skynightz93_peper-ui/client/img/logo.png" style="max-width: 400px;"/>
        </div>
        <transition-block :show="show">
            <div>
                <page-container style="">
                    <div class="row center-xs">
                        <div class="col-lg-fluid-6 col-xlg-fluid-5" v-for="posts in featuredPost">
                            <cards>
                                <cards-image v-ripple="" img="/packages/skynightz93_peper-ui/client/img/gold.jpg" img-small="/packages/skynightz93_peper-ui/client/img/gold-sm.jpg"></cards-image>
                                <cards-content>
                                    <div style="height: 100px">

                                    </div>
                                </cards-content>
                                <cards-action>
                                    <div class="pull-right">
                                        <icon-button name="heart-outline" v-ripple></icon-button>
                                        <icon-button name="cart" v-ripple></icon-button>
                                    </div>
                                </cards-action>
                            </cards>
                        </div>
                    </div>
                </page-container>
                <div style="height: 1900px;"></div>
            </div>
        </transition-block>
    </div>
</template>

<script>
 export default {
     data() {
         return {
             featuredPost: [
                 {},
                 {},
                 {},
                 {},
             ],
             show: false,
         };
     },
     mounted() {
         let self = this;
         self.$nextTick(function() {
             $(self.$el).waitForImages(function() {
                 self.show = true;
             });
         })
     }
 }
</script>

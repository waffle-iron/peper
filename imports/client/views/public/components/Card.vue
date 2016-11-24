<template>
    <div>
        <transition-block  :show="show">
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-lg-fluid-6 col-xlg-fluid-6">
                        <cards :shadowHover="2">
                            <cards-image img="/packages/skynightz93_peper-ui/client/img/gold.jpg"></cards-image>
                            <cards-content>
                                <div style="padding: 16px 0;">
                                    <div class="font-headline no-margin">Title goes here</div>
                                    <div class="font-subhead color-grey-700">Subtitle here</div>

                                    <div class="font-body no-margin">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                                    </div>
                                </div>
                            </cards-content>
                            <cards-action>
                                <flat-button type="button" v-ripple>Link 1</flat-button>
                                <flat-button type="button" v-ripple>Link 2</flat-button>
                            </cards-action>
                        </cards>
                    </div>
                </div>
                <span slot="label" class="row center-xs">
                    <div class="col-lg-fluid-6 col-xlg-fluid-6">
                        With Images
                    </div>
                </span>
                <span slot="code">
                    <!-- <peper-code>{{item}}</peper-code> -->
                </span>
            </peper-doc>
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-lg-fluid-6 col-xlg-fluid-6">
                        <cards>
                            <cards-image img="/packages/skynightz93_peper-ui/client/img/gold.jpg"></cards-image>
                            <cards-content>
                                <div style="padding: 16px 0;">
                                    <div class="font-headline no-margin">Title goes here</div>
                                    <div class="font-subhead no-margin color-grey-700">Subtitle here</div>
                                </div>
                            </cards-content>
                            <cards-action>
                                <flat-button type="button" v-ripple>Link 1</flat-button>
                                <flat-button type="button" v-ripple>Link 2</flat-button>
                            </cards-action>
                        </cards>
                    </div>
                </div>
                <span slot="label" class="row center-xs">
                    <div class="col-lg-fluid-6 col-xlg-fluid-6">
                        With Images
                    </div>
                </span>
                <span slot="code">
                    <!-- <peper-code>{{item}}</peper-code> -->
                </span>
            </peper-doc>
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-lg-fluid-6 col-xlg-fluid-6">
                        <cards>
                            <cards-content>
                                <div style="padding: 16px 0;">
                                    <div class="font-headline no-margin">Title goes here</div>
                                    <div class="font-subhead no-margin color-grey-700">Subtitle here</div>
                                </div>
                            </cards-content>
                            <cards-image img="/packages/skynightz93_peper-ui/client/img/gold.jpg"></cards-image>
                            <cards-action>
                                <flat-button type="button" v-ripple>Link 1</flat-button>
                                <flat-button type="button" v-ripple>Link 2</flat-button>
                            </cards-action>
                        </cards>
                    </div>
                </div>
                <span slot="label" class="row center-xs">
                    <div class="col-lg-fluid-6 col-xlg-fluid-6">
                        With Images
                    </div>
                </span>
                <span slot="code">
                    <!-- <peper-code>{{item}}</peper-code> -->
                </span>
            </peper-doc>
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-lg-fluid-6 col-xlg-fluid-6">
                        <cards>
                            <cards-content>
                                <div style="padding: 16px 0;">
                                    <div class="font-headline no-margin">Title goes here</div>
                                    <div class="font-subhead no-margin color-grey-700">Subtitle here</div>
                                </div>
                            </cards-content>
                            <cards-action>
                                <flat-button type="button" v-ripple>Link 1</flat-button>
                                <flat-button type="button" v-ripple>Link 2</flat-button>
                            </cards-action>
                        </cards>
                    </div>
                </div>
                <span slot="label" class="row center-xs">
                    <div class="col-lg-fluid-6 col-xlg-fluid-6">
                        With Images
                    </div>
                </span>
                <span slot="code">
                    <!-- <peper-code>{{item}}</peper-code> -->
                </span>
            </peper-doc>
        </transition-block>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            }
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

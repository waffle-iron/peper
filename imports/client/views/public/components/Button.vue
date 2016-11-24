<template>
    <div>
        <transition-block :show="show">
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <raised-button type="button" v-ripple>Button</raised-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <raised-button type="button">Button</raised-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <raised-button type="button" class="primary" v-ripple>Button</raised-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <raised-button type="button" class="accent" v-ripple>Button</raised-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <raised-button type="button" disabled>Button</raised-button>
                        </div>
                    </div>
                </div>
                <span slot="label" class="row center-xs hidden-xs">
                    <div class="col-sm-3">
                        Default Raised
                    </div>
                    <div class="col-sm-3">
                        Without Ripple
                    </div>
                    <div class="col-sm-3">
                        Primary Raised
                    </div>
                    <div class="col-sm-3">
                        Accent Raised
                    </div>
                    <div class="col-sm-3">
                        Disabled
                    </div>
                </span>
                <span slot="code" v-for="item in code1">
                    <peper-code>{{item}}</peper-code>
                </span>
            </peper-doc>
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <flat-button type="button" v-ripple>Button</flat-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <flat-button type="button">Button</flat-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <flat-button type="button" class="primary" v-ripple>Button</flat-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <flat-button type="button" class="accent" v-ripple>Button</flat-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <flat-button type="button" disabled>Button</flat-button>
                        </div>
                    </div>
                </div>
                <span slot="label" class="row center-xs hidden-xs">
                    <div class="col-sm-3">
                        Default Flat
                    </div>
                    <div class="col-sm-3">
                        Without Ripple
                    </div>
                    <div class="col-sm-3">
                        Primary Flat
                    </div>
                    <div class="col-sm-3">
                        Accent Flat
                    </div>
                    <div class="col-sm-3">
                        Disabled
                    </div>
                </span>
                <span slot="code" v-for="item in code2">
                    <peper-code>{{item}}</peper-code>
                </span>
            </peper-doc>

            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <color-button type="button" v-ripple>Button</color-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <color-button type="button">Button</color-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <color-button type="button" class="primary" v-ripple>Button</color-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <color-button type="button" class="accent" v-ripple>Button</color-button>
                        </div>
                    </div>
                    <div class="col-sm-3 render-block">
                        <div class="button-center-container">
                            <color-button type="button" disabled>Button</color-button>
                        </div>
                    </div>
                </div>
                <span slot="label" class="row center-xs hidden-xs">
                    <div class="col-sm-3">
                        Default Color
                    </div>
                    <div class="col-sm-3">
                        Without Ripple
                    </div>
                    <div class="col-sm-3">
                        Primary Color
                    </div>
                    <div class="col-sm-3">
                        Accent Color
                    </div>
                    <div class="col-sm-3">
                        Disabled
                    </div>
                </span>
                <span slot="code" v-for="item in code3">
                    <peper-code>{{item}}</peper-code>
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
                code1: [
                    '<raised-button type="button" v-ripple>Button</raised-button>',
                    '<raised-button type="button">Button</raised-button>',
                    '<raised-button type="button" class="primary" v-ripple>Button</raised-button>',
                    '<raised-button type="button" class="accent" v-ripple>Button</raised-button>',
                    '<raised-button type="button" disabled>Button</raised-button>'
                ],
                code2: [
                    '<flat-button type="button" v-ripple>Button</flat-button>',
                    '<flat-button type="button">Button</flat-button>',
                    '<flat-button type="button" class="primary" v-ripple>Button</flat-button>',
                    '<flat-button type="button" class="accent" v-ripple>Button</flat-button>',
                    '<flat-button type="button" disabled>Button</flat-button>'
                ],
                code3: [
                    '<color-button type="button" v-ripple>Button</color-button>',
                    '<color-button type="button">Button</color-button>',
                    '<color-button type="button" class="primary" v-ripple>Button</color-button>',
                    '<color-button type="button" class="accent" v-ripple>Button</color-button>',
                    '<color-button type="button" disabled>Button</color-button>'
                ]
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

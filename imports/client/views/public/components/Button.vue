<template>
    <div>
        <transition-block :show="show">
            <page-container>
                <div class="font-title">Button types</div>
                <p>There are three standard types of buttons:</p>
                <ul>
                    <li>Raised button: A typically rectangular material button that lifts and displays ink reactions on press.</li>
                    <li>Flat button: A button made of ink that displays ink reactions on press but does not lift.</li>
                    <li>Floating action button: A circular material button that lifts and displays an ink reaction on press.</li>
                </ul>
            </page-container>
            <page-container>
                <div class="font-title">Raised buttons</div>
                <p>Raised buttons add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces. Raised buttons behave like a piece of material resting on another sheet – they lift and fill with color on press. Raised buttons have a default elevation of 2dp. On desktop, raised buttons can gain this elevation on hover.</p>
            </page-container>

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
            <page-container>
                <div class="font-title">Flat Button</div>
                    <p>Flat buttons are printed on material. They do not lift, but fill with color on press. Use flat buttons in the following locations:</p>
                    <ul>
                        <li>On toolbars</li>
                        <li>In dialogs, to unify the button action with the dialog content</li>
                        <li>Inline, with padding, so the user can easily find them</li>
                    </ul>
            </page-container>
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
            <page-container>
                <div class="font-title">Color Button</div>
                <p>Color Button are one part of flat button but with background. Different from raised buttons where it don't have depth.</p>
            </page-container>
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

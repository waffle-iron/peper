<template>
    <div>
        <div  style="z-index:3;" class="background-theme" v-depth="1" id="index-header">
            <page-container style="padding-top: 100px;">
                <div class="row">
                    <div class="col-md-fluid-12">
                        <div class="font-display2 color-white" style="margin-top: 20px;">
                            Button UI
                        </div>
                    </div>
                </div>
            </page-container>
        </div>
        <transition-block :show="show">
            <div style="display:table; margin: 0 auto;">
                <raised-button type="link" link="/" class="primary" v-ripple><icon name="menu"></icon> Link Button</raised-button>
                <raised-button type="button" class="primary" v-ripple><icon name="menu"></icon> Link Button</raised-button>
            </div>
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

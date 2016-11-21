<template>
    <div>
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

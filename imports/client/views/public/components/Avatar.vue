<template>
    <div>
        <div style="z-index:3;" class="background-theme" v-depth="1" id="index-header">
            <page-container style="padding-top: 100px;">
                <div class="row">
                    <div class="col-md-fluid-12">
                        <div class="font-display2 color-white" style="margin-top: 20px;">
                            Avatar UI
                        </div>
                    </div>
                </div>
            </page-container>
        </div>
        <transition-block :show="show">
            <div style="display:table; margin: 0 auto;">
                <avatar text="Nizul Zaim" style="float:left; margin-left: 2px; margin-right: 2px;"><img src="https://placeimg.com/48/48/people/1" /></avatar>
                <avatar text="nizul Zaim" style="float:left; margin-left: 2px; margin-right: 2px;"></avatar>
                <avatar text="Lili Madiha" style="float:left; margin-left: 2px; margin-right: 2px;"></avatar>
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

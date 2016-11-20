<template>
    <div>
        <!-- <div style="z-index:3;" class="background-theme" v-depth="1" id="index-header">
            <page-container style="padding-top: 100px;">
                <div class="row">
                    <div class="col-md-fluid-12">
                        <div class="font-display2 color-white" style="margin-top: 20px;">
                            Avatar UI
                        </div>
                    </div>
                </div>
            </page-container>
        </div> -->
        <transition-block :show="show">
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-xs-2">
                        <avatar text="Nizul Zaim" v-ripple style="float:left; margin-left: auto; margin-right: auto;"><img src="https://placeimg.com/48/48/people/1" /></avatar>
                    </div>
                    <div class="col-xs-2">
                        <avatar text="nizul Zaim" v-ripple style="float:left; margin-left: auto; margin-right: auto;"></avatar>
                    </div>
                    <div class="col-xs-2">
                        <avatar text="Lili Madiha" style="float:left; margin-left: auto; margin-right: auto;"></avatar>
                    </div>
                </div>
                <span slot="label" class="row center-xs">
                    <div class="col-xs-2">
                        With Images
                    </div>
                    <div class="col-xs-2">
                        With Images
                    </div>
                    <div class="col-xs-2">
                        With Images
                    </div>
                </span>
                <span slot="code">
                    <peper-code>&lt;avatar text=&quot;Nizul Zaim&quot;&gt;&#13;&#10;&nbsp;&nbsp;&nbsp;&lt;img src=&quot;https://placeimg.com/48/48/people/1&quot; /&gt;&#13;&#10;&lt;/avatar&gt;</peper-code>
                    <peper-code>&lt;avatar text=&quot;Nizul Zaim&quot;&gt;&lt;/avatar&gt;</peper-code>
                    <peper-code>&lt;avatar text=&quot;Lili Madiha&quot;&gt;&lt;/avatar&gt;</peper-code>
                </span>
            </peper-doc>
            <!-- <div style="display:table; margin: 0 auto;">
                <avatar text="Nizul Zaim" style="float:left; margin-left: 2px; margin-right: 2px;"><img src="https://placeimg.com/48/48/people/1" /></avatar>
                <avatar text="nizul Zaim" style="float:left; margin-left: 2px; margin-right: 2px;"></avatar>
                <avatar text="Lili Madiha" style="float:left; margin-left: 2px; margin-right: 2px;"></avatar>
            </div> -->
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

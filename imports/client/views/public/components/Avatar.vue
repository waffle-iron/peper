<template>
    <div>
        <transition-block :show="show">
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-xs-2 render-block">
                        <avatar v-ripple><img src="https://placeimg.com/48/48/people/1" /></avatar>
                    </div>
                    <div class="col-xs-2 render-block">
                        <avatar text="nizul Zaim"></avatar>
                    </div>
                    <div class="col-xs-2 render-block">
                        <avatar text="Lili Madiha"></avatar>
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
                <span slot="code" v-for="item in code">
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
                code: [
                    '<avatar>\n  <img src="https://placeimg.com/48/48/people/1" />\n</avatar>',
                    '<avatar text="nizul Zaim"></avatar>',
                    '<avatar text="Lili Madiha"></avatar>',
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

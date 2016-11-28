<template>
    <div>
        <transition-block :show="show">
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-sm-2 render-block">
                        <switches v-model="switchesData[0]"></switches>
                    </div>
                    <div class="col-sm-2 render-block">
                        <switches v-model="switchesData[1]"></switches>
                    </div>
                    <div class="col-sm-2 render-block">
                        <switches class="accent" v-model="switchesData[2]"></switches>
                    </div>
                    <div class="col-sm-2 render-block">
                        <switches class="accent" v-model="switchesData[3]" disabled></switches>
                    </div>
                </div>
                <span slot="label" class="row center-xs hidden-xs">
                    <div class="col-sm-2">
                        With Images
                    </div>
                    <div class="col-sm-2">
                        With Images
                    </div>
                    <div class="col-sm-2">
                        With Images
                    </div>
                    <div class="col-sm-2">
                        With Images
                    </div>
                </span>
                <span slot="code" v-for="item in code1">
                    <peper-code>{{item}}</peper-code>
                </span>
            </peper-doc>
            <peper-doc>
                <div slot="render" class="row center-xs">
                    <div class="col-sm-2 render-block">
                        <switches class="red" v-model="switchesData[4]"></switches>
                    </div>
                    <div class="col-sm-2 render-block">
                        <switches class="green" v-model="switchesData[5]"></switches>
                    </div>
                    <div class="col-sm-2 render-block">
                        <switches class="blue" v-model="switchesData[6]"></switches>
                    </div>
                    <div class="col-sm-2 render-block">
                        <switches class="yellow" v-model="switchesData[7]"></switches>
                    </div>
                </div>
                <span slot="label" class="row center-xs hidden-xs">
                    <div class="col-sm-2">
                        With Images
                    </div>
                    <div class="col-sm-2">
                        With Images
                    </div>
                    <div class="col-sm-2">
                        With Images
                    </div>
                    <div class="col-sm-2">
                        With Images
                    </div>
                </span>
                <span slot="code" v-for="item in code2">
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
                switchesData: [
                    false,
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                ],
                code1: [
                    '<switches v-model="dataName"></switches>',
                    '<switches v-model="dataName"></switches>',
                    '<switches class="accent" v-model="dataName"></switches>',
                    '<switches class="accent" v-model="dataName" disabled></switches>',
                ],
                code2: [
                    '<switches class="red" v-model="dataName"></switches>',
                    '<switches class="green" v-model="dataName"></switches>',
                    '<switches class="blue" v-model="dataName"></switches>',
                    '<switches class="yellow" v-model="dataName"></switches>',
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
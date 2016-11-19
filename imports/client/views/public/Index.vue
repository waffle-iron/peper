<template>
    <transition-block :show="show">
        <div>
            <div  style="z-index:3;background-image: url(/packages/skynightz93_peper-ui/client/img/cityscape.svg); background-size: cover; background-position: 100% 100%;" v-depth="1" id="index-header">
                <page-container style="padding-top: 100px;">
                    <div class="row">
                        <div class="col-md-fluid-12">
                            <div class="font-display2 color-white" style="margin-top: 20px;">
                                Develop Powerful Apps
                            </div>
                            <div class="font-headline font-thin color-white">
                                Peper is framework that build on top of Meteor + Vue. Peper also compromise with Google Material Design guideline and make it powerful framework for user experience application
                            </div>
                            <div>
                                <br />
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </page-container>
            </div>
            <div class="background-grey-200 font-title font-center font-light">
                <page-container>
                    <div class="row center-xs">
                        <div class="col-sm-12" style="padding-top: 40px; padding-bottom: 40px;">
                            <img src="/packages/skynightz93_peper-ui/client/img/devsignmy.svg"  style="max-width: 150px; transform: translateZ(0)"/>
                            Peper project are now being maintained by Devsign Studio, one of small team from Malaysia aim to create better web technology for desktop and mobile browser. We are also open for small startup project to hire us as your business solution.
                        </div>
                    </div>
                </page-container>
            </div>

            <!-- <div style="height: 40px;"></div> -->
            <div style="height: 1900px;"></div>
        </div>
    </transition-block>
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

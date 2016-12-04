<template>
    <transition-block :show="show">
        <div>
            <dropdown-menu trigger="#sort" :top="false" :left="false" :has-gap="true">
                <menu-item icon="pencil" text="Edit"></menu-item>
                <menu-item icon="content-copy" text="Duplicate"></menu-item>
                <menu-item icon="share-variant" text="Share" :disabled="true"></menu-item>
                <menu-item :divider="true"></menu-item>
                <menu-item icon="delete" text="Delete"></menu-item>
            </dropdown-menu>
            <div style="z-index:3;background-image: url(/packages/skynightz93_peper-ui/client/img/cityscape.svg); background-size: cover; background-position: 100% 100%;"
                v-depth="1" id="index-header">
                <page-container style="padding-top: 100px;">
                    <div class="row">
                        <div class="col-md-fluid-12">
                            <div class="font-display2 color-white" style="margin-top: 20px;">
                                Develop Powerful Apps
                            </div>
                            <div class="font-headline font-thin color-white">
                                Peper is framework that build on top of Meteor + Vue. Peper also compromise with Google Material Design guideline and make
                                it powerful framework for user experience application
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
            <div class="background-grey-200">
                <page-container class="font-title font-center font-light no-margin">
                    <div class="row center-xs">
                        <div class="col-sm-12" style="padding-top: 40px; padding-bottom: 40px;">
                            <img src="/packages/skynightz93_peper-ui/client/img/devsignmy.svg" style="max-width: 150px; transform: translateZ(0)" />                            Peper project are now being maintained by Devsign Studio, one of small team from Malaysia aim
                            to create better web technology for desktop and mobile browser. We are also open for small startup
                            project to hire us as your business solution.
                        </div>
                    </div>
                </page-container>
                <page-container>
                    <cards>
                        <toolbar title="Peper" text-color="grey-900" v-depth="0">
                            <div slot="right">
                                <icon-button id="sort" name="sort-variant"  v-ripple></icon-button>
                            </div>
                        </toolbar>
                        <div class="cards-table">
                            <div class="cards-table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                Dessert (100g serving)
                                            </th>
                                            <th class="th-number">
                                                Calories
                                            </th>
                                            <th class="th-number">
                                                Fat (g)
                                            </th>
                                            <th class="th-number">
                                                Carbs (g)
                                            </th>
                                            <th class="th-number">
                                                Protein (g)
                                            </th>
                                            <th class="th-number">
                                                Sodium (mg)
                                            </th>
                                            <th class="th-number">
                                                Calcium (%)
                                            </th>
                                            <th class="th-number">
                                                
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Kitkat</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-action">
                                                <icon-button name="pencil" class="color-grey-600" v-ripple></icon-button>
                                                <icon-button name="pencil" class="color-grey-600" v-ripple></icon-button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Kitkat</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-number">100</td>
                                            <td class="td-action">
                                                <icon-button name="pencil" class="color-grey-600" v-ripple></icon-button>
                                                <icon-button name="pencil" class="color-grey-600" v-ripple></icon-button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </cards>
                </page-container>
            </div>
            <!-- <div style="height: 40px;"></div> 
            <div style="height: 1900px;">
                <switches v-model="test"></switches>
                <switches class="accent" v-model="test"></switches>
                <switches class="green" v-model="test"></switches>
                <switches class="yellow" v-model="test"></switches>
                <switches class="red" v-model="test"></switches>
                <switches class="blue" v-model="test"></switches>
                <switches class="blue" v-model="test" :disabled="true"></switches>
                {{test}}
                <flat-button type="button" v-on:click="tryAppend" v-ripple>Nizul Zaim</flat-button>
            </div>
            <snackbar :msg="msgObj.msg" :button-text="msgObj.buttonText" @button-click="helloWorld" v-model="showMsg"></snackbar>-->
        </div>
    </transition-block>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                test: true,
                showMsg: false,
                msgObj: {msg: "", buttonText: "OK"},
            }
        },
        mounted() {
            let self = this;
            self.$nextTick(function() {
                $(self.$el).waitForImages(function() {
                    self.show = true;
                });
            })
            
        },
        methods: {
            tryAppend() {
                this.msgObj.msg = "Hello World";
                this.msgObj.buttonText = "Retry";
                this.showMsg=true;
            },
            helloWorld() {
                console.log("From Index.vue");
            }
        }
    }
</script>
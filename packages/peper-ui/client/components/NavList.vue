<template>
    <router-link :to="to" :tag="tag" class="nav-item" exact>
        <div class="nav-list" v-ripple="{background: '#d1d1d1'}">
            <slot></slot>
            <div class="chevron" v-if="sublist=== true">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>
        </div>
        <div v-if="sublist=== true" class="nav-sublist">
            <slot name="sublist"></slot>
        </div>
    </router-link>
</template>

<script>
import {Velocity} from 'velocity-animate';
import "../directives/v-ripple";
export default {
    props: {
        sublist: {
            type: Boolean,
        },
        to: {
            default: "sfsfsfsfsfsfs",
        }
    },
    computed: {
        tag() {
            if (this.sublist) {
                return "div";
            }
            return "a";
        }
    },
    mounted() {
        let self= this;
        self.$nextTick(function() {
            let $el = $(this.$el)
            let $navList = $el.children(".nav-list");
            if (this.sublist === true) {
                $navList.addClass('sublist');
                let $navSublist = $el.find(".nav-sublist");
                let $chevron = $navList.children('.chevron');
                let sublistHeight = $navSublist.outerHeight();
                $navSublist.velocity({ marginTop: [ "-" + sublistHeight + "px", [0.0, 0.0, 0.2, 1], "0"]}, { duration: 200 });
                $chevron.velocity({ rotateZ: ["90deg", [0.0, 0.0, 0.2, 1], "0deg"]}, { duration: 200 });
                let hasActive = $navSublist.find(".router-link-active").length > 0;

                if (hasActive) {
                    $chevron.velocity("reverse");
                    $navSublist.velocity("reverse");
                }
                $navList.on("click", function(e) {
                    e.preventDefault();
                });
                $navList.on("mouseup", function(e) {
                    e.preventDefault();
                    $chevron.velocity("reverse");
                    $navSublist.velocity("reverse");
                });

            } else {
                $el.on("click", function() {
                    $(".peper-side-navigation-overlay").removeClass('active');
                    $el.parents(".peper-side-navigation").removeClass('active');
                })
            }
        })
    }
}
</script>

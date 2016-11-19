<template>
    <router-link :to="link" class="flat-button" :type="type">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        type: {
            default: "link",
            type: String,
        },
        link: {
            default: "",
            type: String,
        }
    },
    computed: {
        tag() {
            if (this.type === "link") {
                return "a"
            }
            return "button";
        }
    },
    mounted() {
        let self = this;
        self.$nextTick(function() {
            $el = $(self.$el);
            $el.on("click mouseup tap", function() {
                $(this).blur();
            })
        })
    }
}
</script>

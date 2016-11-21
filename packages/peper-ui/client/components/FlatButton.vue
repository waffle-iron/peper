<template>
    <router-link :to="link" :tag="tag" class="flat-button" :type="type">
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
    }
}
</script>

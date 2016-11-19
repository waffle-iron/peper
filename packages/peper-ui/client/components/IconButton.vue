<template>
    <div class="peper-icon-button">
        <Icon :name="name"></Icon>
    </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
    props: {
        name: String,
    },
    components: {
        Icon,
    }
}
</script>

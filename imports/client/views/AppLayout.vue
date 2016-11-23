<template>
    <scroll-bar>
        <router-view name="toolbar"></router-view>
        <router-view name="navigation"></router-view>
        <router-view></router-view>
    </scroll-bar>
</template>

<script>
export default {
    mounted() {
        var self = this;

    }
}
</script>

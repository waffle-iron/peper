<template>
    <div class="optiscroll" style="height:100%;">
        <div class="optiscroll-vue-wrapper" style="overflow-x: hidden;">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        var self = this;
        self.$nextTick(function() {
            var myOptiscrollInstance = new Optiscroll(self.$el);
            // myOptiscrollInstance.update();
        })
    },
}
</script>

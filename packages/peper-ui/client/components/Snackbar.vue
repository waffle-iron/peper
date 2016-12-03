<template>
    <div class="peper-snackbar">
        <div class="row middle-xs">
            <div class="col-xs">
                <div class="text-content">
                   {{msg}}
                </div>
            </div>
            <div style="margin-left: auto;">
                <flat-button @click="buttonClick" class="accent" type="button" v-ripple>{{buttonText}}</flat-button>
            </div>
        </div>
    </div>
</template>

<script>
var timeout = null;
 export default {
     props: {
         msg: {
             default: '',
         },
         buttonText: {
             default: 'OK',
         },
         value: {},
     },
     watch: {
         value(newValue) {
             var $el = $(this.$el);
             var self = this;
             if (newValue) {
                 $el.addClass("show");
                 timeout = window.setTimeout(function() {
                     self.$emit("input", false);
                 }, 5000);
             } else {
                 $el.removeClass("show");
             }
         }
     },
     methods: {
         buttonClick() {
             if (timeout !== null) {
                 clearTimeout(timeout);
             }
             this.$emit('button-click');
             this.$emit("input", false);
         }
     }
 }
</script>
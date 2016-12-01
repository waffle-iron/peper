<template>
    <div class="peper-textfield">
        <input ref="input" :type="type" :value="value" @input="updateValue($event.target.value)">
        <div class="peper-textfield-floating-placeholder" @click="focusTextfield">{{placeholder}}</div>
        <div class="peper-textfield-line"></div>
        <div class="peper-textfield-bottom-text"></div>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                default: "text",
            },
            value: {},
            placeholder: {
                default: "",
            }
        },
        methods: {
            updateValue(val) {
                var $el = $(this.$refs.input)
                if (val === "") {
                    $el.removeClass("has-text");
                } else {
                    $el.addClass("has-text");
                }
                this.$emit('input', val);
            },
            focusTextfield() {
                $(this.$refs.input).focus();
            }
        }
    }
</script>
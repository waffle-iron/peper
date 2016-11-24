<template>
    <div class="peper-code">
        <div class="copy-button" v-ripple>
            COPY
        </div>
        <pre><code class="html" style="max-width: 1170px;margin: 0 auto; padding-left:12px; padding-right: 54px;"><slot></slot></code></pre>
    </div>
</template>

<script>
    import hljs from "../js/highlight.pack";
    export default {
        props: {
            language: {
                default: "html",
            }
        },
        mounted(){
            let blocks = $(this.$el).find("pre code");
            blocks.each(function() {
                hljs.highlightBlock(this);
            });
        }
    }
</script>

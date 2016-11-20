<template>
    <div class="peper-code">
        <div class="copy-button">
            COPY
        </div>
        <pre><code class="html"><slot></slot></code></pre>
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

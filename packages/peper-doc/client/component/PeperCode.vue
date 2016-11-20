<template>
    <div class="peper-code">
        <div style="position: absolute; top: 0; right: 0; background: #666; z-index: 5; padding-left: 4px; padding-right: 4px; font-size: 12px; height: 32px; line-height: 32px">
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

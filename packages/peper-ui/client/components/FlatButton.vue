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
        self.$nextTick(function() {
            $el = $(self.$el);

            $el.hover(function() {
                $(this).addClass("hover");
            }, function() {
                $(this).removeClass("hover");
            });

            $el.on("touchstart click", function() {
                var $this =$(this);
                self.$emit('click');
                $this.trigger("mouseleave");
                $this.blur();
                $this.addClass("hover");
                $this.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(e) {
                    $this.removeClass("hover");
                });
            })
        })
    }
}
</script>

<template>
<div class="peper-menu showOnTrigger">
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        trigger: null,
        openOn: {default: 'click'},
        left: {
            type: Boolean,
            default: true,
        },
        top: {
            type: Boolean,
            default: true,
        },
        makeCenter: null,
        hasGap: null,
    },
    mounted() {
        let self = this;
        let $thisEl = $(this.$el);
        let divideBy = 1;
        let gap = 0;

        if (self.openOn === "always") {
            $thisEl.removeClass("showOnTrigger");
        }

        if (self.makeCenter !== undefined) {
            divideBy = 2;
        }

        if (self.hasGap) {
            gap = 4;
        }

        let menuPosition = function() {
            if (self.trigger !== undefined) {
                let $trigger = $(self.trigger);
                let $posLeft = $trigger.offset().left;
                let $posTop = $trigger.offset().top;

                if (!self.top) {
                    $posTop = $posTop + gap;
                    $thisEl.addClass('bottom');
                } else {
                    $posTop = $posTop + $trigger.outerHeight() - gap - $thisEl.outerHeight();
                    $thisEl.addClass('top');
                }

                if (!self.left) {
                    $posLeft = $posLeft + $trigger.outerWidth() - gap - $thisEl.outerWidth();
                    $thisEl.addClass('right');
                } else {
                    $posLeft = $posLeft + gap;
                    $thisEl.addClass('left');
                }

                $thisEl.css({
                    top: $posTop,
                    left: $posLeft,
                })

                let $children = $thisEl.children();
                let childrenLength = $children.length;
                // let count = 1;
                // $children.each(function() {
                //     $(this).addClass('fade-top-right');
                //     $(this).css('transition-delay', (count * 0.05 + 0.2) + "s");
                //     count++;
                // })
                $trigger.unbind( self.openOn + '.menu');
                $trigger.bind(self.openOn  + '.menu', function() {
                    $thisEl.toggleClass('show');
                });

                var enableClick = false;
                $(document).unbind('mouseup.menu');
                $(document).on("mouseup.menu", function(e) {
                    if ($thisEl.hasClass('show') && enableClick) {
                        inActive();
                        return;
                    }
                    enableClick = true;
                });

                var inActive = function() {
                    $thisEl.removeClass('show');
                    enableClick = false;
                }

                $("*").unbind('scroll.menu');
                $("*").bind("scroll.menu", function() {
                    inActive();
                })
            }
        }
        menuPosition();

        $(window).on("resize",function() {
            menuPosition();
        })
    }
};
</script>

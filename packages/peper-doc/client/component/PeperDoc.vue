<template>
    <div class="peper-doc">
        <div class="render">
            <div class="page-container">
                <slot name="render"></slot>
            </div>
        </div>
        <div class="label" style="line-height: 48px; text-align: center">
            <slot name="label"></slot>
        </div>
        <div class="code">
            <slot name="code"></slot>
        </div>
    </div>
</template>

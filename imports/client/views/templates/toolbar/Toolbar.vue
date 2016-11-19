<template>
    <span>
        <toolbar title="Peper" text-color="white" background-color="theme" :fix="true" v-depth="1" no-depth-before="#index-header" no-title-before="#index-header">
            <div slot="left">
                <icon-button name="drag"  v-sidenav:click="" v-ripple></icon-button>
                <!-- <icon-button name="menu" v-ripple v-sidenav:click=""></icon-button> -->
            </div>
            <div slot="right">
                <icon-button id="menu" name="dots-vertical"  v-ripple></icon-button>
            </div>
        </toolbar>
        <dropdown-menu trigger="#menu" :top="false" :left="false" :has-gap="true">
            <menu-item icon="pencil" text="Edit"></menu-item>
            <menu-item icon="content-copy" text="Duplicate"></menu-item>
            <menu-item icon="share-variant" text="Share" :disabled="true"></menu-item>
            <menu-item :divider="true"></menu-item>
            <menu-item icon="delete" text="Delete"></menu-item>
        </dropdown-menu>
    </span>
</template>

<script>
import 'meteor/skynightz93:peper-ui';
export default {
    mounted() {
        if(this.$route.matched.some(record => record.meta.fixToolbar)) {
        }
    }
}
</script>

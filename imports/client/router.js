import {Router} from 'meteor/akryum:vue-router2';
import Toolbar from '/imports/client/views/templates/toolbar/Toolbar.vue';
import ComponentToolbar from '/imports/client/views/templates/toolbar/ComponentToolbar.vue';
import SideNavigation from '/imports/client/views/templates/navigation/SideNavigation.vue';
import Index from '/imports/client/views/public/Index.vue';
import ComponentsAvatar from '/imports/client/views/public/components/Avatar.vue';
import ComponentsButton from '/imports/client/views/public/components/Button.vue';
import ComponentsCard from '/imports/client/views/public/components/Card.vue';
import ComponentsSelectionControl from '/imports/client/views/public/components/SelectionControl.vue';
// import GoldIndex from '/imports/client/views/public/gold/Index.vue';
// import GoldDefaultToolbar from '/imports/client/views/templates/toolbar/GoldDefaultToolbar.vue';


Router.configure(router => {
    router.addRoutes([
        {
            path: "/",
            name: "Index",
            meta: { fixToolbar: true },
            components: {
                default: Index,
                toolbar: Toolbar,
                navigation: SideNavigation,
            }
        },
        {
            path: "/nizul",
            name: "Nizul",
            meta: { fixToolbar: true },
            components: {
                default: Index,
                toolbar: Toolbar,
                navigation: SideNavigation,
            }
        },
        {
            path: "/components/button",
            name: "ComponentsButton",
            meta: { fixToolbar: true },
            components: {
                default: ComponentsButton,
                toolbar: ComponentToolbar,
                navigation: SideNavigation,
            }
        },
        {
            path: "/components/avatar",
            name: "ComponentsAvatar",
            meta: { fixToolbar: true },
            components: {
                default: ComponentsAvatar,
                toolbar: ComponentToolbar,
                navigation: SideNavigation,
            }
        },
        {
            path: "/components/card",
            name: "ComponentsCard",
            meta: { fixToolbar: true },
            components: {
                default: ComponentsCard,
                toolbar: ComponentToolbar,
                navigation: SideNavigation,
            }
        },
        {
            path: "/components/selection-control",
            name: "ComponentsSelectionControl",
            meta: { fixToolbar: true },
            components: {
                default: ComponentsSelectionControl,
                toolbar: ComponentToolbar,
                navigation: SideNavigation,
            }
        },
    ]);
});

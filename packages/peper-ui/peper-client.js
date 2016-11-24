import './client/directives/v-ripple';
import './client/directives/v-depth';
import './client/directives/v-sidenav';
import './plugin/optiscroll/optiscroll.min';
import './plugin/resize/jquery.resize';
import './plugin/particles/jquery.particleground.min';

$.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$.fn.waitForImages = function (callback) {
    var $img = $('img', $(this)),
        totalImg = $img.length;

    var waitImgLoad = function () {
        totalImg--;
        if (!totalImg) {
            callback();
        }
    };

    if (totalImg > 0) {
        $img.load(waitImgLoad)
            .error(waitImgLoad);
    } else {
        callback();
    }
};

import {Vue} from 'meteor/akryum:vue';
import Avatar from './client/components/Avatar.vue';
import Cards from './client/components/Cards.vue';
import CardsImage from './client/components/CardsImage.vue';
import CardsAction from './client/components/CardsAction.vue';
import CardsContent from './client/components/CardsContent.vue';
import ColorButton from './client/components/ColorButton.vue';
import FlatButton from './client/components/FlatButton.vue';
import LoadImg from './client/components/LoadImg.vue';
import Toolbar from './client/components/Toolbar.vue';
import DropdownMenu from './client/components/DropdownMenu.vue';
import MenuItem from './client/components/MenuItem.vue';
import Icon from './client/components/Icon.vue';
import IconButton from './client/components/IconButton.vue';
import FlexContainer from './client/components/FlexContainer.vue';
import ScrollBar from './client/components/ScrollBar.vue';
import FullHeight from './client/components/FullHeight.vue';
import PageContainer from './client/components/PageContainer.vue';
import RaisedButton from './client/components/RaisedButton.vue';
import SideNavigation from './client/components/SideNavigation.vue';
import NavList from './client/components/NavList.vue';
import SideNavigationProfile1 from './client/components/SideNavigationProfile1.vue';
import TransitionBlock from './client/components/TransitionBlock.vue';

$.propHooks.checked = {
    set: function(elem, value, name) {
        var ret = (elem[ name ] = value);
        $(elem).trigger("change");
        return ret;
    }
};

Vue.component("avatar", Avatar);
Vue.component("cards", Cards);
Vue.component("cards-image", CardsImage);
Vue.component("cards-content", CardsContent);
Vue.component("cards-action", CardsAction);
Vue.component("color-button", ColorButton);
Vue.component("flat-button", FlatButton);
Vue.component("load-img", LoadImg);
Vue.component("toolbar", Toolbar);
Vue.component("dropdown-menu", DropdownMenu);
Vue.component("menu-item", MenuItem);
Vue.component("icon", Icon);
Vue.component("icon-button", IconButton);
Vue.component("flex-container", FlexContainer);
Vue.component("full-height", FullHeight);
Vue.component("page-container", PageContainer);
Vue.component("raised-button", RaisedButton);
Vue.component("side-navigation", SideNavigation);
Vue.component("side-navigation-profile-1", SideNavigationProfile1);
Vue.component("transition-block", TransitionBlock);
Vue.component("nav-list", NavList);

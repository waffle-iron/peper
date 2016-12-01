<template>
    <side-navigation v-depth="2">
        <div slot="header">
            <side-navigation-profile-1 text1="Nizul Zaim" text2="skynightz9@gmail.com"></side-navigation-profile-1>
        </div>
        <nav-list to="/" class="nav-item">
            <icon name="paper-cut-vertical"></icon> Peper UI
        </nav-list>
        <nav-list to="/nizul" class="nav-item">
            <icon name="format-text"></icon> Typography
        </nav-list>
        <nav-list :sublist="true">
            <icon name="view-quilt"></icon> Components
            <span slot="sublist">
                <nav-list to="/components/avatar"><icon name="account-box"></icon> Avatar UI</nav-list>
                <nav-list to="/components/button"><icon name="crop-landscape"></icon> Button UI</nav-list>
                <nav-list to="/components/card"><icon name="cards"></icon> Card UI</nav-list>
                <nav-list to="/components/selection-control"><icon name="toggle-switch"></icon> Selection Control UI</nav-list>
                <nav-list to="/components/text-field"><icon name="textbox"></icon> Textfield UI</nav-list>
                <nav-list to="/components/tabs"><icon name="cash"></icon> Tabs UI</nav-list>
            </span>
        </nav-list>
        <!-- <nav-list to="/gold" class="nav-item">
            <icon name="cellphone-link"></icon> Gold System
        </nav-list> -->
    </side-navigation>
</template>

<script>
export default {

}
</script>

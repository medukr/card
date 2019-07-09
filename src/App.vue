<template>
    <div id="app">
        <c-navbar></c-navbar>

        <div class="container container-fluid pt-5">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 mt-3 border-bottom border-dark">

                    <c-profile></c-profile>

                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 pt-3">

                    <router-view></router-view>

                </div>
            </div>
        </div>
        <c-footer></c-footer>
        <c-scroll-to-top></c-scroll-to-top>
    </div>
</template>

<script>

    import CNavbar from './components/navbar'
    import CProfile from './components/profile'
    import CFooter from './components/footer'
    import CScrollToTop from './components/scrollToTop'

    export default {
        name: 'app',
        components: {
            CNavbar,
            CProfile,
            CFooter,
            CScrollToTop
        },
        data() {
            return {}
        },
        computed: {
            test() {
                return this.$store.getters['test'];
            }
        }
    }
</script>

<style>
    @import "../assets/styles/card.css";
</style>

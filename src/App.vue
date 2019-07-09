<template>
    <div id="app">
        <c-navbar></c-navbar>

        <div id="container" class="container container-fluid mt-5 mb-2">
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
        methods: {
            dynamicContentMinHeight(){
                this.setContentMinHeight();
                window.addEventListener('resize', () => {
                    this.setContentMinHeight()
                })
            },
            setContentMinHeight(){
                this.$el.querySelector('div#container').style.minHeight = (window.innerHeight - this.$el.querySelector('div.footer').scrollHeight -  this.$el.querySelector('nav.navbar').scrollHeight) + 'px';
            }
        },
        mounted() {
            this.dynamicContentMinHeight();
        }
    }
</script>

<style>
    @import "../assets/styles/card.css";
</style>

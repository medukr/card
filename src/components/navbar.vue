<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link
                :to="{name:'home'}"
                tag="a"
                class="navbar-brand"><i class="fa fa-home"></i></router-link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link
                :to="{name:'resume'}"
                tag="a"
                class="nav-item nav-link"
                active-class="active">Resume</router-link>
                <router-link
                        :to="{name:'about'}"
                        tag="a"
                        class="nav-item nav-link"
                        active-class="active">About</router-link>
                <router-link
                        :to="{name:'contacts'}"
                        tag="a"
                        class="nav-item nav-link"
                        active-class="active">Contacts</router-link>

            </div>
        </div>

        <div class="ml-auto">
            <div class="d-flex">

                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fab fa-github"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fab fa-skype"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fab fa-telegram"></i></a>
                    </li>
                </ul>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>

</style>
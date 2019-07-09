<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link
                :to="{name:'home'}"
                tag="a"
                class="navbar-brand"><i class="fa fa-home" @click="onClick"></i></router-link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" @click="onClick">
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
                        active-class="active"
                        >Contacts</router-link>

            </div>
        </div>

        <div class="ml-auto">
            <div class="d-flex">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/medukr" target="_blank"><i class="fab fa-github"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="skype:andrii.demydiuk?userinfo" target="_blank"><i class="fab fa-skype"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://t.me/nicotinamide" target="_blank"><i class="fab fa-telegram"></i></a>
                    </li>
                </ul>
                <button
                        class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navbar",
        methods: {
            onClick(){
                if (this.$el.querySelector('div#navbarNavAltMarkup').classList.contains('show'))  {

                    var evObj = document.createEvent('MouseEvents');
                    evObj.initMouseEvent('click', true, true);

                    this.$el.querySelector('button.navbar-toggler').dispatchEvent(evObj);
                }

            }
        }
    }
</script>

<style scoped>

</style>
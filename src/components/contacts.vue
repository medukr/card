<template>
    <div>
    <div class="text-center">
        <h3>Contacts</h3>
    </div>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                Contacts
            </h5>
        </div>

        <div class="card-body p-0">
            <table class="table table-striped table-hover my-0">
                <tbody>
                <tr>
                    <th scope="row">{{contacts.adress.title}}:</th>
                    <td>{{contacts.adress.city}}</td>
                </tr>
                <tr>
                    <th scope="row">{{contacts.email.title}}:</th>
                    <td><a :href="contacts.email.link">{{contacts.email.name}}</a></td>
                </tr>
                <tr>
                    <th scope="row">{{contacts.phone.title}}:</th>
                    <td><a :href="contacts.phone.link">{{contacts.phone.name}}</a></td>
                </tr>
                <tr>
                    <th scope="row">{{contacts.skype.title}}:</th>
                    <td><a :href="contacts.skype.link">{{contacts.skype.name}}</a></td>
                </tr>
                <tr>
                    <th scope="row">{{contacts.telegram.title}}</th>
                    <td><a :href="contacts.telegram.link">{{contacts.telegram.name}}</a></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    export default {
        name: "contacts",
        computed : {
            ...mapGetters({
                contacts: 'contacts'
            })
        }
    }
</script>

<style scoped>

</style>
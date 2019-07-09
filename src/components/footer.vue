<template>
    <div class="footer">
        <div class="footer-body">
            <div class="card-text text-center text-white">
                <span v-if="new Date().getFullYear() === 2019">2019</span>
                <span v-else>2019 - {{new Date().getFullYear()}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>
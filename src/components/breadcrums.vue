<template>

    <div class="breadcrumbs">

        <template v-if="show">

            <router-link :to="'/'"> Главная </router-link>{{'\xa0'}}/ Коллекции / {{ collection  }}

        </template>
        
    </div>

</template>

<script>
    export default{
        props: {
            show: { Boolean, default: false },
            collection: { String, default: 'Коллекция' }
        }

    }


</script>

<style>

@import "@/assets/css/breadcrumbs.css";

</style>
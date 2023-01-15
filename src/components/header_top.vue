<template>

        

        <div class="header">

            
            <router-link to="/" class="url_route">
                <div class="logo"> ГО <span>|</span> Галерея Орфей </div>
            </router-link>

            <div class="search">
                <span>Поиск</span>
                <span>
                    <img class="search_icon" src="@/assets/img/search.svg" alt="">
                </span>
            </div>

            <div class="lang">
                <span class="active">RU</span>
                <span>EN</span>
            </div>



        </div>

</template>

<script>

    export default {

        name: 'HeaderTop'

    }

</script>

<style>

    @import '@/assets/css/header_top.css';

</style>


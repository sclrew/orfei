<template>

    <div class="header_main">

        <div class="header_main_menu">

            <div class="header_main_menu_item">
                Коллекция
            </div>

            <div class="header_main_menu_item">
                Художники
            </div>

            <div class="header_main_menu_item">
                Купить картину
            </div>

            <div class="header_main_menu_item">
                Контакты
            </div>

        </div>

        <div class="header_main_title">
            {{ title }}
        </div>

        <div class="header_main_button" @click="scrollDown()">
            <img src="@/assets/img/icon_green_arrow_down.svg">
        </div>

        <div class="header_main_bg_wrapper">
            <img class="header_main_bg" :src="bg_url">
        </div>

    </div>



</template>

<script>

    export default {

        name: 'HeaderMain',
        props: { 
            bg_url: {String, default: ''},
            title: { String, default: 'Заголовок' }
        },
        setup(){


            function scrollDown(){
                window.scrollTo({ top: 750, behavior: 'smooth' })
            }

            return {
                scrollDown
            }
        }

    }

</script>

<style>

@import '@/assets/css/header_main.css';;

</style>
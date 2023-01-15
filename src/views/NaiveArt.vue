<template>

    <div class="content">

        <header_top />
        <header_main
            :title="'Наивное искусство'"
            :bg_url="'/images/naive_art_bg.jpg'"
        />

        <div class="gallery_block_wrapper" v-for="(item, index) in galleryItems" :key="index">
            <gallery_block :data="item" />
        </div>
        
        <more_works />
        <interesting />

        <news_item />
        <footer_item />

    </div>

    <template v-if="onPage.isUnloading">
        <unloading />
    </template>

    <loading />

</template>

<script>

import header_top from '../components/header_top.vue';
import header_main from '../components/header_main.vue'
import unloading from '../components/unloading.vue';
import loading from '../components/loading.vue';
import gallery_block from '../components/gallery_block.vue';
import more_works from '../components/more_works.vue'
import interesting from '../components/interesting.vue'
import news_item from '../components/news.vue'
import footer_item from '../components/footer.vue'

import { reactive } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';


    export default{
        name :'Naive art',
        components : {
            header_top,
            header_main,
            gallery_block,
            more_works,
            interesting,
            news_item,
            footer_item,

            unloading,
            loading
        },

        setup(){

            const onPage = reactive({
                isUnloading: false,

            })

            onBeforeRouteLeave(async() => {
                onPage.isUnloading = true
                await new Promise(resolve => setTimeout(resolve, 2000));
            });

            const galleryItems = [
            {
                breadcrumbs: {
                    show: true,
                    collection: 'Наивное искусство'
                },
                left: {
                    title: 'Дракон',
                    author: 'Василиса Штурба, 2021',
                    src: '/gallery_items/drakon.jpg',
                },
                right: {
                    title: 'Одноглазая рыба',
                    author: 'Василиса Штурба, 2021',
                    src: '/gallery_items/one_year_fish.jpg',
                },               
            },
            {
                breadcrumbs: {
                    show: false,
                    collection: ''
                },
                left: {
                    title: 'Радужный мир',
                    author: 'Василиса Штурба, 2022',
                    src: '/gallery_items/radujniy_mir.jpg',
                },
                right: {
                    title: 'Папа',
                    author: 'Василиса Штурба, 2022',
                    src: '/gallery_items/papa.jpg',
                },               
            },
            {
                breadcrumbs: {
                    show: false,
                    collection: ''
                },
                left: {
                    title: 'Груша',
                    author: 'Василиса Штурба, 2022',
                    src: '/gallery_items/grusha.jpg',
                },
                right: {
                    title: 'Яблоко',
                    author: 'Василиса Штурба, 2022',
                    src: '/gallery_items/apple.jpg',
                },               
            },
            {
                breadcrumbs: {
                    show: false,
                    collection: ''
                },
                left: {
                    title: 'Морская мышка',
                    author: 'Василиса Штурба, 2021',
                    src: '/gallery_items/sea_mouse.jpg',
                },
                right: {
                    title: 'Попугай в подземелье',
                    author: 'Василиса Штурба, 2022',
                    src: '/gallery_items/parrot_in_underground.jpg',
                },               
            }

            ];

           

            

            return {
                onPage,
                galleryItems
            }

    }
}



</script>


<style>

@import '@/assets/css/main.css';

</style>
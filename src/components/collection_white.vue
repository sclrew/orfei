<template>

    <div class="collection_white">

        <div class="collection_white_title">
            Коллекция
        </div>

        <div class="collection_white_items">
            <collection_item 
            :title="'Живопись'" 
            :img="'images/collection1.jpg'"
            />
            
            
            <collection_item 
            :title="'Рисунки'" 
            :img="'images/collection2.jpg'"
            />
        </div>
        

    </div>



</template>

<script>

import collection_item from './collection_item.vue';

    export default{
        name: 'CollectionWhite',
        components: {
            collection_item,

        }
    }
</script>

<style>

@import "@/assets/css/collection_white.css";

</style>
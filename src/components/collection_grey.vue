<template>

    <div class="collection_grey">
        
        <collection_item 

            :title="'Предметы'"
            :img="'images/collection3.jpg'"
        
        />

        <collection_item 

            :title="'Наивное искусство'"
            :img="'images/collection4.jpg'"
            :url="'/naive_art'"

        />


    </div>

</template>

<script>

import collection_item from './collection_item.vue';

export default{
    name: "CollectionGrey",
    components: {
        collection_item
    }


}

</script>

<style>

@import "@/assets/css/collection_grey.css";

</style>
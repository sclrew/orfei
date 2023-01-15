<template>

    <div class="collection_item">

        <div class="collection_item_img_wrapper">

            <template v-if="url == ''">
                <img class="collection_item_img" :src="img" />
            </template> 
            <template v-else>
                <router-link :to="url">
                    <img class="collection_item_img" :src="img" />
                </router-link>
            </template> 
            
        </div>
        

        <template v-if="url == ''">
            <div class="collection_item_title">{{  title  }}</div>
        </template> 
        <template v-else>
            <router-link :to="url" class="url_route">
                <div class="collection_item_title">{{  title  }}</div>
            </router-link>
        </template> 

        <div class="collection_item_icon_wrapper">

            <template v-if="url == ''">
                <img class="collection_item_icon" src="@/assets/img/icon_green_arrow_down.svg">
            </template> 
            <template v-else>
                <router-link :to="url">
                    <img class="collection_item_icon" src="@/assets/img/icon_green_arrow_down.svg">
                </router-link>
            </template> 
        </div>

    </div>


</template>

<script>

export default{

    props: {
        title: {String, default: 'Ничего'},
        img: {String, default: ''},
        url: {String, default: ''},
    }


}


</script>

<style>

@import "@/assets/css/collection_item.css"

</style>
<template>

    <div class="gallery_item">

        <div class="gallery_item_img_wrapper">
            <img class="gallery_item_img" :src="src" :title="title" />
        </div>
        

        <div class="gallery_item_title">
            {{ title  }}
        </div>

        <div class="gallery_item_author">
            {{  author  }}
        </div>

        <div class="gallery_item_icon_wrapper">
            <img class="gallery_item_icon" src="@/assets/img/icon_green_arrow_down.svg">
        </div>

    </div>



</template>

<script>


export default{

    props: {
        title: { String, default: '' },
        src: { String, default: '' },
        author: { String, default: '' }
    }
}


</script>

<style>

@import "@/assets/css/gallery_block_item.css";

</style>
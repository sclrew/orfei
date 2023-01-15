<template>

    <div class="gallery_block">

        <breadcrums 
            :show="data.breadcrumbs.show" 
            :collection="data.breadcrumbs.collection"
        />
        
        <div class="gallery_block_content">

            <div class="gallery_block_item">
            <gallery_block_item 
                :title="data.left.title"
                :author="data.left.author"
                :src="data.left.src"
            />
            </div>
        
            <div class="gallery_block_item">
                <gallery_block_item 
                    :title="data.right.title"
                    :author="data.right.author"
                    :src="data.right.src"
                />
            </div>  

        </div>

             

    </div>

   

</template>

<script>

import gallery_block_item from './gallery_block_item.vue';
import breadcrums from './breadcrums.vue';

export default{

        name :'Gallery block',
        components: {
            gallery_block_item,
            breadcrums
        },
        props: {
            data: { Object } 

        }
             
}



</script>


<style>

@import "@/assets/css/gallery_block.css"

</style>
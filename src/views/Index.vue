
<template>

  <div class="content">
    
    <header_top />
    <header_main
      :title="'Добро пожаловать в Галерею Орфей'"
      :bg_url="'/images/header_main_bg.jpg'"
    />
    <collection_white />
    <collection_grey />
    <news_item />
    <footer_item />

  </div>

  <template v-if="onPage.isUnloading == true">
    <unloading_item />
  </template>

  <loading_item />

  
</template>

<script>
import header_top from '../components/header_top.vue';
import header_main from '../components/header_main.vue'
import collection_white from '../components/collection_white.vue';
import collection_grey from '../components/collection_grey.vue';
import news_item from '../components/news.vue'
import footer_item from '../components/footer.vue'
import unloading_item from '../components/unloading.vue';
import loading_item from '../components/loading.vue'

import { reactive } from 'vue';
import { onBeforeRouteLeave } from 'vue-router'

export default{
  name: 'Index',
  components:{
    header_top,
    header_main,
    collection_white,
    collection_grey,
    news_item,
    footer_item,
    unloading_item,
    loading_item

  },
  setup(){

    const onPage = reactive({
      isUnloading: false,
    })

    onBeforeRouteLeave(async() => {
      onPage.isUnloading = true
      await new Promise(resolve => setTimeout(resolve, 2000));
    });

    return{
      onPage
    }

  }



}


</script>


<style>

@import '@/assets/css/main.css';

</style>


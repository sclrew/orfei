<template>

    <div class="unloading" :class="onPage.start" ></div>

</template>

<script>
import { reactive } from 'vue';



export default{

    setup(){

        const onPage = reactive({
            start: 'nothing'
        })

        setTimeout(() => {
            onPage.start = 'start'
        }, 50)

        return{
            onPage
        }

    }
    
}

</script>

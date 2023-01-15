<template>

    <div class="loading" :class="onPage.stop" @click.stop>

    </div>

</template>

<script>
import { reactive } from 'vue';



export default{
   
    setup(){

        const onPage = reactive({
            stop: 'nothing'
        })

        setTimeout(() => {
            onPage.stop = 'stop'
        }, 50)

        return{
            onPage
        }

    }
    
}

</script>

<template>

    <div class="interesting">

        <div class="interesting_left">
            <span class="interestin_left_title"> Заинтересовала картина? </span>
            <span class="interestin_left_write"> Напишите нам <img src="@/assets/img/icon_arrow_rigth_black.svg" > </span>
        </div>

        <div class="interesting_rigth">
            
            <router-link to="/" class="url_route">
                <div class="interesting_rigth_content">
                    <span class="interesting_rigth_link"> Вернуться на главную страницу </span> 
                    <img class="interesting_rigth_icon" src="@/assets/img/icon_black_arrow_right.svg" alt="">
                </div>
                
            </router-link>

        </div>
       
    </div>


</template>

<style scoped>

.interesting{
    height: 207px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 170px;
    padding-right: 170px;
    border-top: 8px solid #42BA85;
}

.interesting_left{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

.interestin_left_title{
    display: block;
    padding-bottom: 32.5px;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 32px;
    color: #000000;
}

.interestin_left_write{
    cursor: pointer;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 32px;
    color: #000000;
}

.interesting_rigth_link{
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 32px;
    color: #000000;
}

.interesting_rigth_icon{
    padding-left: 17px;
    height: 26px;
    width: 26px;
}
.interesting_rigth_content{
    display: flex;
    align-items: center;
}



</style>
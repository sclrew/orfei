<template>

    <div class="footer">

        <div class="footer_top">

            <div class="footer_top_left">

                <div class="footer_top_left_title">
                    ГО | Галерея Орфей
                </div>

                <div class="footer_top_left_img_wrapper">
                    <img class="footer_top_left_img" src="@/assets/img/footer_bg.svg" alt="">
                </div>
                
                <div class="footer_top_left_menu">
                    <span class="footer_menu_item active"> Коллекция </span>
                    <span class="footer_menu_item"> Художники </span>
                    <span class="footer_menu_item"> Купить картину </span>
                </div>

            </div>



            <div class="footer_top_right">

                <div class="footer_top_right_social_icons">

                    <img src="@/assets/img/social/telegram.svg" alt="">
                    <img src="@/assets/img/social/whatsup.svg" alt="">
                    <img src="@/assets/img/social/vk.svg" alt="">
                    <img src="@/assets/img/social/insta.svg" alt="">
                    <img src="@/assets/img/social/facebook.svg" alt="">

                </div>

                <div class="footer_top_right_menu">
                    <span class="footer_menu_item active"> Контакты </span>
                    <span class="footer_menu_item"> Поиск по сайту </span>
                    <span class="footer_menu_item"> Новости </span>
                </div>

                <div class="footer_top_right_splitter"></div>

                <div class="footer_top_right_text">

                    Галерея Орфей является обладателем прав на все изображения произведений искусства из коллекции, а также на текстовую информацию, которая размещена на  сайте. Использование текстов и изображений, опубликованных на сайте, возможно только с согласия правообладателя

                </div>

            </div>


        </div>


        <div class="footer_bottom">

            <div class="footer_bottom_prava">
                <span>Все права защищены</span>
                <span>Политика конфиденциальности</span>
            </div>

            <div class="footer_bottom_year">
                {{ showYear() }} 
                <span>@</span>
                Галерея Орфей
            </div>

            <div class="footer_bottom_author">
                Дизайн Анастасия Штурба
            </div>


        </div>

    </div>


</template>

<script>

export default{


    setup(){

        function showYear(){
            return new Date().getFullYear()
        }

        return{
            showYear
        }
    }

}


</script>

<style>

@import "@/assets/css/footer.css";

</style>
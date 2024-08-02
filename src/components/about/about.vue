<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<template>
  <div class="container py-6" id="about">
    <h3>О курсах</h3>
    <div class="flex justify-between gap-10 py-6">
      <div class="w-1/2">
        <swiper
          :spaceBetween="5"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="false"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <img src="@assets/img/ira.png" alt="aa" />
          </swiper-slide>
          <swiper-slide>
            <img src="@assets/img/ira2.png" alt="aa" />
          </swiper-slide>
        </swiper>
      </div>
      <div>
        <h4 class="font-normal">
          <span class="font-bold">Курсы английского языка</span> помогут вам
          овладеть языком на всех уровнях, от начального до продвинутого. МЫ
          используем современные методики и интерактивные занятия для
          эффективного обучения. Вы сможете развивать навыки говорения,
          аудирования, чтения и письма.
          <div class="my-5">
            <a
              href="https://wa.me/79168453125?text=Доброго времени суток"
              class="font-bold link hover:text-white"
            >
              Присоединяйтесь и достигайте новых высот в изучении английского
              языка!
            </a>
          </div>
        </h4>
      </div>
    </div>
  </div>
</template>

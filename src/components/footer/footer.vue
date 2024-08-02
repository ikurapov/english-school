<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-white shadow-lg font-bold" id="footer">
    <div class="container-header flex justify-between py-3 font-lato">
      <a class="flex flex-col link">
        <h4>Курсы Английского Языка</h4>
        <h5 class="italic">Ирины Михайловны</h5>
      </a>
      <ul class="flex flex-col gap-5 text-xl">
        <li><a href="#about" class="link">О курсах</a></li>
        <li><a href="#directions" class="link">Направления</a></li>
        <!-- <li><a class="link">Отзывы</a></li> -->
        <li><a href="#footer" class="link">Контакты</a></li>
      </ul>
      <div class="text-xl gap-y-5">
        <a class="link" href="tel:+79168453125">+7 916 845-31-25</a>
        <div class="flex gap-1 justify-center">
          <a
            class="link"
            href="https://wa.me/79168453125?text=Доброго времени суток."
            ><Icon icon="ic:outline-whatsapp" width="48" height="48" />
          </a>

          <a class="link" href="https://t.me/Irina110594"
            ><Icon icon="ri:telegram-fill" width="48" height="48"
          /></a>
        </div>
        <h5>Свяжись с нами!</h5>
      </div>
    </div>
  </div>
</template>

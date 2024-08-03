<script setup>
import { defineStore } from "pinia";
// const useStore = defineStore();

const services = [
  {
    title: "Детям",
    img: "/src/assets/img/scholnik.png",
    subTitle:
      "Развивает когнитивные способности и улучшает память. Это открывает больше возможностей для будущего образования и карьеры.",
  },
  {
    title: "Малышам",
    img: "/src/assets/img/boy.png",
    subTitle:
      "Помогает малышам легко усваивать новые звуки и произношение. Это также способствует развитию языковой гибкости и мультикультурного понимания.",
  },
  {
    title: "Взрослым",
    img: "/src/assets/img/workman.png",
    subTitle:
      "Расширяет профессиональные возможности и улучшает карьерные перспективы. Это также помогает в путешествиях и открывает доступ к глобальным источникам информации.",
  },
  {
    title: "Компаниям",
    img: "/src/assets/img/comp.png",
    subTitle:
      "Позволяет эффективно общаться с международными партнёрами и клиентами. Это способствует расширению бизнеса и улучшению конкурентоспособности на глобальном рынке.",
  },
];
</script>

<template>
  <div class="bg-white rounded-3xl shadow-lg mx-5" id="directions">
    <div class="container justify-between place-items-center py-6">
      <h2>Направления</h2>

      <div class="grid grid-cols-2 grid-row-2 gap-7 py-10">
        <div
          v-for="service of services"
          :key="service.id"
          class="flex justify-end border-accent/10 hover:border-accent/20 hover:bg-accent/10 border-2 outline-2 hover:outline-8 rounded-xl px-3 py-6 relative transition-all duration-200 ease-in"
        >
          <div class="w-1/3 absolute bottom-0 left-0">
            <img :src="service.img" :alt="service.title" />
          </div>
          <div class="w-2/3 gap-2 min-h-40">
            <h4>{{ service.title }}</h4>
            <p>{{ service.subTitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

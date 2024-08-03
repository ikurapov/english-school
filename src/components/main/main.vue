<script setup></script>

<template>
  <div class="main container shadow-primary flex py-36">
    <div class="flex flex-col gap-10 w-3/5">
      <h1 class="text-5xl font-bold">
        Занятия с репетитором по
        <span class="italic font-normal"> английскому</span>
      </h1>
      <h3 class="text-2xl">Доступные уроки Английского языка в Подольске</h3>
      <div class="button w-3/6 text-xl text-center">
        <a href="https://wa.me/79168453125?text=Доброго времени суток."
          >Связаться с нами</a
        >
      </div>
    </div>
    <div class="flex flex-col w-2/5 gap-12 text-4xl text-center">
      <div
        class="-rotate-3 w-3/4 flex justify-start py-6 px-10 static flex items-center bg-secondary/50 rounded-full"
      >
        <img
          class="absolute bottom-50 right-[-70px] w-40 max-lg:hidden"
          src="@assets/img/work.png"
          alt="work"
        />
        <p>Для работы</p>
      </div>
      <div
        class="rotate-6 flex justify-end w-3/4 py-6 px-4 static flex items-center bg-secondary/50 rounded-full"
      >
        <img
          class="absolute bottom-50 left-[-60px] w-40 max-lg:hidden"
          src="@assets/img/book.png"
          alt="work"
        />
        <p class="">Для учёбы</p>
      </div>
      <div
        class="-rotate-3 flex justify-start py-6 px-10 static flex items-center bg-secondary/50 rounded-full"
      >
        <p class="">Для путешествий</p>
        <img
          class="absolute bottom-50 right-[-140px] w-60 max-xl:hidden"
          src="@assets/img/fly.png"
          alt="work"
        />
      </div>
    </div>
  </div>
</template>

<template>
  <section class="ctaWrapper">
    <h1 class="heroHeader">Learn Something New Today!</h1>
    <p class="heroBody">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo a
      beatae corporis. Temporibus nostrum dolores velit blanditiis facilis
      reiciendis cupiditate.
    </p>
    <nuxt-link to="/courses" class="ctaBtn">See All Courses</nuxt-link>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.ctaWrapper {
  @apply w-1/2 h-auto p-10 flex flex-col gap-2 bg-mainThree rounded-md text-center shadow-2xl bg-opacity-30 text-gray-200;
}

.heroHeader {
  @apply text-3xl tracking-widest mb-4 font-bold;
}

.heroBody {
  @apply text-lg font-extralight text-center text-gray-200;
}

.ctaBtn {
  @apply px-4 tracking-widest hover:bg-mainOne w-1/2 mx-auto transition-all transform hover:scale-125 duration-500 py-2 mt-5 rounded-xl bg-secondaryOne capitalize shadow-2xl;
}
</style>
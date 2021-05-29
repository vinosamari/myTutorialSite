<template>
  <section class="ctaWrapper">
    <h1 class="ctaHeader">Learn Something New Today!</h1>
    <p class="ctaBody">
      Try out a course, watch a video, read a blog post and experience learning
      tailored just for you
    </p>
    <nuxt-link to="/courses" class="ctaBtn">See All Courses</nuxt-link>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.ctaWrapper {
  @apply w-1/2 h-auto p-10 flex flex-col gap-2 bg-mainThree rounded-md text-center shadow-2xl bg-opacity-30 text-gray-200 hover:bg-opacity-80 transition-all duration-300;
}

.ctaHeader {
  @apply text-3xl tracking-widest mb-4 font-bold;
}

.ctaBody {
  font-family: "Montserrat";
  @apply text-lg font-extralight text-center capitalize tracking-wide
    text-gray-200;
}

.ctaBtn {
  @apply tracking-widest px-4 border-0 hover:border-0 hover:bg-mainThree mx-auto transition-all transform hover:scale-125 duration-300 py-2 mt-5 rounded-xl bg-secondaryOne capitalize shadow-2xl animate-pulse;
}
</style>
<template>
  <section class="wrapper">
    <h1 class="heroHeader">Learn Something New Today!</h1>
    <p class="heroBody">
      Try out a course, watch a video, read a blog post and experience learning
      tailored just for you.
    </p>
    <nuxt-link to="/courses" class="ctaBtn">See All Courses</nuxt-link>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  @apply w-3/4 h-auto p-10 mt-4 flex flex-col gap-1 bg-secondaryOne bg-opacity-10 rounded-md text-center shadow-xl font-mono hover:bg-opacity-70 transition-all duration-500 hover:shadow-inner;
}

.heroHeader {
  @apply text-5xl tracking-widest mb-6 mt-2 font-bold text-gray-200 capitalize;
}

.heroSubheader {
  @apply text-2xl mb-4 capitalize px-5 font-extralight;
}

.heroBody {
  @apply text-lg font-extralight text-center text-gray-200 capitalize;
}

.ctaBtn {
  @apply tracking-widest px-4 border-0 hover:border-0 hover:bg-secondaryThree mx-auto transition-all transform hover:scale-125 duration-300 py-2 mt-5 rounded-xl bg-secondaryOne capitalize shadow-2xl animate-pulse;
}
</style>
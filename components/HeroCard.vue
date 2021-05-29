<template>
  <section class="wrapper">
    <h1 class="heroHeader">TODAY'S TECH TIP</h1>
    <h2 class="heroSubheader">Be curious and maintain a learning mindset.</h2>
    <p class="heroBody">
      Curiosity is the key to innovation and it will turn you into a great
      problem-solver. As professionals, you must maintain a learning mindset and
      keep your knowledge and skills up-to-date with rapidly-changing technology
      trends.
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  @apply w-3/4 h-auto p-10 mt-4 flex flex-col gap-1 cursor-default bg-secondaryOne bg-opacity-10 rounded-md text-center shadow-xl font-mono hover:bg-opacity-70 transition-all duration-500 hover:shadow-inner;
}

.heroHeader {
  @apply text-5xl tracking-widest mb-6 mt-2 font-bold text-gray-200;
}

.heroSubheader {
  @apply text-2xl mb-4 capitalize px-5 font-extralight;
}

.heroBody {
  @apply text-lg font-extralight text-center text-gray-200;
}
</style>
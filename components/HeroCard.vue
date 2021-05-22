<template>
  <section class="wrapper">
    <h1 class="heroHeader">DAILY TECH TIP</h1>
    <h2 class="heroSubheader">Be curious and maintain a learning mindset.</h2>
    <p class="heroBody">
      " Curiosity is the key to innovation and it will turn you into a great
      problem-solver. As professionals, you must maintain a learning mindset and
      keep your knowledge and skills up-to-date with rapidly-changing technology
      trends. "
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  @apply w-3/4 h-auto p-10 mt-4 flex flex-col gap-1 bg-secondaryOne bg-opacity-30 rounded-md text-center shadow-xl font-mono hover:bg-opacity-70 transition-all duration-500 hover:shadow-inner;
}

.heroHeader {
  @apply text-5xl tracking-widest mb-6 mt-2 font-bold text-gray-200 drop-shadow-2xl;
}

.heroSubheader {
  @apply text-2xl mb-2 capitalize font-customOne  px-5 font-semibold bg-mainFour tracking-wide py-4 rounded-md bg-opacity-40;
}

.heroBody {
  @apply text-base font-light font-customOne text-center text-gray-200 bg-mainFour tracking-widest  px-8 py-4 rounded-xl bg-opacity-40;
}
</style>
<template>
  <section class="ctaWrapper">
    <h1 class="ctaHeader">TODAY'S TECH TIP</h1>
    <h2 class="heroSubheader">Be curious and maintain a learning mindset.</h2>
    <p class="ctaBody">
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
</style>
<template>
  <section class="wrapper">
    <h1 class="heroHeader">TODAY'S TECH TIP</h1>
    <h2 class="heroSubheader">Understand the product</h2>
    <p class="heroBody">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo a
      beatae corporis. Temporibus nostrum dolores velit blanditiis facilis
      reiciendis cupiditate.
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  @apply w-3/4 h-auto p-20 flex flex-col gap-2 bg-secondaryOne rounded-md text-center shadow-xl font-mono;
}

.heroHeader {
  @apply text-5xl tracking-widest mb-4 mt-2 font-bold text-gray-200;
}

.heroBody {
  @apply text-lg font-light text-center text-gray-200;
}
</style>
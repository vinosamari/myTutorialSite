<template>
  <div class="wrapper">
    <hero-card></hero-card>
    <call-to-action></call-to-action>
  </div>
</template>

<script>
import HeroCard from "~/components/HeroCard.vue";
import CallToAction from "~/components/CallToAction.vue";
export default {
  components: { HeroCard, CallToAction },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.wrapper {
  @apply flex flex-col gap-10 bg-mainFour justify-center py-20 items-center h-full text-white;
}
</style>

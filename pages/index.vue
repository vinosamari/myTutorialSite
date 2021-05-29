<template>
  <div class="mainWrapper">
    <hero-card class="💪🏼"></hero-card>
    <call-to-action class="☎️"></call-to-action>
  </div>
</template>

<script>
import HeroCard from "~/components/HeroCard.vue";
import CallToAction from "~/components/CallToAction.vue";
export default {
  components: { HeroCard, CallToAction },
  data() {
    return {
      radioCard: "",
    };
  },
  methods: {
    radioCardfunc() {
      console.log(this.radioCard);
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.mainWrapper {
  @apply flex flex-col gap-10 bg-mainFour justify-center py-20 items-center h-full text-white;
}
.💪🏼 {
}
.☎️ {
}
</style>

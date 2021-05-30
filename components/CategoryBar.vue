<template>
  <div class="mainContainer"></div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  async fetch() {
    this.categories = await fetch("http://localhost:1337/categories").then(
      (res) => {
        res.json();
      }
    );
  },
};
</script>

<style  scoped>
.mainContainer {
  @apply flex justify-center items-center z-50 bg-red-600;
}
</style>
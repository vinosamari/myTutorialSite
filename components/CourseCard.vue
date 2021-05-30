<template>
  <div class="card">
    <img class="courseImage" :src="courseImage" :alt="courseTitle" />
    <h1 class="courseTitle">{{ courseTitle }}</h1>
    <p class="courseInfo">{{ courseInfo }}</p>
  </div>
</template>

<script>
export default {
  props: ["courseImage", "courseTitle", "courseInfo"],
};
</script>

<style scoped>
.card {
  @apply flex justify-evenly items-center h-auto bg-secondaryOne hover:bg-secondaryTwo text-center;
}
</style>
<template>
  <div class="card">
    <img
      :src="`http://localhost:1337${course.cover.url}`"
      alt="courseImage"
      class="cardImage"
    />
    <h1 class="courseTitle">{{ course.name }}</h1>
    <p class="courseDescription">{{ course.description }}</p>
    <div class="categories">
      <p
        class="courseCategories"
        v-for="category in course.categories"
        :key="category.id"
      >
        {{ category.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["course"],
};
</script>

<style scoped>
.card {
  @apply flex flex-col m-10 justify-evenly h-full items-center p-8 bg-secondaryOne hover:bg-secondaryTwo text-center transform hover:scale-110 shadow-2xl duration-500  hover:cursor-pointer rounded-lg;
}
.card h1,
.card p {
  @apply mb-4 h-auto w-auto;
}

.cardImage {
  @apply mb-4 rounded-md h-20 w-20 mx-auto mb-8;
}

.courseTitle {
  @apply text-2xl uppercase font-mono font-bold;
}

.courseDescription {
  @apply font-customOne text-base px-4;
}

.categories {
  @apply flex gap-5  mt-4  items-center justify-center;
}

.categories p {
  @apply font-customOne text-xs  font-semibold bg-mainOne p-2 text-white rounded-3xl;
}
</style>
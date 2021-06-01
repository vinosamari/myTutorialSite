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
  @apply flex flex-col mx-4 justify-evenly h-full items-center p-8 bg-secondaryOne hover:bg-secondaryTwo text-center transform hover:scale-110 shadow-2xl duration-500  hover:cursor-pointer rounded-lg mt-20 mb-10;
}
.card h1,
.card p {
  @apply mb-4 h-auto w-auto;
}

.cardImage {
  @apply mb-4 rounded-md h-20 w-20 mx-auto mb-8;
}

.courseTitle {
  @apply text-xl uppercase font-mono font-bold;
}

.courseDescription {
  @apply font-customOne capitalize text-base px-4;
}

.categories {
  @apply flex gap-5  mt-4  items-center justify-center;
}

.categories p {
  @apply font-customOne text-xs  font-semibold bg-mainFour p-1 text-gray-200 rounded-3xl;
}
</style>
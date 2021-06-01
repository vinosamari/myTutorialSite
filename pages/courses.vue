<template>
  <div class="mainDiv">
    <div v-for="course in courses" :key="course.id" class="coursesGrid">
      <course-card :course="course"></course-card>
    </div>
  </div>
</template>

<script>
import CourseCard from "~/components/CourseCard.vue";
export default {
  components: { CourseCard },
  data() {
    return {
      courses: [],
    };
  },
  async fetch() {
    this.courses = await fetch("http://localhost:1337/courses").then((res) =>
      res.json()
    );
  },
};
</script>


<style lang="scss" scoped>
.mainDiv {
  min-height: 100vh;
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  @apply bg-mainFour px-8 w-full grid-cols-3 p-8 gap-4;
}
</style>
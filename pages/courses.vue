<template>
  <div class="mainDiv">
    <div class="coursesGrid">
      <course-card></course-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.mainDiv {
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @apply bg-mainFour;
  .coursesGrid {
    @apply grid grid-cols-3 gap-10;
  }
}
</style>
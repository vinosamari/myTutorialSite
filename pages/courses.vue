<template>
  <div class="courseCatalog">
    <section class="courseFilterBar">
      <span>Narrow Your Search</span>
      <ul class="icons">
        <label for="html"
          ><input type="radio" name="language" id="html" v-model="html" /><i
            class="fab fa-html5"
          ></i
        ></label>

        <label for="css"></label>
        <input type="radio" name="language" id="css" v-model="css" />

        <label for="js"></label>
        <input type="radio" name="language" id="js" v-model="js" />

        <label for="python"></label>
        <input type="radio" name="language" id="python" v-model="python" />

        <label for="github"></label>
        <input type="radio" name="language" id="github" v-model="github" />

        <label for="vue">
          <input type="radio" name="language" id="vue" v-model="vue" /><i
            class="fab fa-vuejs"
          ></i
        ></label>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: "",
      css: "",
      js: "",
      python: "",
      github: "",
      vue: "",
    };
  },
};
</script>

<style scoped>
input[type="radio"] {
  @apply cursor-pointer hover:bg-red-600;
}

.icons .fab {
  @apply w-24 h-24;
}

.courseCatalog {
  @apply h-screen bg-secondaryTwo grid grid-cols-2 grid-rows-3 justify-center items-center;
}

.courseFilterBar {
  @apply flex;
}
</style>
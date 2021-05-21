<template>
  <nav class="nav">
    <div class="logo">
      <nuxt-link class="" to="/">LOGO</nuxt-link>
    </div>
    <div class="links">
      <ul class="flex gap-5 items-center">
        <nuxt-link class="navLink" to="/courses">Courses</nuxt-link>
        <nuxt-link class="navLink" to="/login">Login</nuxt-link>
        <nuxt-link class="navLink" to="/register">Sign Up</nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  @apply bg-secondaryOne flex items-center px-10 justify-between text-xl font-bold text-center py-4 tracking-wider h-[10vh] fixed w-full;
}

.navLink {
  padding: 10px 20px;
  @apply bg-mainFour text-gray-300 mx-4 transition-all duration-500 transform hover:bg-opacity-10 hover:text-gray-100 rounded-md;
}
</style>
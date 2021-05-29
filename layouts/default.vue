<template>
  <div>
    <navbar class="navbar"></navbar>
    <Nuxt />
    <my-footer></my-footer>
  </div>
</template>

<style>
* {
  @apply font-mono;
}
.navbar {
  z-index: 999;
}
</style>
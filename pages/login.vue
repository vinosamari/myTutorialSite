<template>
  <main class="mainWrapper">
    <h1 class="header">Log In</h1>
    <div class="loginForm">
      <a href=""><i class="fas fa-user-circle"></i></a>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="emailInput"
        placeholder="somebody@somewhere.com"
        autofocus
      />
      <label for="password">Password</label>
      <input type="password" name="password" id="passwordInput" />

      <div class="rememberMe">
        <input type="checkbox" name="rememberMe" id="rememberMe" />
        <label class="rememberMeLabel" for="rememberMe">Remember Me</label>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  @apply h-full w-full bg-gradient-to-br from-mainFour via-transparent to-secondaryOne;
}
.mainWrapper {
  @apply h-[100vh];
}

.header {
  @apply text-center text-3xl uppercase;
}

.loginForm {
  @apply w-1/2 flex flex-col justify-evenly px-8 py-20 rounded-lg bg-secondaryOne bg-opacity-20;
}

.fas {
  @apply h-8 w-8;
}

label {
  @apply mb-2 text-center uppercase tracking-widest;
}

input[type="email"],
input[type="checkbox"],
input[type="password"] {
  @apply border-0 rounded-sm mb-8  font-customOne font-light bg-blue-300 shadow-2xl text-center;
}

input[type="email"],
input[type="password"] {
  font-size: 1rem;
  @apply tracking-widest;
}
input[type="checkbox"] {
  @apply focus:outline-none border-0 focus:ring-0 active:border-0 hover:text-blue-400 hover:cursor-pointer transition-all duration-300 checked:text-mainFour;
}

.rememberMe {
  @apply flex gap-4;
}

.rememberMeLabel {
  @apply capitalize text-xs text-gray-200;
}

::-webkit-input-placeholder {
  font-size: 0.7rem;
  @apply font-mono text-gray-100 tracking-widest;
}

:-moz-placeholder {
  /* Firefox 18- */
  font-size: 0.7rem;
  @apply font-mono text-gray-100 tracking-widest;
}

::-moz-placeholder {
  /* Firefox 19+ */
  font-size: 0.7rem;
  @apply font-mono text-gray-100 tracking-widest;
}

:-ms-input-placeholder {
  font-size: 0.7rem;
  @apply font-mono text-gray-100 tracking-widest;
}
</style>
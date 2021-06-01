<template>
  <main class="mainWrapper">
    <h1 class="header">Create Your Account</h1>

    <div class="registerForm">
      <label for="username">Username</label>
      <input type="text" name="username" id="usernameInput" autofocus />
      <label for="email">Email</label>
      <input type="email" name="email" id="emailInput" />
      <label for="password"> Password</label>
      <input type="password" name="password" id="passwordInput" />
      <label for="password"> Confirm Password</label>
      <input type="password" name="password2" id="passwordInput2" />

      <div class="flex flex-col gap-3">
        <div class="rememberMeSection">
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label class="rememberMeLabel" for="rememberMe">Remember Me</label>
        </div>
        <!-- TERMS AND CONDITIONS  -->
        <div class="rememberMeSection">
          <input type="checkbox" name="terms" id="terms" />
          <label class="rememberMeLabel" for="terms"
            >I agree to the Terms and Conditions</label
          >
        </div>
      </div>

      <button class="loginBtn">Sign Up</button>

      <p class="noAccount">
        Don't have an account?
        <nuxt-link class="registerLink" to="register"> Sign Up</nuxt-link>
      </p>

      <div class="socialSignInDiv flex gap-5 items-center justify-center">
        <!-- GOOGLE -->
        <a href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="30"
            height="30"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 262"
            style="
              -ms-transform: rotate(360deg);
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            "
          >
            <path
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              fill="#4285F4"
            />
            <path
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              fill="#34A853"
            />
            <path
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              fill="#FBBC05"
            />
            <path
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              fill="#EB4335"
            />
            <rect
              x="0"
              y="0"
              width="256"
              height="262"
              fill="rgba(0, 0, 0, 0)"
            /></svg
        ></a>
        <!-- GITHUB -->
        <a href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="30"
            height="30"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 250"
            style="
              -ms-transform: rotate(360deg);
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            "
          >
            <path
              d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z"
              fill="#161614"
            />
            <rect
              x="0"
              y="0"
              width="256"
              height="250"
              fill="rgba(0, 0, 0, 0)"
            /></svg
        ></a>
        <!-- TWITTER -->
        <a href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="30"
            height="30"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 209"
            style="
              -ms-transform: rotate(360deg);
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            "
          >
            <path
              d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
              fill="#55acee"
            />
            <rect
              x="0"
              y="0"
              width="256"
              height="209"
              fill="rgba(0, 0, 0, 0)"
            /></svg
        ></a>
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

/* .mainWrapper {
  @apply h-screen;
} */

.header {
  @apply text-center text-3xl uppercase mt-10;
}

.registerForm {
  @apply w-1/2 h-auto flex flex-col justify-evenly px-8 py-20 rounded-lg bg-secondaryOne bg-opacity-20;
}

.fas {
  @apply h-8 w-8;
}

label {
  @apply mb-2 text-center uppercase tracking-widest;
}

input[type="text"],
input[type="email"],
input[type="checkbox"],
input[type="password"] {
  @apply border-0 rounded-md mb-8  font-customOne font-light bg-blue-300 shadow-2xl text-center;
}

input[type="email"] {
  @apply w-3/4 mx-auto;
}

input[type="text"],
input[type="password"] {
  font-size: 1rem;

  @apply tracking-widest w-3/4 mx-auto text-mainFour font-semibold focus:ring-mainFour focus:ring-4;
}
input[type="checkbox"] {
  @apply focus:outline-none border-0 focus:ring-0 focus:ring-mainFour active:border-0 hover:text-blue-400 hover:cursor-pointer transition-all duration-300 checked:text-mainFour mb-4 focus:border-0;
}

.rememberMeSection {
  @apply flex gap-4 mt-2 ml-[4.3rem];
}

.rememberMeLabel {
  @apply capitalize text-xs text-gray-200;
}

.loginBtn {
  @apply bg-secondaryTwo w-auto px-4 py-2 text-lg mx-auto bg-opacity-25 hover:bg-opacity-60 transform hover:scale-125 transition-all duration-500 rounded-md focus:outline-none;
}

.noAccount {
  @apply text-xs font-medium text-gray-300 mx-auto mt-8;
}

.noAccount .registerLink {
  @apply underline italic;
}

.socialSignInDiv {
  @apply gap-5 mt-4;
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
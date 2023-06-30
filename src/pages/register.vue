<script>
definePageMeta({
  layout: false,
});
</script>
<template>
  <section style="background-image: url('pstls-assets/images/forms/form-3-shadow.png'); background-repeat: no-repeat; background-size: cover; z-index: -1;">
    <div class="flex flex-wrap items-center">
      <div class="w-full lg:w-1/2 h-screen">
        <div class="container px-4 mx-auto">
          <div class="max-w-sm mx-auto text-center py-24">
            <img class="block mx-auto mb-6" src="/assets/img/debitroom.jpg" alt="" width="47">
            <h2 class="text-3xl font-heading mb-2">Sign Up</h2>
            <p class="leading-8 mb-6">Start journey with our product.</p>
            <form class="text-left" action="">
              <label class="block mb-6">
                <span class="text-sm">Name</span>
                <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="text" aria-describedby="emailHelp" placeholder="Your name">
              </label>
              <label class="block mb-6">
                <span class="text-sm">E-mail</span>
                <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="text" placeholder="Your email address">
              </label>
              <label class="block mb-2">
                <span class="text-sm">Password</span>
                <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="text" placeholder="Your password">
              </label>
              <span class="text-xs">Must be at least 8 characters.</span>
              <a class="inline-block mt-6 mb-4 w-full px-8 py-3 text-center text-white font-bold bg-DebitRoomgray hover:bg-gray-900" href="#">Sign Up</a>
              <p class="text-xs text-center">
                <span>Already have an account?</span>
                <NuxtLink class="text-blue-500 hover:underline" to="/login">Log In</NuxtLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center w-full lg:w-1/2 bg-DebitRoomblue h-screen">
        <h1 class="text-white text-6xl mb-72">Debitroom</h1>
      </div>
    </div>
  </section>
</template>
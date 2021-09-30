<template>
  <div
    @click="$emit('close-login-modal')"
    class="z-20 h-screen w-screen top-0 fixed opacity-50 bg-gray-900"
  ></div>
  <div class="absolute h-full w-full top-0 flex justify-center items-center">
    <div class="z-30 m-aut p-2 w-1/3 bg-white rounded">
      <h1 class="text-center text-2xl">Login</h1>
      <form class="my-5 p-3">
          <div class="flex justify-center items-start flex-col my-3">
              <label>Username</label>
              <input type="text" class="w-full rounded p-2 border-2">
          </div>
          <div class="flex justify-center items-start flex-col my-3">
              <label>Password</label>
              <input type="password" class="w-full rounded p-2 border-2">
          </div>
          <div class="flex justify-center items-start flex-col my-5">
              <button class="w-full bg-gray-900 rounded-full text-white pt-2 pb-2">Login</button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
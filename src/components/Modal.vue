<template>
  <div
    @click="close"
    class="z-20 h-screen w-screen top-0 left-0 fixed opacity-50 bg-gray-900"
  ></div>
  <div
    class="absolute h-full w-full top-0 left-0 flex justify-center items-center"
  >
    <div class="z-30 m-aut p-2 w-1/3 bg-white rounded">
      <slot name="title"></slot>
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

<style>
</style>
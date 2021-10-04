<template>
  <div class="m-auto mt-3">
    <h1 class="text-center text-2xl">Re-usable Modal</h1>
    <div class="w-full flex justify-center items-center flex-col">
      <ModalVue v-if="isModalOneOpen" @close="isModalOneOpen = false">
        <template v-slot:title>
            <h1 class="text-center text-2xl">Modal One</h1>
        </template>
        <template v-slot:body>
            <p class="text-center">This is modal One</p>
        </template>
      </ModalVue>
      <button
        @click="isModalOneOpen = true"
        class="mt-4 border rounded-full p-2"
      >
        Open Modal One
      </button>
      <ModalVue v-if="isModalTwoOpen" @close="isModalTwoOpen = false">
        <template #title>
            <h1 class="text-center text-2xl">Modal Two</h1>
        </template>
        <template #body>
            <p class="text-center">This is modal two</p>
        </template>
      </ModalVue>
      <button
        @click="isModalTwoOpen = true"
        class="mt-4 border rounded-full p-2"
      >
        Open Modal Two
      </button>
    </div>
  </div>
</template>

<script>
import ModalVue from "../components/Modal.vue";
import { ref } from "vue";
export default {
  components: { ModalVue },
  setup() {
    const isModalOneOpen = ref(false);
    const isModalTwoOpen = ref(false)
    return { isModalOneOpen, isModalTwoOpen };
  },
};
</script>

<style>
</style>
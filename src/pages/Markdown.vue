<template>
  <div class="w-full">
    <h1 class="text-center text-3xl p-3">Markdown App</h1>
    <section class="flex w-full h-screen">
      <article class="w-1/2 border m-5 overflow-hidden">
        <textarea
          ref="markdownTextareaRef"
          class="w-full h-full p-5"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article
        class="w-1/2 border bg-gray-100 m-5 p-5"
        v-html="markedText"
      ></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debouncs from "../utilities/mixin/debouncs";
export default {
  mixins: [debouncs],
  data() {
    return {
      text: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
  mounted() {
    this.$refs.markdownTextareaRef.focus()
  },
};
</script>

<style>
</style>
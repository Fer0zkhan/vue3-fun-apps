<template>
  <div class="w-full">
    <div class="w-full" v-for="(item, index) in sliderInfo" :key="item.title">
      <transition name="fade">
        <div
          v-if="sliderValue === index"
          class="absolute w-full flex justify-center items-center"
          :class="item.color"
          style="height: 300px"
        >
          <span class="text-2xl">{{ item.title }}</span>
        </div>
      </transition>
    </div>
    <div
      class="absolute w-full flex justify-center items-end"
      style="height: 290px"
    >
      <div
        v-for="(item, index) in sliderInfo"
        :key="item.title"
        @click="makeActive(index)"
        :class="sliderValue === index ? 'bg-gray-700' : 'bg-gray-200'"
        class="w-3 h-3 rounded-full mx-2 cursor-pointer shadow-md"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: 0,
      interval: "",
      sliderInfo: [
        {
          color: "bg-red-400",
          title: "Slider One",
        },
        {
          color: "bg-yellow-400",
          title: "Slider Two",
        },
        {
          color: "bg-green-400",
          title: "Slider Three",
        },
      ],
    };
  },
  methods: {
    makeActive(index) {
      this.sliderValue = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.sliderValue = this.sliderValue === 2 ? 0 : this.sliderValue + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
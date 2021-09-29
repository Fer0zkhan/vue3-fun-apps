<template>
  <AppHeader />
  <div class="containe w-full flex mt-2">
    <!-- <Calender /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: { AppHeader },
};
</script>


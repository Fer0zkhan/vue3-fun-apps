<template>
  <AppHeader @open-login-modal="isLoginModal = true" />
  <div class="containe w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginModal" @close-login-modal="isLoginModal = false" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
export default {
  components: { AppHeader, LoginModal },
  data() {
    return {
      isLoginModal: false,
    };
  },
};
</script>


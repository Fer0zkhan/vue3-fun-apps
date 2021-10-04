<template>
<section class="flex justify-center items-center">
  <span
    @click="loginWithGoogle"
    class="rounded-full cursor-pointer border pr-2 pl-2 pt-1 pb-1 shadow-md"
  >
    <i class="fab fa-google"></i>
    Login With Google
  </span>
  </section>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  methods: {
    loginWithGoogle() {
      const a = getAuth();
      var provider = new GoogleAuthProvider();
      signInWithPopup(a, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          this.$emit("close-google");
          // ...
        })
        .catch((error) => {});
    },
  },
};
</script>

<style>
</style>
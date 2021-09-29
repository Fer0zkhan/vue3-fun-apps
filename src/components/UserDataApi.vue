<template>
  <div class="m-auto">
    <h1 class="text-center text-4xl m-2">User Data Api</h1>
    <section class="flex flex-col justify-center items-center">
      <div
        class="
          w-full
          bg-gray-800
          rounded-lg
          sahdow-lg
          p-12
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="mb-8">
          <img
            :class="getGender"
            class="object-center object-cover rounded-full h-36 w-36 border-2"
            :src="picture"
            :alt="`${first_name} ${last_name}`"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-white font-bold mb-2">
            {{ first_name }} {{ last_name }}
          </p>
          <p class="text-base text-gray-400 font-normal">{{ email }}</p>
          <button
            :class="getGender"
            class="text-white p-2 rounded my-4"
            v-on:click="getUser()"
          >
            Get Random User
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      first_name: "Feroz",
      last_name: "Khan",
      email: "feroz@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();

      this.first_name = results[0].name.first;
      this.last_name = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
    
  },
  computed: {
      getGender() {
      if (this.gender == "male") {
        return "border-blue-500 bg-blue-500";
      } else {
        return "border-pink-500 bg-pink-500";
      }
    },
  }
};
</script>
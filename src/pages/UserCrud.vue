<template>
  <div class="m-auto">
    <h1 class="text-center text-2xl">User Crud Application Using Reqres Api</h1>
    <div class="w-full flex justify-end items-center my-3">
      <button
        @click="isModalOpen = true"
        class="border px-4 py-1 text-sm rounded shadow-md"
      >
        Add New User
      </button>
    </div>
    <div class="container flex justify-center mt-5">
      <div class="flex flex-col">
        <div class="w-full">
          <div class="border-b border-gray-200 shadow">
            <table>
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-2 text-xs text-gray-500">Avatar</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Name</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Email</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Edit</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Delete</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="user in state.users"
                  :key="user._id"
                  class="whitespace-nowrap"
                >
                  <td class="px-6 py-4">
                    <img
                      :src="user.avatar"
                      alt="user.avatar"
                      class="w-6 h-6 rounded-full border"
                    />
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                      {{ user.name }}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">{{ user.email }}</div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                      >Edit</a
                    >
                  </td>
                  <td class="px-6 py-4">
                    <button
                      @click="delUser(user._id)"
                      class="px-4 py-1 text-sm text-white bg-red-400 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="w-full flex justify-around items-center mt-3">
      <button
        class="px-4 py-1 text-sm text-white bg-blue-400 rounded"
        @click="prevData"
      >
        prev
      </button>
      <button
        class="
          px-4
          py-1
          text-sm text-white
          bg-green-400
          rounded
          hover:shadow-md
          hover:bg-green-300
        "
        @click="nextData"
      >
        next
      </button>
    </div> -->
    <teleport to="body">
      <ModalVue @close="isModalOpen = false" v-if="isModalOpen">
        <template #title> Add New User </template>
        <template #body>
          <form @submit.prevent="submitUser">
            <div
              class="
                p-4
                w-full
                flex-col flex
                justify-start
                items-start
                mt-3
                shadow-md
              "
            >
              <label>Name:</label>
              <input
                class="p-2 rounded border w-full"
                type="text"
                placeholder="Enter Name....."
                v-model="state.form.name"
              />
            </div>
            <div
              class="
                p-4
                w-full
                flex-col flex
                justify-start
                items-start
                mt-3
                shadow-md
              "
            >
              <label>Email:</label>
              <input
                class="p-2 rounded border w-full"
                type="email"
                placeholder="Enter Email....."
                v-model="state.form.email"
              />
            </div>
            <div
              class="
                p-4
                w-full
                flex-col flex
                justify-start
                items-start
                mt-3
                shadow-md
              "
            >
              <label>Avatar:</label>
              <input
                class="p-2 rounded border w-full"
                type="text"
                placeholder="Enter Avatar....."
                v-model="state.form.avatar"
              />
            </div>
            <div
              class="
                p-4
                w-full
                flex-col flex
                justify-start
                items-start
                mt-3
                shadow-md
              "
            >
              <button
                style="submit"
                class="w-full rounded bg-gray-800 text-white px-2 py-1"
              >
                Add
              </button>
            </div>
          </form>
        </template>
      </ModalVue>
    </teleport>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "../plugin/axios";
import ModalVue from "../components/Modal.vue";

export default {
  components: { ModalVue },
  setup() {
    const isModalOpen = ref(false);
    const state = reactive({
      users: [],
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });
    onMounted(async () => {
      const { data } = await axios("/users");
      state.users = data;
    });

    const nextData = async () => {
      const { data } = await axios("/users?page=2");
      state.users = data;
    };
    const prevData = async () => {
      const { data } = await axios("/users?page=1");
      state.users = data;
    };

    const submitUser = async () => {
      const { data } = await axios.post("/users", state.form);
      state.users.push(data);

      isModalOpen.value = false;
      state.form.name = "";
      state.form.email = "";
      state.form.avatar = "";
    };

    const delUser = async (id) => {
      await axios.delete(`/users/${id}`);
      state.users = state.users.filter((user) => user._id !== id);
    };

    return { state, nextData, prevData, isModalOpen, submitUser, delUser };
  },
};
</script>

<style>
</style>
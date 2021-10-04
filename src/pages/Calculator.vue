<template>
  <div class="m-auto my-3">
    <h1 class="text-2xl text-center">Calculator</h1>
    <input
      type="text"
      class="my-2 border-2 p-2 w-full rounded"
      :value="currentNum"
    />
    <span v-if="preNum"
      >{{ preNum }} {{ selectOperator }} {{ currentNum }}</span
    >
    <div class="my-3 grid grid-cols-4 gap-4">
      <button
        @click="pressed('1')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        1
      </button>
      <button
        @click="pressed('2')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        2
      </button>
      <button
        @click="pressed('3')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        3
      </button>
      <button
        @click="pressed('+')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        +
      </button>
      <button
        @click="pressed('4')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        4
      </button>
      <button
        @click="pressed('5')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        5
      </button>
      <button
        @click="pressed('6')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        6
      </button>
      <button
        @click="pressed('-')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        -
      </button>
      <button
        @click="pressed('7')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        7
      </button>
      <button
        @click="pressed('8')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        8
      </button>
      <button
        @click="pressed('9')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        9
      </button>
      <button
        @click="pressed('x')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        x
      </button>
      <button
        @click="pressed('0')"
        class="py-2 w-20 h-10 rounded border shadow"
      >
        0
      </button>
      <button
        @click="pressed('c')"
        class="py-2 w-20 h-10 rounded border shadow"
      >
        C
      </button>
      <button
        @click="pressed('=')"
        class="py-2 w-20 h-10 rounded border shadow"
      >
        =
      </button>
      <button
        @click="pressed('/')"
        class="py-2 w-20 h-10 border rounded shadow"
      >
        /
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const operation = ["+", "-", "x", "/"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const currentNum = ref("");
const preNum = ref("");
const selectOperator = ref("");

const pressed = (val) => {
  if (val === "=" || val === "Enter") calculate();
  else if (operation.includes(val)) applyOperation(val);
  else if (val === "c") clearValue();
  else if (numbers.includes(val)) appendNumber(val);
};

const clearValue = () => currentNum.value = "";

const appendNumber = (val) => currentNum.value = currentNum.value + val;

const applyOperation = (val) => {
  calculate();
  preNum.value = currentNum.value;
  currentNum.value = "";
  selectOperator.value = val;
};

const calculate = () => {
  if (selectOperator.value === "x") multiple();
  else if (selectOperator.value === "-") subtraction();
  else if (selectOperator.value === "/") division();
  else if (selectOperator.value === "+") addition();

  preNum.value = "";
  selectOperator.value = "";
};

const multiple = () => currentNum.value = preNum.value * currentNum.value;

const subtraction = () => currentNum.value = preNum.value - currentNum.value;

const division = () => currentNum.value = preNum.value / currentNum.value;

const addition = () => currentNum.value = +preNum.value + +currentNum.value;

const keydownHandler = (e) => pressed(e.key);

onMounted(() => window.addEventListener("keydown", keydownHandler));

onUnmounted(() => window.removeEventListener("keydown", keydownHandler));
</script>

<style>
</style>
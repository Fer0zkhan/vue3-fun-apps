<template>
  <div class="m-auto">
    <h1 class="text-center text-4xl m-2">Vue Calendar</h1>
    <section class="flex justify-center m-3">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">, {{ currentYear }}</h2>
    </section>
    <section class="flex">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="week in weeks"
        :key="week"
      >
        {{ week }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in startingDay()"
        :key="day"
      ></p>
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in daysInMonth()"
        :key="day"
        :class="getCurrentDate(day)"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex justify-between my-5">
      <button class="px-2 rounded border-2" @click="prev">Prev</button>
      <button class="px-2 rounded border-2" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      weeks: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startingDay() {
      return new Date(this.currentYear, this.currentMonth, 0).getDay();
    },
    next() {
      if (this.currentMonth == 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth == 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    getCurrentDate(day) {
        const calanderFullDate = new Date(this.currentYear, this.currentMonth, day).toDateString()
        const currentFullDate = new Date().toDateString()
        return calanderFullDate === currentFullDate ? 'text-white bg-black rounded': ''
    }
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleDateString(
        "default",
        {
          month: "long",
        }
      );
    },
  },
};
</script>

<style>
</style>
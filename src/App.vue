<template>
  <div id="app">
    <h1>Planning des Réservations</h1>
    <WeeklySchedule />
  </div>
</template>

<script>
import WeeklySchedule from "@/components/WeeklySchedule.vue";

export default {
  name: "App",
  components: {
    WeeklySchedule,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

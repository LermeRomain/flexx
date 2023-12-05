<template>
  <div id="weekly-schedule">
    <h2>Planning de la Semaine</h2>
    <div class="calendar">
      <div class="day" v-for="day in days" :key="day">
        <h3>{{ day }}</h3>
        <ul>
          <li v-for="course in getCoursesForDay(day)" :key="course.id">
            {{ course.title }} - {{ course.date }}
            <button @click="reserveCourse(course.id)">Réserver</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ReservationService from "@/ReservationService";

export default {
  data() {
    return {
      days: [],
      courses: [],
    };
  },
  mounted() {
    this.loadCourses();
    this.populateDays();
  },
  methods: {
    loadCourses() {
      ReservationService.getCourses()
          .then((response) => {
            this.courses = response.data;
          })
          .catch((error) => {
            console.error("Erreur lors du chargement des cours", error);
          });
    },
    populateDays() {
      const currentDate = new Date();
      const currentDayIndex = currentDate.getDay();
      const daysInWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
      this.days = daysInWeek.slice(currentDayIndex).concat(daysInWeek.slice(0, currentDayIndex));

      console.log('Jours:', this.days);
      console.log('Cours:', this.courses);
    },

    getCoursesForDay(day) {
      return this.courses.filter((course) => {
        const courseDay = new Date(course.date).toLocaleString('fr-FR', { weekday: 'long' });
        return courseDay === day;
      });
    },
    reserveCourse(courseId) {
      ReservationService.reserveCourse(courseId)
          .then(() => {
            alert("Cours réservé avec succès!");
          })
          .catch((error) => {
            console.error("Erreur lors de la réservation du cours", error);
          });
    },
  },
};
</script>

<style>
#weekly-schedule {
  max-width: 800px;
  margin: 0 auto;
}

.calendar {
  display: flex;
  justify-content: space-between;
}

.day {
  flex: 1;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 8px;
  margin: 10px;
}

h3 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  padding: 8px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>

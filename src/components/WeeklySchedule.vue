<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Weekly Schedule</h2>
    <div class="row justify-content-center">
      <div v-for="day in days" :key="day" class="col-md-4">
        <div class="card mb-4">
          <div class="card-header text-center">
            <h3 class="mb-0">{{ day }}</h3>
          </div>
          <ul class="list-group list-group-flush">
            <li v-for="course in getCoursesForDay(day)" :key="course.id" class="list-group-item course-item">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-inline-block text-center">
                  <h6 class="mb-0">{{ course.title }}</h6>
                  <small>{{ formatTime(course.date) }}</small>
                </div>
                <button @click="reserve(course.id)" :disabled="course.isReserved" class="btn btn-primary btn-sm mt-2 d-block d-md-inline">Réserver</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format, fr } from 'date-fns';
import ReservationService from "@/ReservationService.js";

export default {
  data() {
    return {
      courses: [],
    };
  },
  created() {
    this.loadCourses();
  },
  computed: {
    days() {
      const uniqueDays = [...new Set(this.courses.map(course => format(course.date, 'dd/MM/yyyy')))];
      return uniqueDays;
    },
  },
  methods: {
    loadCourses() {
      ReservationService.getCourses().then((response) => {
        const currentDate = new Date();

        this.courses = response.data
          .map((course) => ({ ...course, isReserved: false }))
          .filter((course) => course.date > currentDate);
      });
    },
    getCoursesForDay(day) {
      return this.courses.filter(course => format(course.date, 'dd/MM/yyyy') === day);
    },
    formatTime(dateTime) {
      return format(dateTime, 'HH:mm', { locale: fr });
    },
    reserve(courseId) {
      ReservationService.reserveCourse().then(() => {
        const courseIndex = this.courses.findIndex((course) => course.id === courseId);
        if (courseIndex !== -1) {
          this.courses[courseIndex].isReserved = true;
        }
      });
    },
  },
};
</script>



<style scoped>
.course-item {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 8px;
}

.course-item button {
  padding: 5px 10px;
}

.course-item button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
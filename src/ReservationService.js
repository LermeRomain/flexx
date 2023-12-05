/*import axios from "axios";

const API_BASE_URL = "https://votre-api-resamania.com";
const CLIENT_TOKEN = "votre-token-client";

export default {
    getCourses() {
        const url = `${API_BASE_URL}/${CLIENT_TOKEN}/events`;
        return axios.get(url);
    },
    reserveCourse(courseId) {
        const url = `${API_BASE_URL}/${CLIENT_TOKEN}/attendees/`;
        const data = {
            classEvent: `/events/${courseId}`,
            // Autres données nécessaires pour la réservation
        };
        return axios.post(url, data);
    },
};*/


// ReservationService.js

export default {
    getCourses() {
        // Simulation de données fictives pour la liste des cours
        const fakeCourses = [
            { id: 1, title: "Cours de Yoga", date: new Date("2023-12-05T10:00:00Z") },
            { id: 2, title: "Entraînement Cardio", date: new Date("2023-12-05T15:30:00Z") },
            { id: 3, title: "Cours de Pilates", date: new Date("2023-12-06T09:00:00Z") },
            { id: 4, title: "Cours de Zumba", date: new Date("2023-12-06T18:00:00Z") },
            { id: 5, title: "Séance de Musculation", date: new Date("2023-12-07T12:30:00Z") },
            { id: 6, title: "Cours de Danse Moderne", date: new Date("2023-12-07T17:00:00Z") },
            { id: 7, title: "Cours de Stretching", date: new Date("2023-12-08T08:30:00Z") },
            { id: 8, title: "Entraînement HIIT", date: new Date("2023-12-08T16:45:00Z") },
            { id: 9, title: "Cours de Boxe", date: new Date("2023-12-09T11:15:00Z") },
            { id: 10, title: "Séance de Natation", date: new Date("2023-12-09T14:00:00Z") },
            { id: 11, title: "Cours de Yoga", date: new Date("2023-12-10T09:30:00Z") },
            { id: 12, title: "Entraînement Cardio", date: new Date("2023-12-10T17:45:00Z") },
            { id: 13, title: "Cours de Pilates", date: new Date("2023-12-11T10:00:00Z") },
            { id: 14, title: "Cours de Zumba", date: new Date("2023-12-11T16:30:00Z") },
            { id: 15, title: "Séance de Musculation", date: new Date("2023-12-12T13:00:00Z") },
            { id: 16, title: "Cours de Danse Moderne", date: new Date("2023-12-12T18:15:00Z") },
            { id: 17, title: "Cours de Stretching", date: new Date("2023-12-13T08:00:00Z") },
            { id: 18, title: "Entraînement HIIT", date: new Date("2023-12-13T15:30:00Z") },
            { id: 19, title: "Cours de Boxe", date: new Date("2023-12-14T11:45:00Z") },
            { id: 20, title: "Séance de Natation", date: new Date("2023-12-14T14:45:00Z") },
          ];
          

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: fakeCourses });
            }, 500); // Simulation d'un délai de réponse de 500 ms
        });
    },
    reserveCourse() {
        // Simulation de la réservation d'un cours
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(); // La réservation réussit immédiatement dans cet exemple
            }, 500); // Simulation d'un délai de réponse de 500 ms
        });
    },
};
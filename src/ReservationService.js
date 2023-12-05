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
            { id: 2, title: "Entraînement Cardio", date: new Date("2023-12-06T15:30:00Z") },
            // Ajoutez d'autres cours fictifs ici
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

import { defineStore } from 'pinia'
import axios from 'axios'

export const useSignupStore = defineStore("SignupStore", {
    state: () => ({
        user: {},
    }),
    actions: {
        async getToken() {
            try {
                await axios.get('/sanctum/csrf-cookie')
            } catch (error) {
                console.log('Error getting CSRF token', error);
            }
        },

        async register(formData) {
            try {
               await this.getToken();
               const response = await axios.post('/register', formData);

               if (response.data.users) {
                this.users = response.data.users;
               } else {
                console.log('Registration failed');
               }
            } catch (error) {
                console.log('Error during register', error);
            }       
        }
    }
})
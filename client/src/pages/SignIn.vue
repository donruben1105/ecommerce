<template>
    <div class="bg-slate-500 flex justify-center items-center h-screen">
        <div class="w-full md:w-1/2">
            <div class="bg-slate-300 rounded-md shadow-md px-8 py-5 max-w-sm mx-auto">
                <h1 class="font-bold text-3xl mb-8 text-center">Sign In</h1>
                <form @submit.prevent="handleLogin">
                    <div class="space-y-5">
                        <div>
                            <label for="email" class="block font-semibold text-md">Email</label>
                            <input v-model="form.email" type="email" class="w-full rounded-md outline-none py-1">
                        </div>
                        <div>
                            <label for="password" class="block font-semibold text-md">Password</label>
                            <input v-model="form.password" type="password" class="w-full rounded-md outline-none py-1">
                        </div>
                    </div>
                    <button type="submit" class="w-full text-white bg-indigo-500 hover:bg-indigo-700 mt-4 p-2 font-semibold text-lg rounded">Login</button>
                </form>
            </div>    
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
    email: '',
    password: '',
});

const getToken = async () => {
      return await axios.get('/sanctum/csrf-cookie')
    }

    const handleLogin = async () => {
        await getToken();
      try {
        await axios.post('/login', {
        email: form.value.email,
        password: form.value.password,
      }
      )

      router.push('/')
      } catch (error) {
        console.log(error)
      }
    }

</script>

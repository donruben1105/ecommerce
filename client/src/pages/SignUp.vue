<template>
    <div class="bg-slate-500 flex justify-center items-center h-screen">
        <div class="w-full md:w-1/2">
            <div class="bg-slate-300 rounded-md shadow-md px-8 py-5 max-w-sm mx-auto">
                <h1 class="font-bold text-3xl mb-8 text-center">Sign Up</h1>
                <form @submit.prevent="register">
                    <div class="space-y-5">
                        <div>
                            <label for="name" class="block font-semibold text-md">Name</label>
                            <input v-model="formData.name" type="text" class="w-full rounded-md outline-none py-1">
                        </div>
                        <div>
                            <label for="email" class="block font-semibold text-md">Email</label>
                            <input v-model="formData.email" type="email" class="w-full rounded-md outline-none py-1">
                        </div>
                        <div>
                            <label for="password" class="block font-semibold text-md">Password</label>
                            <input v-model="formData.password" type="password" class="w-full rounded-md outline-none py-1">
                        </div>
                        <div>
                            <label for="password_confirmation" class="block font-semibold text-md">Confirm Password</label>
                            <input v-model="password_confirmation" type="password" class="w-full rounded-md outline-none py-1">
                        </div>
                    </div>
                    <button type="submit" class="w-full text-white bg-indigo-500 hover:bg-indigo-700 mt-4 p-2 font-semibold text-lg rounded">Submit</button>
                </form>
            </div>    
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useSignupStore } from '@/stores/signupStore'

    const formData = ref({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const signupStore = useSignupStore();

    const register = async () => {
        await signupStore.register(formData.value)
    }
</script>
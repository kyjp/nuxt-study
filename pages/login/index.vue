<template>
    <NForm ref="formRef" :model="formValue" :rules="rules">
        <div class="flex flex-col gap-[24px]">
            <NFormItem label="ID" path="id">
                <NInput v-model:value="formValue.id"/>
            </NFormItem>
            <NFormItem label="パスワード" path="password">
                <NInput v-model:value="formValue.password" :type="'password'"/>
            </NFormItem>
            <NButton @click="login">
                <span class="text-[14px]">ログイン</span>
            </NButton>
        </div>
    </NForm>
</template>

<script setup lang="ts">
import {NForm, NFormItem, NInput, NButton, type FormInst, type FormRules} from "naive-ui"
import type { User } from "~/models/user"
import { useAuthStore } from "~/stores/auth";
definePageMeta({
    layout: 'static',
    requiresAuth: false,
})

interface FormValue {
    id: string
    password: string
}
const emptyFormValue: FormValue = {
    id: "",
    password: ""
}
const formValue = ref<FormValue>(emptyFormValue)
const formRef = ref<FormInst>()
const rules: FormRules = {
    id: {
        required: true,
        message: 'IDは必須です'
    },
    password: {
        required: true,
        message: 'パスワードは必須です'
    }
}

const api = useApi()
const router = useRouter()
const authStore = useAuthStore()

const login = async () => {
    try{
        await formRef.value?.validate()
        const res = await api<User>(`/users/${formValue.value.id}`)
        authStore.setUser(res)
        router.push("/")
    }catch(error){
        console.log(error)
    }
}
</script>
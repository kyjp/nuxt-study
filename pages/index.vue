<template>
    <NButton>
        <span>hoge</span>
    </NButton>
    <p class="text-2xl font-bold">hoge</p>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';

definePageMeta({
    requiresAuth: true,
})

const router = useRouter()

onMounted(() =>  router.push("/users"))
</script>
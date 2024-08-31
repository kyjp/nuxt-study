<template>
    <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    </div>
</template>

<script setup lang="ts">
import type { User } from '~/models/user';

const api = useApi()
const route = useRoute()
const userId = computed<string>(() => decodeURIComponent(route.params.id))

const {data: user} = useAsyncData(() => api<User>(`/users/${userId.value}`))
</script>
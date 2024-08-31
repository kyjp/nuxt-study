<template>
    <div>
        {{ JSON.stringify(user, null, 2) }}
    </div>
</template>

<script setup lang="ts">
import type { User } from '~/models/user';

const api = useApi()
const route = useRoute()
const userId = computed<string>(() => decodeURIComponent(route.params.id))

const {data: user} = useAsyncData(() => api<User>(`/users/${userId.value}`))
</script>
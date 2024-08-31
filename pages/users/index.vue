<template>
    <div v-if="users" class="pb-[24px] px-[40px] flex-col gap-[32px]">
        <div class="flex items-center justify-between pb-[12px]">
            <span class="text-[24px] font-bold">Users</span>
            <NButton @click="router.push('/users/new')">
                <spa class="text-[14px]">新規登録</spa>
            </NButton>
        </div>
        <!-- <NDataTable remote :data="users" :columns="columns" :rowProps="rowProps"/> -->
        <AtomsDataTable v-if="users" :data="users" :columns="columns" @select="router.push(`/users/${$event.id}`)"/>
    </div>
</template>

<script setup lang="ts">
import type {NButton, NDataTable, DataTableColumns} from "naive-ui"
import type { HTMLAttributes } from "vue";
import type {User} from "~/models/user"

definePageMeta({
    requiresAuth: true,
})

const api = useApi()
const router = useRouter()

const {data: users} = useAsyncData<User[]>(() => api("/users"))

const rowProps: (row: User) => HTMLAttributes = (row) => ({
    style: {
        cursor: 'pointer'
    },
    onClick: () => router.push(`/users/${row.id}`)
})

const columns = computed<DataTableColumns<User>>(() => [
    {
        key: "id",
        title: "ID",
        render: (row) => row.id
    },
    {
        key: "name",
        title: "Name",
        render: (row) => row.name
    },
    {
        key: "email",
        title: "Email",
        render: (row) => row.email
    },
    {
        key: "website",
        title: "Website",
        render: (row) => row.website
    },
])
</script>
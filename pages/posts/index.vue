<template>
    <div v-if="posts" class="pb-[24px] px-[40px] flex-col gap-[32px]">
        <div class="flex items-center justify-between pb-[12px]">
            <span class="text-[24px] font-bold">Posts</span>
        </div>
        <NDataTable remote :data="posts" :columns="columns"/>
    </div>
</template>

<script setup lang="ts">
import type {NButton, NDataTable, DataTableColumns} from "naive-ui"
import type { Post } from "~/models/post"

definePageMeta({
    requiresAuth: true,
})

const api = useApi()
const {data: posts} = useAsyncData<Post[]>(() => api("/posts"))

const columns = computed<DataTableColumns<Posts>>(() => [
    {
        key: "id",
        title: "ID",
        render: (row) => row.id
    },
    {
        key: "title",
        title: "Title",
        render: (row) => row.title
    },
    {
        key: "body",
        title: "Body",
        render: (row) => row.body
    }
])
</script>
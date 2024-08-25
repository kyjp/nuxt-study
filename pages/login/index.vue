<template>
    <NForm>
        <div class="flex flex-col gap-[24px]">
            <NFormItem label="ID" path="id">
                <NInput />
            </NFormItem>
            <NFormItem label="パスワード" path="password">
                <NInput />
            </NFormItem>
            <NButton>
                <span class="text-[14px]">ログイン</span>
            </NButton>
        </div>
    </NForm>
</template>

<script setup lang="ts">
import {NForm, NFormItem, NInput, NButton} from "naive-ui"
definePageMeta({
    layout: 'static'
})
</script>
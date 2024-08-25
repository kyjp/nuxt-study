<template>
    <NLayout has-sider class="min-h-screen">
        <NLayoutSider bordered class="min-h-screen">
            <NMenu :options="menuOptions"/>
        </NLayoutSider>
        <NLayout class="min-h-screen">
            <NLayoutHeader>
                <div class="pt-[24px] pb-[12px] px-[40px] flex flex-row items-center justify-end" >
                    <div class="flex flex-row items-center gap-[12px]">
                        <NButton>ログアウト</NButton>
                    </div>
                </div>
            </NLayoutHeader>
            <NLayoutContent>
                <slot />
            </NLayoutContent>
        </NLayout>
    </NLayout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutSider, NMenu, NLayoutHeader, NButton, NLayoutContent, type MenuOption } from "naive-ui";
import {RouterLink} from "vue-router"

const menuOptions: MenuOption[] = [
    {
        key: "users",
        label: () => h(RouterLink, {to: "/users"}, {default: () => "Users"}),
    },
    {
        key: "posts",
        label: () => h(RouterLink, {to: "/posts"}, {default: () => "Posts"})
    }
]
</script>
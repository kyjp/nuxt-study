import { User } from "~/models/user"
import type {RouteLocationNormalized} from "vue-router"
export const useAuthStore = defineStore(
    'auth',
    () => {
        const user = ref<User>()
        const isLogin = computed<boolean>(() => !!user.value)

        const validateRoute = (route: RouteLocationNormalized) => {
            if(route.meta.requiresAuth && !isLogin.value) {
                return '/login'
            }
        }

        const setUser = (newUser: User) => {
            user.value = newUser
        }

        const clearUser = () => {
            user.value = undefined
        }

        return {
            user,
            setUser,
            clearUser,
            validateRoute
        }
    } 
 )
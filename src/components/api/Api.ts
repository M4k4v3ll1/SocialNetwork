import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "697202a5-1cc2-402d-a620-4a16a3730039"}
})

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId: number) {
       return instance.delete(`follow/${userId}`)
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status})
    }
}
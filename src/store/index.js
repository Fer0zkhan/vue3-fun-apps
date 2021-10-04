import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            isAuthenticate: false,
            authUser: {},
        }
    },
    mutations: {
        setIsAuthenticate(state, payload) {
            state.isAuthenticate = payload;
        },
        setAuthUser(state, payload) {
            state.authUser = payload
        }
    }
})

export default store
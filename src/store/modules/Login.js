import AuthService from '../../services/auth-service'
import axios from 'axios';
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null };

export default {
    namespaced: true,
    state:  initialState,

    mutations: {

        LOGIN_SUCCESS(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        LOGIN_FAILURE(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        LOGOUT(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
    },

    actions: {

        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('LOGIN_SUCCESS', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('LOGIN_FAILURE');
                    return Promise.reject(error);
                }
            );

        },
        logout({ commit }) {
            AuthService.logout();
            commit('LOGOUT');
        },
    }
}
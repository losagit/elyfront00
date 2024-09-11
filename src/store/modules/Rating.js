import axios from 'axios';
export default {
    namespaced: true,
    state: {
        ratings: [],
        msg: ''
    },

    getters: {

    },

    mutations: {
        
        GET_RATING: (state, data) => {
            state.ratings = data
        },
        POST_RATING: (state, status, data) => {
            if (status == 200) {
                state.ratings.unshift(data)
                state.msg = 'Guardado con exito'
            } else {
                state.msg = 'error al guardar'
            }
        },
        PUT_RATING: (state, status) => {
            if (status == 200) {
                state.msg = 'Editado con exito'
            } else {
                state.msg = 'error al editar'
            }
        },
        DELETE_RATING: (state, status) => {
            if (status == 200) {
                state.msg = 'eliminado con exito'
            } else {
                state.msg = 'error al eliminar'
            }
        }

    },

    actions: {

        
        getRating({ commit }, data) {
            axios.post(`api/getratings`,data).then(response => {
                commit('GET_RATING', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        createRating({ commit }, data) {
            axios.post(`api/createrating`, data).then(response => {
                commit('POST_RATING', response.status, data);
            }).catch((error) => {
                console.log(error);
            })
        },
        updateRating({ commit }, data) {
            axios.put(`api/updaterating`, data).then(response => {
                commit('PUT_RATING', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        deleteRating({ commit }, id) {
            axios.delete(`api/deleterating/${id}`).then(response => {
                commit('DELETE_RATING', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },


    },

}
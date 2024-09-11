import axios from 'axios';
export default {
    namespaced: true,
    state: {
        degrees: [],
        alldegrees: [],
        msg:''
    },
    
    getters: {
        
    },

    mutations: {
        GET_DEGREE: (state, data) => {
            state.degrees = data
        },
        GET_ALLDEGREE: (state, data) => {
            state.alldegrees = data
        },
        POST_DEGREE: (state,status,data) => {
            if(status == 200){
                state.degrees.unshift(data)
                state.msg = 'Guardado con exito'
            }else{
                state.msg = 'error al guardar'
            }
        },
        PUT_DEGREE:(state,status) =>{
            if(status ==200){
                state.msg = 'Editado con exito'
            }else{
                state.msg = 'error al editar'
            }
        },
        DELETE_DEGREE:(state,status) =>{
            if(status == 200){
                state.msg = 'eliminado con exito'
            }else{
                state.msg = 'error al eliminar'
            }
        }
        
    },

    actions: {

        getDegree( { commit }, id ){
            axios.get(`api/getdegree/${id}`).then(response => {
                commit('GET_DEGREE', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        getAllDegree( { commit } ){
            axios.get(`api/getalldegree`).then(response => {
                commit('GET_ALLDEGREE', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        createDegree( {commit},data){
            axios.post(`api/createdegree`,data).then(response => {
                commit('POST_DEGREE', response.status,data);
            }).catch((error) => {
                console.log(error);
            })
        },
        updateDegree({commit},data){
            axios.put(`api/updatedegree/${data.id}`,data).then(response => {
                commit('PUT_DEGREE', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        deleteDegree({commit},id){
            axios.delete(`api/deletedegree/${id}`).then(response => {
                commit('DELETE_DEGREE', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        
        
    },

}
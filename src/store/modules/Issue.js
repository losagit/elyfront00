import axios from 'axios';
export default {
    namespaced: true,
    state: {
        issues: [],
        msg:''
    },
    
    getters: {
        
    },

    mutations: {
        GET_ISSUE: (state, data) => {
            state.issues = data
        },
        POST_ISSUE: (state,status,data) => {
            if(status == 200){
                state.issues.unshift(data)
                state.msg = 'Guardado con exito'
            }else{
                state.msg = 'error al guardar'
            }
        },
        PUT_ISSUE:(state,status) =>{
            if(status ==200){
                state.msg = 'Editado con exito'
            }else{
                state.msg = 'error al editar'
            }
        },
        DELETE_ISSUE:(state,status) =>{
            if(status == 200){
                state.msg = 'eliminado con exito'
            }else{
                state.msg = 'error al eliminar'
            }
        }
        
    },

    actions: {

        getIssue( { commit },id ){
            axios.get(`api/getissue/${id}`).then(response => {
                commit('GET_ISSUE', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        createIssue( {commit},data){
            axios.post(`api/createissue`,data).then(response => {
                commit('POST_ISSUE', response.status,data);
            }).catch((error) => {
                console.log(error);
            })
        },
        updateIssue({commit},data){
            axios.put(`api/updateissue/${data.id}`,data).then(response => {
                commit('PUT_ISSUE', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        deleteIssue({commit},id){
            axios.delete(`api/deleteissue/${id}`).then(response => {
                commit('DELETE_ISSUE', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        
        
    },

}
import axios from 'axios';
export default {
    namespaced: true,
    state: {
        managements: [],
        msg:''
    },
    
    getters: {
        
    },

    mutations: {
        GET_MANAGEMENT: (state, data) => {
            state.managements = data
        },
        POST_MANAGEMENT: (state,status,data) => {
            if(status == 200){
                state.managements.unshift(data)
                state.msg = 'Guardado con exito'
            }else{
                state.msg = 'error al guardar'
            }
        },
        PUT_MANAGEMENT:(state,status) =>{
            if(status ==200){
                state.msg = 'Editado con exito'
            }else{
                state.msg = 'error al editar'
            }
        },
        DELETE_MANAGEMENT:(state,status) =>{
            if(status == 200){
                state.msg = 'eliminado con exito'
            }else{
                state.msg = 'error al eliminar'
            }
        }
        
    },

    actions: {
        getManagement( { commit },data ){
            axios.get(`api/getallmanagement`,data).then(response => {
                console.log(response.data.data);
                commit('GET_MANAGEMENT', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        createManagement( {commit},data){
            axios.post(`api/createmanagement`,data).then(response => {
                commit('POST_MANAGEMENT', response.status,data);
            }).catch((error) => {
                console.log(error);
            })
        },
        updateManagement({commit},data){
            axios.put(`api/updatemanagement/${data.id}`,data).then(response => {
                commit('PUT_MANAGEMENT', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        deleteManagement({commit},id){
            axios.delete(`api/deletemanagement/${id}`).then(response => {
                commit('DELETE_MANAGEMENT', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        
        
    },

}
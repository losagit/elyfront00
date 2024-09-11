import axios from 'axios';
export default {
    namespaced: true,
    state: {
        sections: [],
        msg:''
    },
    
    getters: {
        
    },

    mutations: {
        GET_SECTION: (state, data) => {
            state.sections = data
        },
        POST_SECTION: (state,status,data) => {
            if(status == 200){
                state.sections.unshift(data)
                state.msg = 'Guardado con exito'
            }else{
                state.msg = 'error al guardar'
            }
        },
        PUT_SECTION:(state,status) =>{
            if(status ==200){
                state.msg = 'Editado con exito'
            }else{
                state.msg = 'error al editar'
            }
        },
        DELETE_SECTION:(state,status) =>{
            if(status == 200){
                state.msg = 'eliminado con exito'
            }else{
                state.msg = 'error al eliminar'
            }
        }
        
    },

    actions: {

        getSection( { commit }){
            axios.get(`api/getsection`).then(response => {
                commit('GET_SECTION', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        createSection( {commit},data){
            axios.post(`api/createsection`,data).then(response => {
                commit('POST_SECTION', response.status,data);
            }).catch((error) => {
                console.log(error);
            })
        },
        updateSection({commit},data){
            axios.put(`api/updatesection/${data.id}`,data).then(response => {
                commit('PUT_SECTION', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        deleteSection({commit},id){
            axios.delete(`api/deletesection/${id}`).then(response => {
                commit('DELETE_SECTION', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        
        
    },

}
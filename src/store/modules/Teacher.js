import axios from 'axios';
export default {
    namespaced: true,
    state: {
        teachers: [],
        msg:''
    },
    
    getters: {
        
    },

    mutations: {
        GET_TEACHER: (state, data) => {
            state.teachers = data
        },
        POST_TEACHER: (state,status,data) => {
            if(status == 200){
                state.teachers.unshift(data)
                state.msg = 'Guardado con exito'
            }else{
                state.msg = 'error al guardar'
            }
        },
        PUT_TEACHER:(state,status) =>{
            if(status ==200){
                state.msg = 'Editado con exito'
            }else{
                state.msg = 'error al editar'
            }
        },
        DELETE_TEACHER:(state,status) =>{
            if(status == 200){
                state.msg = 'eliminado con exito'
            }else{
                state.msg = 'error al eliminar'
            }
        }
        
    },

    actions: {
        getTeacher( { commit },data ){
            axios.get(`api/getteacher`,data).then(response => {
                console.log(response.data.data);
                commit('GET_TEACHER', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        createTeacher( {commit},data){
            axios.post(`api/createteacher`,data).then(response => {
                commit('POST_TEACHER', response.status,data);
            }).catch((error) => {
                console.log(error);
            })
        },
        updateTeacher({commit},data){
            axios.put(`api/updateteacher/${data.id}`,data).then(response => {
                commit('PUT_TEACHER', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        deleteTeacher({commit},id){
            axios.delete(`api/deleteteacher/${id}`).then(response => {
                commit('DELETE_TEACHER', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        
        
    },

}
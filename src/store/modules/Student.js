import axios from 'axios';
export default {
    namespaced: true,
    state: {
        students: [],
        msg:''
    },
    
    getters: {
        
    },

    mutations: {
        GET_STUDENT: (state, data) => {
            state.students = data
        },
        POST_STUDENT: (state,status,data) => {
            if(status == 200){
                state.students.unshift(data)
                state.msg = 'Guardado con exito'
            }else{
                state.msg = 'error al guardar'
            }
        },
        PUT_STUDENT:(state,status) =>{
            if(status ==200){
                state.msg = 'Editado con exito'
            }else{
                state.msg = 'error al editar'
            }
        },
        DELETE_STUDENT:(state,status) =>{
            if(status == 200){
                state.msg = 'eliminado con exito'
            }else{
                state.msg = 'error al eliminar'
            }
        }
        
    },

    actions: {
        getStudent( { commit },data ){
            axios.post(`api/getstudents`,data).then(response => {
                console.log(response.data.data);
                commit('GET_STUDENT', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        createStudent( {commit},data){
            axios.post(`api/createstudent`,data).then(response => {
                commit('POST_STUDENT', response.status,data);
            }).catch((error) => {
                console.log(error);
            })
        },
        updateStudent({commit},data){
            axios.put(`api/updatestudent/${data.id}`,data).then(response => {
                commit('PUT_STUDENT', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        deleteStudent({commit},id){
            axios.delete(`api/deletestudent/${id}`).then(response => {
                commit('DELETE_STUDENT', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        
        
    },

}
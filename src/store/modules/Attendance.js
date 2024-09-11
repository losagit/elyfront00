import axios from 'axios';
export default {
    namespaced: true,
    state: {
        studentsAt: [],
        attendance: [],
        msg:''
    },
    
    getters: {
        
    },

    mutations: {
        GET_STUDENT: (state, data) => {
            state.studentsAt = data
        },
        POST_ATTENDANCE: (state,status,data) => {
            if(status == 200){
                state.attendance.unshift(data)
                state.msg = 'Guardado con exito'
            }else{
                state.msg = 'error al guardar'
            }
        },
    },

    actions: {
        getStudent( { commit },data ){
            axios.post(`api/getidstudent`,data).then(response => {
                commit('GET_STUDENT', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        createAttendance( {commit},data){
            axios.post(`api/createattendance`,data).then(response => {
                commit('POST_ATTENDANCE', response.status,data);
            }).catch((error) => {
                console.log(error);
            })
        },
    },

}
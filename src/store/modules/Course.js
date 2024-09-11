import axios from 'axios';
export default {
    namespaced: true,
    state: {
        courses: [],
        coursesbyid: [],
        allcourses: [],
        msg:''
    },
    
    getters: {
        
    },

    mutations: {
        GET_COURSE: (state, data) => {
            state.courses = data
        },
        GET_COURSEBYID: (state, data) => {
            state.coursesbyid = data
        },
        GET_ALLCOURSE: (state, data) => {
            state.allcourses = data
        },
        POST_COURSE: (state,status,data) => {
            if(status == 200){
                state.courses.unshift(data)
                state.msg = 'Guardado con exito'
            }else{
                state.msg = 'error al guardar'
            }
        },
        PUT_COURSE:(state,status) =>{
            if(status ==200){
                state.msg = 'Editado con exito'
            }else{
                state.msg = 'error al editar'
            }
        },
        DELETE_COURSE:(state,status) =>{
            if(status == 200){
                state.msg = 'eliminado con exito'
            }else{
                state.msg = 'error al eliminar'
            }
        }
        
    },

    actions: {

        getCourse( { commit }, id ){
            axios.get(`api/getmanagement/${id}`).then(response => {
                commit('GET_COURSE', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },

        getCourseById( { commit }, id ){
            axios.get(`api/getcourse/${id}`).then(response => {
                commit('GET_COURSEBYID', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        getAllCourse( { commit } ){
            axios.get(`api/getallcourses`).then(response => {
                commit('GET_ALLCOURSE', response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        createCourse( {commit},data){
            axios.post(`api/createcourse`,data).then(response => {
                commit('POST_COURSE', response.status,data);
            }).catch((error) => {
                console.log(error);
            })
        },
        updateCourse({commit},data){
            axios.put(`api/updatecourse/${data.id}`,data).then(response => {
                commit('PUT_COURSE', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        deleteCourse({commit},id){
            axios.delete(`api/deletecourse/${id}`).then(response => {
                commit('DELETE_COURSE', response.status);
            }).catch((error) => {
                console.log(error);
            })
        },
        
        
    },

}
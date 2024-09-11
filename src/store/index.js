import Vue from 'vue'
import Vuex from 'vuex'
import Course from './modules/Course'
import Student from './modules/Student';
import Teacher from './modules/Teacher';
import Degree from './modules/Degree';
import Section from './modules/Section';
import Issue from './modules/Issue';
import Rating from './modules/Rating';
import Attendance from './modules/Attendance';
import Management from './modules/Management';
import Login from './modules/Login';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moduleCourse: Course,
    moduleStudent: Student,
    moduleTeacher: Teacher,
    moduleDegree: Degree,
    moduleSection: Section,
    moduleIssue: Issue,
    moduleRating: Rating,
    moduleAttendance: Attendance,
    moduleManagement: Management,
    moduleLogin: Login,
  }
})

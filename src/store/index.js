import { createStore } from 'vuex';
import router from '@/router';

const staffmaint = "http://localhost:3000/"


export default createStore({
  state: {
    employees: null,
    employee: null,
    employmentDetails: null,
    employmentDetail: null,
    userMsg: null
  },
  getters: {
  },
  mutations: {
    setEmployees (state, values) {
      state.employees = values;
    },
    setEmployee (state, value) {
      state.employee  = value;
    },
    setEmploymentDetails (state, values) {
      state.employmentDetails = values;
    },
    setEmploymentDetail (state, values) {
      state.employmentDetail = values;
    },
    setUserMsg (state, value) {
      state.setUserMsg = value;
    }, 
  },
  actions: {
    getEmployees: async (context) => {
      fetch(staffmaint + "employees")
        .then((response) => response.json())
        .then((employees) => context.commit("setEmployees", employees));
    },
    getEmployee: async (context, id) => {
      fetch(staffmaint  + id)
        .then((response) => response.json())
        .then((employees) => context.commit("setEmployee", employee));
    },
    getEmploymentDetails: async (context) => {
      fetch(staffmaint + "employmentDetails")
        .then((response) => response.json())
        .then((employmentDetails) => context.commit("setEmploymentDetails", employmentDetails));
    },
    getemploymentDetail: async (context) => {
      fetch(staffmaint + "post/application")
        .then((response) => response.json())
        .then((employmentDetails) => context.commit("setEmploymentDetail", employmentDetail));
    },
  },
  modules: {
  }
})
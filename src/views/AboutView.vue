<template>
  <div class="about container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">EMP_ID</th>
          <th scope="col">Emp_num</th>
          <th scope="col">Emplyd_date</th>
          <th scope="col">TermtdDate</th>
          <th scope="col">ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emptDetail in employmentDetails" :key="emptDetail.Employee_id">
          <th scope="row"></th>
          <td>{{emptDetail.Employee_id}}</td>
          <td>{{emptDetail.EmployeeNum}}</td>
          <td>{{emptDetail.EmployeeDate}}</td>
          <td>{{emptDetail.TerminatedDate}}</td>
          <td>{{emptDetail.Person_id}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "",
  components: {
    HelloWorld,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    employmentDetails() {
      return this.$store.state.employees;
    },
  },
  mounted() {
    this.$store.dispatch("getEmployees");
  },
};
</script>

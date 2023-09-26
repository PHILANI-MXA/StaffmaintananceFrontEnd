<template>
  <div class="home container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.Person_id">
          <th scope="row">{{employee.Person_id}}</th>
          <td>{{employee.Firstname}}</td>
          <td>{{employee.Lastname}}</td>
          <td>{{employee.Birthday}}</td>
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
    employees() {
      return this.$store.state.employees;
    },
  },
  mounted() {
    this.$store.dispatch("getEmployees");
  },
};
</script>
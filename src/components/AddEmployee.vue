<template>
    <div class="min-vh-100 p-5 my-5" id="adEmployee">
        <h3 class="text-center border border-black">Add Employee</h3><br>
        <div class="col-md-6 m-auto">
            <form class="container border border-black h-100" @submit.prevent="AddEmployee()">
            <div class="form-group">
            <label for="reason">Person_id</label>
            <input type="text" class="form-control pass m-auto" id="text" v-model="Person_id">
          </div>
          <div class="form-group">
            <label for="leaveTotal">Firstname</label>
            <input type="total" class="form-control pass m-auto" id="number" v-model="Firstname">
          </div>
           <div class="form-group">
            <label for="id">Lastname</label>
            <input type="number" class="form-control pass m-auto" id="number" v-model="Lastname" required>
          </div>
          <div class="form-group">
            <label for="id">Birthdate</label>
            <input type="number" class="form-control pass m-auto" id="number" v-model="Birthdate" required>
          </div>
          <div class="form-group">
            <label for="id"PersonID</label>
            <input type="number" class="form-control pass m-auto" id="number" v-model="Person_id" required>
          </div>
          
          <button class="btn btn-primary my-5" type="submit">Submit application</button>
        </form>
        </div>
    </div>
</template>
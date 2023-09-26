<template>
    <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="https://www.iloveimg.com/download/dnn6qx4vyw6j8hgw3401dz5494kA1qkmtsjdhjm7cyAc03hqbq1rfb269wrvp2lq1py2sqbm4575vrq4r1h0zygjlz46tshq6kdd6vnhAg8270hzzdfmwwslj9Atn6wcn3k50683rskwjlywtd7mv91h7sx4A6h4AhA7A0wwzfqw19gd7fx1/10" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item text-white">
             <router-link class="text-decoration-none text-white" to="/">Employees</router-link>
            </li>
            <li class="nav-item text-white">
              <router-link class="text-decoration-none text-white" to="/about">Employment details</router-link>
             </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    <router-view/>
    </template>
    
    <style>
     @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');
    
    * {
        font-family: Raleway, sans-serif;
    }
    .nav-item{
    position: relative;
    padding: 20px;
    font-size: larger;
    font-family: Raleway, sans-serif;
    color: #fff;
    }
    .navbar-brand{
      font-style: italic;
    }
    
    .btn{
      color: white;
      border-color: white;
    }
    
    nav {
    position:fixed;
    width: 100%;
    top: 0;
    background-color: #145369;
    z-index:50;
    }
    </style>
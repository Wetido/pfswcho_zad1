<template>
  <div id="app">

    <div>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>


    <div>
      <div id="nav">
        <router-link to="/">
          <button class="nav-element btn btn-primary">Home
          </button>
        </router-link>
        <router-link to="/fibonacci">
          <button class="nav-element btn btn-primary">Fibonacci
          </button>
        </router-link>
        <router-link to="/docs">
          <button class="nav-element btn btn-primary">Docs
          </button>
        </router-link>
        <router-link to="/history">
          <button class="nav-element btn btn-primary">History
          </button>
        </router-link>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

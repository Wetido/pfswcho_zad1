<template>
  <div class="hello">
    <label>Podaj wartosc ciągu do obliczenia</label>
    <input v-model="value">
    <button @click="calculate">Oblicz</button>

    <div v-show="result !== null">
      Wynik = {{result}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Fibonacci',
  data() {
    return {
      value: null,
      result: null
    }
  },

  methods: {
    calculate(){
      console.log(this.value)
      axios.post('http://localhost:3000/fibonacci/calculate/', {index: this.value}).then((response) => {
        console.log(response);
        this.result = response.data
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

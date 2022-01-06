<template>
  <div class="hello">
    <div style="margin-top: 20px">Historia ostatnich 10 obliczeń</div>
    <table style="margin: 0 auto; margin-top: 20px">
      <thead>
      <tr>
        <th>Index</th>
        <th>Wartość</th>
        <th>Date obliczenia</th>
        <th>Źródło</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="historyElement in history" v-bind:key="historyElement.id">
        <td>
          {{ historyElement.index }}
        </td>
        <td>
          {{ historyElement.value }}
        </td>
        <td>
          {{ historyElement.dateTime }}
        </td>
        <td>
          {{ historyElement.source }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'History',
  data() {
    return {
      history: [],
    }
  },

  mounted() {
    this.getHistory()
  },

  methods: {
    getHistory() {

      axios.get('http://localhost:3000/fibonacci/getAll/').then((response) => {
        this.history = response.data
      });
    }
  }
}
</script>


<style scoped>

</style>

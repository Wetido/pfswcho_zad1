<template>
  <div class="hello">
    Historia
    <table style="margin: 0 auto">
      <thead>
      <tr>
        <th>ID</th>
        <th>Wartość</th>
        <th>Data obliczenia</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="historyElement in history" v-bind:key="historyElement.id">
        <td>
          {{ historyElement.id }}
        </td>
        <td>
          {{ historyElement.value }}
        </td>
        <td>
          {{ historyElement.dateTime }}
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

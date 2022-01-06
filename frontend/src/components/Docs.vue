<template>
  <div class="hello">
    <h2>Opis aplikacji</h2>
    <p>
      Aplikacja została stworzona w oparciu o 5 kontenerów. Na frontendzie został użyty Vue.js na backendzie nest.ts.
      Użyta baza danych to postgres, do łączenia sie z bazą stworzony też kontener w oparciu o pgadmin. Ostatnim użytym
      kontenerem jest redis pozwalający na cache'owanie danych.
    </p>
    <p>W aplikacji umożliwiono obliczanie elementów ciągu
      Fibonnaciego na dwa sposoby. Iteracyjnie oraz rekurencyjnie. Dane są obliczane na backendzie.
      W przypadku liczenia iteracyjnego wartości są wyliczane do zadanego indexu i wszystkie wartości są w trakcie tego
      procesu cachowane. W przypadku liczenia rekurencyjnego przy każdym wywołaniu metody dla indexu o 1 i od 2
      mniejszego sprawdzane jest czy liczba nie znajduje się w redisie. Pozwala to na szybsze obliczenie kolejnych
      elementów ciągu i zapobiega wyczerpaniu pamięci stosu spowodowanego poprzez ilość zagnieżdzonych wywołań funkcji.
      Każde obliczenie jest zapisywane w historii z datą i infomacją o miejscu skąd została pobrana (ojaśnienia niżej).
    </p>
    <p>
      TTL danych w redisie to 60 sekund.
    </p>
    <p>
      W przypadku obliczania nowej wartości najpierw sprawdzane jest czy nie jest ona już zapisana w redisie. W
      następnej kolejności czy nie jest zapisana w bazie a później dopiero jest obliczana przez backend.
    </p>

    <h2>Schemat komunikacji</h2>
    <img src='../assets/communication.png'>

    <h2>Objaśnienie typów źródła w historii</h2>
    <p>
      dataBase - podany index został znaleziony w bazie danych i został pobrany bez konieczności liczenia
    </p>
    <p>
      redis - podany index został znaleziony w cache redisa i został pobrany bez konieczności liczenia
    </p>
    <p>
      countFibonacciNormal - podany index został policzony iteracyjnie
    </p>
    <p>
      countFibonacciRecursive - podany index został obliczony rekurencyjnie
    </p>
  </div>
</template>

<script>
export default {
  name: 'Docs',
  props: {
    msg: String
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

p{
  width: 60%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

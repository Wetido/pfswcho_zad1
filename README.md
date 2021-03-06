## Opis aplikacji
```
Aplikacja uruchamia się na http://localhost:8080/
```

```
Aplikacja została stworzona w oparciu o 5 kontenerów. 
Na frontendzie został użyty Vue.js na backendzie nest.ts.
Użyta baza danych to postgres, do łączenia sie z bazą stworzony też kontener w oparciu o pgadmin. 
Ostatnim użytymkontenerem jest redis pozwalający na cache'owanie danych.
```

```
W aplikacji umożliwiono obliczanie elementów ciągu Fibonnaciego na dwa sposoby. 
Iteracyjnie oraz rekurencyjnie. Dane są obliczane na backendzie. W przypadku 
liczenia iteracyjnego wartości są wyliczane do zadanego indexu i wszystkie wartości 
są w trakcie tego procesu cachowane. W przypadku liczenia rekurencyjnego 
przy każdym wywołaniu metody dla indexu o 1 i od 2 mniejszego sprawdzane 
jest czy liczba nie znajduje się w redisie. Pozwala to na szybsze obliczenie kolejnych
elementów ciągu i zapobiega wyczerpaniu pamięci stosu spowodowanego 
poprzez ilość zagnieżdzonych wywołań funkcji.
Każde obliczenie jest zapisywane w historii z 
datą i infomacją o miejscu skąd została pobrana (ojaśnienia niżej).
```

```
TTL danych w redisie to 60 sekund.
```

```
W przypadku obliczania nowej wartości najpierw sprawdzane jest czy nie jest ona już zapisana w redisie. W
następnej kolejności czy nie jest zapisana w bazie a później dopiero jest obliczana przez backend.
```

## Schemat komunikacji
![communication](https://user-images.githubusercontent.com/33351633/148430707-e5057008-dcb7-4039-a894-f3f9ba6a216b.png)

## Objaśnienie typów źródła w historii

```
dataBase - podany index został znaleziony w bazie danych i został pobrany bez konieczności liczenia
```

```
redis - podany index został znaleziony w cache redisa i został pobrany bez konieczności liczenia
```

```
countFibonacciNormal - podany index został policzony iteracyjnie
```

```
countFibonacciRecursive - podany index został obliczony rekurencyjnie
```

## Zdjęcie potwierdzające działania usług

![image](https://user-images.githubusercontent.com/33351633/148441322-17ed9079-db5d-4802-9d04-a3297afc35d8.png)
![image](https://user-images.githubusercontent.com/33351633/148441463-b06a68f5-435d-47b9-9cd2-5ac0b48c0972.png)


<template>
    <div>
      <h2>Number Shot Oyunu</h2>
      <p v-if="!gameStarted">Oyuna başlamak için başla düğmesine tıklayın!</p>
      <p v-if="gameStarted">Hedef Sayı: {{ target }}</p>
      <input v-model="guess" v-if="gameStarted" />
      <button @click="startGame" v-if="!gameStarted">Başla</button>
      <button @click="checkGuess" v-if="gameStarted">Tahmin Et</button>
      <p v-if="gameStarted && guessResult !== null">{{ guessResult }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gameStarted: false,
        target: 0,
        guess: null,
        guessResult: null,
      };
    },
    methods: {
      startGame() {
        this.gameStarted = true;
        this.target = Math.floor(Math.random() * 100) + 1; // 1-100 arası rastgele bir hedef sayı seç
        this.guessResult = null;
        this.guess = null;
      },
      checkGuess() {
        if (this.guess === this.target) {
          this.guessResult = "Tebrikler! Doğru tahmin ettiniz!";
          this.gameStarted = false;
        } else if (this.guess < this.target) {
          this.guessResult = "Daha yüksek bir sayı tahmin edin.";
        } else {
          this.guessResult = "Daha düşük bir sayı tahmin edin.";
        }
      },
    },
  };
  </script>
  
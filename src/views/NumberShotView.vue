<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md">
        <h1 class="text-3xl mb-4">Number Shot Oyunu</h1>
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="startGame"
          >
            Oyuna Başla
          </button>
        </div>
        <div v-if="gameStarted" class="mt-4">
          <p v-if="message" class="text-green-500 mb-4">{{ message }}</p>
          <p v-if="randomNumber" class="mb-4">Rastgele sayı: {{ randomNumber }}</p>
          <label v-if="!message" for="guess" class="block">1 ile 100 arasında bir sayı girin:</label>
          <input
            v-if="!message"
            type="number"
            id="guess"
            v-model.number="userGuess"
            class="block border rounded p-2 my-2 w-full"
            min="1"
            max="100"
          />
          <button
            v-if="!message"
            @click="checkGuess"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Tahmin Et
          </button>
          <p v-if="userGuess" class="mt-4">Tahmininiz: {{ userGuess }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gameStarted: false,
        randomNumber: 0,
        userGuess: 0,
        message: '',
      };
    },
    methods: {
      startGame() {
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.gameStarted = true;
      },
      checkGuess() {
        if (this.userGuess === this.randomNumber) {
          this.message = 'Tebrikler, doğru tahmin!';
        } else if (this.userGuess < this.randomNumber) {
          this.message = 'Daha yüksek bir sayı girin.';
        } else {
          this.message = 'Daha düşük bir sayı girin.';
        }
      },
    },
  };
  </script>
  
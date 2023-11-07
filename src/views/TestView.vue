<template>
    <div>
      <input
        class="w-60 h-12 border-4 border-black rounded"
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="  Görev ekle..."
      />
      <ul class="my-6 flex flex-col  justify-evenly">
        <li class="flex  mx-6 text-start" v-for="(task, index) in tasks" :key="index">
          <span class="mx-6" :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
            {{ task.title }}
          </span>
          <button class="border rounded w-6 " @click="completeTask(index)">
            <input class="block border w-6 h-6" type="checkbox" />
          </button>
          <button class="border rounded bg-red-300 ml-6 text-white w-12 h-6" @click="deleteTask(index)">
            Sil
          </button>
        </li>
      </ul>
      <div :style="{ backgroundColor: color }" class="renk">
        <button @click="changeColor" class="border bg-green-200 text-center rounded w-32 h-10">
          Renk Değiştir
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const tasks = ref([
    { title: 'Örnek Görev 1', completed: false },
    { title: 'Örnek Görev 2', completed: true },
  ]);
  
  const newTask = ref('');
  
  const addTask = () => {
    tasks.value.push({ title: newTask.value, completed: false });
    newTask.value = '';
  };
  
  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
  };
  
  const completeTask = (index) => {
    tasks.value[index].completed = true;
  };
  
  const color = ref('lightblue');
  
  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    color.value = randomColor;
  };
  </script>
  
  <style scoped>
    .renk {
      width: 200px;
      height: 200px;
    }
  </style>
  
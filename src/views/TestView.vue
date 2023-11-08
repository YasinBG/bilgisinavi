<template>
  <div class="">
    <input
      class="w-60 h-12 border-4 border-black rounded mx-auto"
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="  Görev ekle..."
    />
    <ul class="my-6 flex flex-col">
      <li class="flex text-start  my-2 font-semibold " v-for="(task, index) in tasks" :key="index">
        <input class="border rounded w-6 h-6" type="checkbox" @change="completeTask(index)" :checked="task.completed" />
        <span class="mx-2" :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ truncateText(task.title, 20) }}
        </span>
        <div class="fixed ml-40 flex">
          <button class="border rounded bg-red-300 ml-6 text-white w-12 h-6" @click="deleteTask(index)">
            Sil
          </button>
        </div>
      </li>
    </ul>
    <button class="border rounded bg-green-300  ml-6 text-white w-12 h-6" @click="recoverTask">
      Geri Al
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tasks = ref([
  { title: 'Örnek Görev 1', completed: false },
  { title: 'Örnek Görev 2', completed: true },
]);

const newTask = ref('');

const deletedTasks = ref([]);

const addTask = () => {
  tasks.value.push({ title: newTask.value, completed: false });
  newTask.value = '';
};

const deleteTask = (index) => {
  const deletedTask = tasks.value.splice(index, 1)[0];
  deletedTasks.value.unshift(deletedTask);
};

const recoverTask = () => {
  if (deletedTasks.value.length > 0) {
    const recoveredTask = deletedTasks.value.shift();
    tasks.value.push(recoveredTask);
  }
};

const completeTask = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
};

const truncateText = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
};
</script>

<style scoped>
</style>

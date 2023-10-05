<template>
  <div class="p-4">
    

    <div class="mt-4">
      <h2 class="text-xl font-semibold">Diğer İçerikler:</h2>
      <ul class="list-disc ml-4">
        <li v-for="item in items" :key="item.id" class="mt-2">
          {{ item.text }}
          <button @click="removeItem(item.id)" class="ml-2 text-red-600">Sil</button>
        </li>
      </ul>
    </div>

    <div class="mt-4">
      <input v-model="newItemText" @keyup.enter="addItem" placeholder="Yeni öğe ekle" class="p-2 border rounded" />
      <button @click="addItem" class="bg-green-500 text-white px-2 py-1 ml-2 rounded">Ekle</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const condition = ref(true);
    const items = ref([
      { id: 1, text: 'Öğe 1' },
      { id: 2, text: 'Öğe 2' },
      { id: 3, text: 'Öğe 3' },
    ]);
    const newItemText = ref('');

    const addItem = () => {
      if (newItemText.value.trim() !== '') {
        items.value.push({ id: items.value.length + 1, text: newItemText.value });
        newItemText.value = '';
      }
    };

    const removeItem = (itemId) => {
      items.value = items.value.filter((item) => item.id !== itemId);
    };

    return {
      condition,
      items,
      newItemText,
      addItem,
      removeItem,
    };
  },
};
</script>

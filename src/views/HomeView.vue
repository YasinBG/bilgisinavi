<template>
  <div class="text-2xl text-green-500">
    test
  </div>

  <div
   v-for="destination in destinations" :key="destination.id">

   <p>{{ destination.id }}</p>

   <h1>{{ destination.title }}</h1>
   
   <p>{{ destination.body }}</p>

   <img class="w-96 h-96 mx-auto" :src="destination.image" alt="">


   
</div>

<KosulIfade></KosulIfade>
</template>

<script>
import KosulIfade from '@/components/KosulIfade.vue'
import sourceData from '../components/data.json'
import { ref } from 'vue'
export default {
  name: 'HomeView',
  components: {KosulIfade
    
  },
  setup(){
   const destinations =ref(sourceData.destinations)
    return{destinations

    }
  }
}
</script>

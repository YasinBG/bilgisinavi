<template>
  <div>
    <button @click="toggleCondition" class="bg-purple-500 text-white w-36 h-10">toggle button</button>
    <p v-if="condition">basarili giris yaptiniz</p>
    <p v-else>giris yapiniz lutfen</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    components:{

    },
    setup(){
        const condition =ref(true)

        const toggleCondition = ()=>{
            condition.value=!condition.value
        }
        return{
        condition,toggleCondition
        }
    }

}
</script>

<style>

</style>
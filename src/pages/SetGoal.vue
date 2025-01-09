<template>

  <div class="q-pa-md bg-grey-9 text-white">
    <div class="q-gutter-md row " >
      <q-date v-model="date" dark bordered  />
      <q-time v-model="time" dark bordered />
    </div>
    <goal-table></goal-table>
  </div>


</template>

<script setup>
import { ref} from 'vue'
import goalTable from 'components/setgoal-table.vue'



const date =ref('2024/02/01')
const time = ref('10:56')


</script>

<style scoped lang="sass"></style>

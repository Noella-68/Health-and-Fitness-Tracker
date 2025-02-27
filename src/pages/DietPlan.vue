
<template>
  <div class="q-pa-md">
    <q-markup-table flat bordered>
      <thead class="bg-teal">
      <tr>
        <th colspan="5">
          <div class="row no-wrap items-center">
            <q-img
              style="width: 70px"
              :ratio="1"
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/donuts.png"
            />

            <div class="text-h5 q-ml-md text-white">Treats</div>
            <q-space></q-space>

            <div class="q-pa-md">
              <div class="q-gutter-md row items-start">
            <div style="min-width: 250px; max-width: 300px">

        <q-select
          filled
          color="white"
          v-model="modelMultiple"
          multiple
          :options="options"
          use-chips
          stack-label
          label="Multiple selection"
          />
      </div>
    </div>
  </div>

          <q-space></q-space>

            <q-btn push color="white" text-color="primary" label="Update Plan" class="q-mt-lg q-mb-lg" />
          </div>
        </th>
      </tr>
      <tr>
        <th class="text-left">Days of the Week</th>
        <th class="text-right">Calories</th>
        <th class="text-right">Fat (g)</th>
        <th class="text-right">Carbs (g)</th>
        <th class="text-right">Protein (g)</th>
      </tr>
      </thead>
      <tbody :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <tr v-for="item in dietplan" v-bind:key="item.id">
        <td class="text-left"> {{item.Day}}</td>
        <td class="text-right">{{item.Calories}}</td>
        <td class="text-right">{{item.Fat}} </td>
        <td class="text-right">{{item.Carbs}}</td>
        <td class="text-right">{{item.Protein}} </td>
      </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>



<script setup>
import { ref, onMounted} from "vue";
import axios from 'axios'


const dietplan = ref ([]);


onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/dietplan');
    dietplan.value = response.data;
  } catch (error) {
    console.error('Error Fetching dietplan',error);
  }
  
})


</script> 


<style scoped lang="sass">

</style>

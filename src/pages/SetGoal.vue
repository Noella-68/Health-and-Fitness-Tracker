<template>
  <q-date v-model="date" landscape />

  <div class="q-pa-md bg-grey-9 text-white">
    <div class="q-gutter-md">
      <q-time v-model="time" dark bordered />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      date: ref('2019/02/01'),
      time: ref('10:56'),
    }
  },
}
</script>

<style scoped lang="sass"></style>

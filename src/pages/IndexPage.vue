<template>
  <q-page padding class="heading">
    <q-card  justify="center" class="q-ma-lg heading " align="center" >
      <q-card-section>
        <div class="text-h6" >Track your workouts and see your progress.</div>
      </q-card-section>



      <q-card-section > Join over 100 million people active on fitness therapy </q-card-section>
    </q-card>

    <br />

    <div class="row q-gutter-xl justify-center">

      <q-card flat bordered class="my-card">
        <q-card-section>
          <q-card class="my-card">
            <q-img src="public/images/dietplan.jpg" height="150px" >
              <div class="absolute-bottom text-h6">Diet Plan</div>
            </q-img>

            <q-card-section>
              Unlock Your Weight Loss Journey with Our Custom Diet Plan Card
            </q-card-section>
            <q-card-actions align="center">
              <q-btn class="glossy" color="teal" label="Proceed" @click="$router.push('diet-plan')"/>
            </q-card-actions>
          </q-card>
        </q-card-section>

        <q-separator inset />

        <q-card-section> Join over 100 million people active on fitness therapy </q-card-section>
      </q-card>

      <q-card flat bordered class="my-card">
        <q-card-section>
          <q-card class="my-card">
            <q-img src="public/images/setgoal.jpg" height="150px">
              <div class="absolute-bottom text-h6">Set Goal</div>
            </q-img>

            <q-card-section>
              Achieve Your Health & Fitness Goals with Our Goal-Setting Interface
            </q-card-section>
            <q-card-actions align="center">
              <q-btn class="glossy" color="teal" label="Proceed" @click="$router.push('set-goal')"/>
            </q-card-actions>
          </q-card>
        </q-card-section>

        <q-separator inset />

        <q-card-section> Join over 100 million people active on fitness therapy </q-card-section>
      </q-card>

      <q-card flat bordered class="my-card">
        <q-card-section>
          <q-card class="my-card">
            <q-img src="public/images/mtuprogress.jpeg" height="150px">
              <div class="absolute-bottom text-h6">Track Progress</div>
            </q-img>

            <q-card-section>
              Track Your Health & Fitness Progress with Our Progress Dashboard
            </q-card-section>
            <q-card-actions align="center">
              <q-btn class="glossy" color="teal" label="Proceed" @click="$router.push('track-progress')"/>
            </q-card-actions>
          </q-card>
        </q-card-section>

        <q-separator inset />

        <q-card-section> Join over 100 million people active on fitness therapy </q-card-section>
      </q-card>


    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";
const $router = useRouter();

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.heading
  border-block: double

</style>

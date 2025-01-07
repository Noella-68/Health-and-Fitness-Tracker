<template>
  <q-page padding>
    <q-card flat bordered justify="center">
      <q-card-section>
        <div class="text-h6">Track your workouts and see your progress.</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section> Join over 100 million people active on fitness therapy </q-card-section>
    </q-card>

    <br />

    <div class="row q-gutter-xl justify-center">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-h6">Set Goal</div>
            </q-img>

            <q-card-section>
              {{ lorem }}
            </q-card-section>
            <q-card-actions align="center">
              <q-btn class="glossy" color="teal" label="Proceed" />
            </q-card-actions>
          </q-card>
        </q-card-section>

        <q-separator inset />

        <q-card-section> Join over 100 million people active on fitness therapy </q-card-section>
      </q-card>

      <q-card flat bordered class="my-card">
        <q-card-section>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-h6">Track Progress</div>
            </q-img>

            <q-card-section>
              {{ lorem }}
            </q-card-section>
            <q-card-actions align="center">
              <q-btn class="glossy" color="teal" label="Proceed" />
            </q-card-actions>
          </q-card>
        </q-card-section>

        <q-separator inset />

        <q-card-section> Join over 100 million people active on fitness therapy </q-card-section>
      </q-card>

      <q-card flat bordered class="my-card">
        <q-card-section>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-h6">Diet Plan</div>
            </q-img>

            <q-card-section>
              {{ lorem }}
            </q-card-section>
            <q-card-actions align="center">
              <q-btn class="glossy" color="teal" label="Proceed" />
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
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

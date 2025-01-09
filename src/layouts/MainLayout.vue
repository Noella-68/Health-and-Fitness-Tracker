<template>
  <q-layout view="lHh Lpr lFf" container style="height: 800px" class="shadow-2 rounded-borders">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title> Health and Fitness App </q-toolbar-title>
        <span class="q-mr-lg  text-h6" >Set Goal</span>
         <span class="text-h6">About Us</span>
        <q-space></q-space>

        <span class="q-mr-sm"> <q-btn push color="primary" label="SIGN UP" /> </span>
        <q-btn push color="primary" label="LOGIN" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>







</script>

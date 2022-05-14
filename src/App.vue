<script setup lang="ts">
import NavBar from "./components/NavBar.vue"

</script>

<template>
 <div class="w-100">
     <NavBar />
     <router-view></router-view>
 </div>
</template>

<style>
@import "./assets/css/app.scss"
</style>

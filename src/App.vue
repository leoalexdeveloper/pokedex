<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import { useStore } from "vuex"

const store = useStore()
console.log({page:store.state.pokemons.currentEditPage})
</script>

<template>
 <div class="container">
     <NavBar />
     <router-view></router-view>
 </div>
</template>

<style>
@import "./assets/css/app.scss"
</style>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import { useStore } from "vuex"

const store = useStore()
console.log({page:store.state.pokemons.currentEditPage})
</script>

<template>
 <div>
     <NavBar />
     <router-view></router-view>
 </div>
</template>

<style>

</style>

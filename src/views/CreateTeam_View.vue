<template>
    <div>
      <PokemonMountTeamBoard />
      <PaginationComp v-on:paginate="callPaginatedPokemons"/>
      <router-view :key="route.params.page"></router-view>
    </div>
</template>

<script lang="ts" setup>
//imports vue libs
import { useStore } from "vuex"
import { useRoute } from "vue-router"

//imports components
import type { TPaginationResult } from "../types/PaginationComp"
import PaginationComp from "../components/PaginationComp.vue"
import PokemonMountTeamBoard from "../components/PokemonMountTeamBoard.vue"

//data vue libs
const store = useStore()
const route = useRoute()

//methods
const callPaginatedPokemons  = ([offset, limit]:TPaginationResult)=> {
	console.log(offset, limit)
	store.dispatch("getPokemonListFromApi", `pokemon?limit=${limit}&offset=${offset}`)
	store.commit("setCurrentEditPage", Number(route.params.page))
}

</script>

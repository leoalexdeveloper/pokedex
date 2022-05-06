<template>
    <div>
      <PokemonMountTeamBoard />
      <router-view class="p-5 poistion-sticky top-0 start-0" :key="route.params.page"></router-view>
      <PaginationComp v-on:paginate="callPaginatedPokemons"/>
    </div>
</template>

<script lang="ts" setup>
//imports vue libs
import { useStore } from "vuex"
import { useRoute } from "vue-router"

//imports components
import PaginationComp from "../components/PaginationComp.vue"
import PokemonMountTeamBoard from "../components/PokemonMountTeamBoard.vue"

//imports types
import type { TPaginationResult } from "../types/PaginationComp"

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

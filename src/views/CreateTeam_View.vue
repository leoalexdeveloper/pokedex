<template>
    <div>
      <PokemonMountTeamBoard />
      <PaginationComp v-on:paginate="callPaginatedPokemons"/>
      <router-view :key="route.params.page"></router-view>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, ref, Ref, reactive } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import type { TPaginationResult } from "../types/PaginationComp"
import PokemonPickBoard from "../components/PokemonPickBoard.vue"
import PaginationComp from "../components/PaginationComp.vue"
import PokemonMountTeamBoard from "../components/PokemonMountTeamBoard.vue"
const store = useStore()
const route = useRoute()

const callPaginatedPokemons  = ([offset, limit]:TPaginationResult)=> {
	console.log(offset, limit)
	store.dispatch("getPokemonListFromApi", `pokemon?limit=${limit}&offset=${offset}`)
	store.commit("setCurrentEditPage", Number(route.params.page))
}

</script>

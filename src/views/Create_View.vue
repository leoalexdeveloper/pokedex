<template>
    <div class="create-container">
        <FormComp v-if:="!hasTeamObject" v-on:submitFormData="createCurrentTeamObject"/>
        <PaginationComp v-on:paginate="callPaginatedPokemons"/>
        <router-view :key="route.params.page"></router-view>
    </div>
</template>

<script lang="ts" setup>
import FormComp from "../components/FormComp.vue"
import PaginationComp from "../components/PaginationComp.vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { reactive, computed } from "vue"
import ETeam from "../entities/Team"
import ITeam from "../interfaces/Team"
import IPokemon from "../interfaces/Pokemon"
import type { TPaginationResult } from "../types/PaginationComp"

const store = useStore()
const route = useRoute()
const currentTeamObject = reactive(store.state.pokemons.currentTeamObject)

const createCurrentTeamObject = (formData:string) => {
	const newTeam:ITeam<IPokemon> = new ETeam(formData)
	store.commit("setCurrentTeamObject", newTeam)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hasTeamObject = computed(()=>{
	return (Object.keys(currentTeamObject).length > 0) ? true : false
})

const callPaginatedPokemons  = ([offset, limit]:TPaginationResult)=> {
	console.log(offset, limit)
	store.dispatch("getPokemonListFromApi", `pokemon?limit=${limit}&offset=${offset}`)
}
</script>

<style lang="scss" scoped>
@import "../assets/css/Create_View.scss";
</style>

<template>
    <div class="create-container col-12">
        <FormComp v-if:="hasTeamObject" v-on:submitFormData="createCurrentTeamObject" placeholder="Insert your team name" :cancel="false"/>
        <router-view v-if:="!hasTeamObject" ></router-view>
    </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
//imports vue lib
import { useRoute } from "vue-router"
import { useStore } from "vuex"
import { reactive, computed, onBeforeMount } from "vue"

//imports components
import FormComp from "../components/FormComp.vue"

//import entities
import ETeam from "../entities/Team"

//import interfaces
import ITeam from "../interfaces/Team"
import IPokemon from "../interfaces/Pokemon"

//import types
import type { TPaginationResult } from "../types/PaginationComp"

//data vue lib
const store = useStore()
const route = useRoute()

//data var
const currentTeamObject = reactive(store.state.pokemons.currentTeamObject)
//const initialPagination:TPaginationResult = reactive<TPaginationResult>()


//methods
const createCurrentTeamObject = (teamName:string) => {
	const newTeam:ITeam<IPokemon> = new ETeam(teamName)
	store.commit("setCurrentTeamObject", newTeam)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hasTeamObject = computed(()=>{
	return (Object.keys(currentTeamObject).length === 0) ? true : false
})

//hooks
onBeforeMount(()=>{
	const limit = store.state.pokemons.initialPagination[1]
	const offset = (Number(route.params.page) * store.state.pokemons.maxPokemonPerPage) - store.state.pokemons.maxPokemonPerPage
	store.dispatch("getPokemonListFromApi", `pokemon?limit=${limit}&offset=${offset}`)
})
</script>

<style lang="scss" scoped>
@import "../assets/css/views/Create_View.scss";
</style>

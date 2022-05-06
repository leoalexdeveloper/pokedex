<template>
  <div class="bg-light overflow-hidden d-flex flex-row justify-content-evenly align-items-center p-0">
    <h1 class="fs-5 lead d-flex flex-content-between align-items-center p-4 border rounded">Team name: {{teamName}}</h1>
    <div :class="['alert', {'alert-warning': !IsTeamFully, 'alert-success':IsTeamFully}, 'col-4', 'd-flex', 'justify-content-evenly', 'align-items-center','mt-2']" role="alert">
      {{pokemonTeamStatusMsg()}}
      <router-link to="/">
        <button v-on:click="saveEditTeam" v-if:="IsTeamFully" class="btn btn-sm btn-primary px-4">Save</button>
      </router-link>
      <router-link to="/">
        <button v-on:click="cancelEditeam" v-if:="!IsTeamFully" class="btn btn-sm btn-primary px-4">Cancel</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
//import vue libs
import { Ref, ref, reactive, computed } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

//import other classes
import Utils from "../utils/Utils"

//data vue libs
const route = useRoute()
const store = useStore()

//data var
const teamName:Ref<string> = ref(String(route.params.teamName))
const maxPokemonsOnTeam:Ref<number> = ref<number>(store.state.pokemons.maxPokemonsOnTeam)
const currentTeamObject = reactive(store.state.pokemons.currentTeamObject)
const currentEditTeam = reactive(store.state.pokemons.currentEditTeam)

//computed
const IsTeamFully:Ref<boolean> = computed(()=>{
	return maxPokemonsOnTeam.value === currentEditTeam.length
})

//methods
/* eslint-disable no-unreachable */
const pokemonTeamStatusMsg = () => {
	switch(currentEditTeam.length){
	case 0:
		return "Pick some pokemon"
		break
	case maxPokemonsOnTeam.value:
		return  "Click on save!"
		break
	default:
		return  `Remain ${maxPokemonsOnTeam.value - currentEditTeam.length} slots empty`
	}
}

const cancelEditeam = () => store.commit("removeCurentTeamObject")
const saveEditTeam = () => {
	currentTeamObject.team = [...currentEditTeam]
	store.commit("pushToSavedTeams", {...currentTeamObject})
	store.commit("removeCurentTeamObject")
}
//hooks

</script>

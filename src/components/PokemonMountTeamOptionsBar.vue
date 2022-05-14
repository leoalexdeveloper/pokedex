<template>
  <div>
    <div v-if:="!isNameEdit"
         class="col-12 col-sm-12 col-md-12 col-lg-12 bg-light overflow-hidden d-flex flex-column justify-content-evenly align-items-center p-0">
      <div class="col-10 col-sm-5 col-md-5 col-lg-4 d-flex flex-row flex-wrap justify-content-between rounded border">
        <div class="col-sm-4 col-md-6 col-lg-10 fs-5 lead d-flex flex-content-between align-items-center px-2 rounded text-dark">
          {{Utils.capsFirstLetter(teamNameChange)}}
        </div>
        <div class="col-sm-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
          <a v-on:click="editName" class="col-12 btn btn-secondary rounded-0 rounded-end">Edit</a>
        </div>
      </div>
      <div :class="['col-10', 'col-sm-5', 'col-md-5', 'col-lg-4', 'alert', {'alert-warning': !IsTeamFully, 'alert-success':IsTeamFully}, 'd-flex', 'flex-row', 'flex-wrap', 'justify-content-evenly', 'align-items-center','mt-2', 'p-1']"
           role="alert">
        <div class="mx-2">{{pokemonTeamStatusMsg()}}</div>
        <div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-evenly">
          <router-link to="/">
            <button v-on:click="saveEditTeam" v-if:="IsTeamFully" class="btn btn-sm btn-primary px-4">Save</button>
          </router-link>
          <router-link to="/">
            <button v-on:click="cancelEditeam" class="btn btn-sm btn-danger px-4 mx-2">Cancel</button>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if:="isNameEdit">
      <FormComp :cancel="true" :placeholder="teamName" v-on:submitFormData="saveTeamName" v-on:cancelSubmit="editName"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
//import vue libs
import { Ref, ref, reactive, computed } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

//imports intrerfaces
import ITeam from "../interfaces/Team"
import IPokemon from "../interfaces/Pokemon"

//imports components
import FormComp from "../components/FormComp.vue"

//import other classes
import Utils from "../utils/Utils"

//data vue libs
const route = useRoute()
const store = useStore()

//data var
const currentTeamObject = reactive(store.state.pokemons.currentTeamObject)
const teamName:Ref<string> = ref(currentTeamObject.name)
const maxPokemonsOnTeam:Ref<number> = ref<number>(store.state.pokemons.maxPokemonsOnTeam)
const currentEditTeam = reactive(store.state.pokemons.currentEditTeam)
const savedTeams = reactive(store.state.pokemons.savedTeams)
const isNameEdit:Ref<boolean> = ref<boolean>(false)

//computed
const IsTeamFully:Ref<boolean> = computed(()=>{
	return maxPokemonsOnTeam.value === currentEditTeam.length
})

const teamNameChange = computed(()=>{
	return currentTeamObject.name
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
	savedTeams[currentTeamObject.uuid] = {...currentTeamObject}
	store.commit("savedTeams", {...savedTeams})
	store.commit("removeCurentTeamObject")
}

const editName = () => {
	isNameEdit.value = !isNameEdit.value
}

const saveTeamName = (teamName:string) => {
	editName()
	currentTeamObject.name = teamName
}

</script>

<style lang="scss" scoped>
@import "../assets/css/utils.scss";

</style>

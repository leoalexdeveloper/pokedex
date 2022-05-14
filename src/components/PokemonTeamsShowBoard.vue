<template>
  <div class="col-12 p-4">
    <div v-for:="(team, index) in sortSavedTeams()" v-if:="Object.keys(savedTeams).length>0">
      <PokemonTeamShowComponent :team="team"
                                :index="index"
                                v-on:teamToEdit="pickTeamToEdit"
                                v-on:deleteTeam="deleteTeam"/>
    </div>
    <div v-else:="">
        <p class="fs-1 lead text-center mt-5">Mount your team!</p>
      </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
//imports vue lib
import { reactive } from "vue"
import { useStore } from "vuex"

//imports interfaces
import ITeam from "../interfaces/Team"
import IPokemon from "../interfaces/Pokemon"

//imports components
import PokemonTeamShowComponent from "../components/PokemonTeamShowComponent.vue"

//data vue lib
const store = useStore()

//data var
const savedTeams:{[key:string]:ITeam<IPokemon>} = reactive(store.state.pokemons.savedTeams)

//methods
const pickTeamToEdit = (team:ITeam<IPokemon>) => {
	store.commit("setCurrentTeamObject", {...team})
	store.commit("setTeamOnCurrentEditTeam", [...team.team])
}

const deleteTeam = (uuid:string) => {
	const selectedTeam = savedTeams[uuid]
	if(window.confirm(`Sure that you want delete the team: ${selectedTeam?.name}`)){
		store.commit("removeSavedTeam", uuid)
	}
}

const sortSavedTeams = () => {
	const teams = Object.values(savedTeams)
	const teamsSorted:ITeam<IPokemon>[] = teams.sort((a, b) : number => {
		return a.updatedAt - b.updatedAt
	})
	return [...teamsSorted].reverse()
}
</script>

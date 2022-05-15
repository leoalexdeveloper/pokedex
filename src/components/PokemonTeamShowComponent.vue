<template>

    <div class="card col-lg-10 col-md-11 col-sm-12 my-4 p-2 m-auto bg-light d-flex flex-column justify-content-center">
      <div class="d-flex flex-row justify-content-evenly">
        <h1 class="col-2 p-0 fs-6 lead bg-primary p-0 text-light rounded-start d-flex align-items-center">
          <p class="p-2 mt-3 rounded-end bg-light text-dark">Id: {{index+1}}</p>
        </h1>
        <h1 class="col-3 p-2 fs-6 lead text-center bg-primary p-2 text-light rounded-0 d-flex align-items-center">
          Team: {{Utils.capsFirstLetter(team.name)}}
        </h1>
        <h1 class="col-3 p-2 fs-6 lead text-center bg-primary p-2 text-light d-flex align-items-center">
          Created at: {{Utils.formatTimeStamp(team.createdAt)}}
        </h1>
        <h1 class="col-4 p-2 fs-6 lead text-center bg-primary p-2 text-light rounded-end d-flex align-items-center">
          Updated at: {{Utils.formatTimeStamp(team.updatedAt)}}
        </h1>
      </div>
      <div class="w-100 d-flex flex-row flex-wrap justify-content-evenly">
        <div class="col-sm-4 col-md-3 col-lg-2"
            v-for:="pokemon in team.team">
            <PokemonTeamShowCard :pokemon="pokemon"/>
        </div>
        <div class="col-12 d-flex m-auto justify-content-center align-items-center">
          <router-link v-on:click="editTeam"
                        :to="{name:`ShowPickPokemons`, params:{teamName:team.name, page:store.state.pokemons.currentEditPage}}">
            <button class="btn btn-primary">
              Edit
            </button>
          </router-link>
          <button v-on:click="deleteTeam"
                  class="btn btn-danger mx-2">
                  Remove
          </button>
        </div>
      </div>
    </div>

</template>

<script lang="ts" setup>
//imports vue libs
import { defineProps, defineEmits, reactive } from "vue"
import { useStore } from "vuex"

//imports interfaces
import ITeam from "../interfaces/Team"
import IPokemon from "../interfaces/Pokemon"

//imports classes
import Utils from "../utils/Utils"

//imports components
import PokemonTeamShowCard from "./PokemonTeamShowCard.vue"

//data vue
const store = useStore()
const emit = defineEmits(["teamToEdit", "deleteTeam"])

//data var
const savedTeams = reactive(store.state.pokemons.savedTeams)

//props
const props = defineProps({
	team:{
		type:Object as () =>  ITeam<IPokemon>,
		required:true
	},
	index:{
		type:Number,
		required:true
	}
})

//methods
const editTeam = () => {
	const team = savedTeams[props.team.uuid]
	team.updatedAt = Date.now()
	emit("teamToEdit", team)
}

const deleteTeam = () => emit("deleteTeam", props.team.uuid)
</script>

<template>
  <div>
    <div class="pick-pokemon-card card border p-2 rounded m-2">
      <h1 class="fs-5 text-center rounded-top bg-primary p-2 text-light lead">{{pokemon.name}}</h1>
      <object class="pick-pokemon-card-img img-fluid border p-2" :data="pokemon.img.mainImg" type="image/png">
          <img class="pick-pokemon-card-img img-fluid p-2" :src="pokemon.img.altImg" alt="" title="">
      </object>
      <div class="col-12 d-flex flex-column">
        <button v-if:="hideChooseBtn()" v-on:click="pickPokemon" class="btn btn-primary my-2 rounded-0">Choose</button>
        <button class="btn btn-primary my-0 rounded-0 rounded-bottom">Detail</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
//import vue lib
import { defineProps, reactive, Ref, ref } from "vue"
import { useStore } from "vuex"

//import interfaces
import IPokemon from "../interfaces/Pokemon"

//data vue lib
const store = useStore()

const props = defineProps({
	pokemon: {
		type:Object as ()=> IPokemon,
		required: true
	}
})

//data var
const currentEditTeam:IPokemon[] = reactive(store.state.pokemons.currentEditTeam)
const maxPokemonsOnTeam:Ref<number> = ref<number>(store.state.pokemons.maxPokemonsOnTeam)

//methods
const pickPokemon = () => {
	const findSlectedPokemon = store.state.pokemons.pokemonList.results.find((pokemon:IPokemon) => pokemon.id === props.pokemon.id)
	store.commit("setPokemonOnCurrentEditTeam", findSlectedPokemon)
}

const isPokemonInMyTeam = () => {
	return currentEditTeam.find((pokemon:IPokemon) => pokemon.id === props.pokemon.id)
}

const isTeamAreFully = () => {
	return Number(maxPokemonsOnTeam.value) === Number(currentEditTeam.length)
}

const hideChooseBtn = () => {
	return !(isTeamAreFully() || isPokemonInMyTeam()) ? true : false
}
</script>

<style lang="sass" scoped>
@import "../assets/css/components/PokemonCard.scss"
</style>

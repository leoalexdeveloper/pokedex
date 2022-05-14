<template>
  <div class="pick-pokemon-card col-lg-2 col-md-4 col-sm-5 col-12 m-2">
    <div class="col-12 card border p-2 rounded">
      <h1 class="fs-5 text-center rounded-top bg-primary p-2 text-light lead">{{pokemon.name}}</h1>
      <object class="col-md-12 pick-pokemon-card-img img-fluid border p-2 d-flex justify-content-center"
              :data="pokemon.img.mainImg"
              type="image/png">
          <img class="pick-pokemon-card-img img-fluid p-2"
                :src="pokemon.img.altImg" :alt="pokemon.name" :title="pokemon.name">
      </object>
      <div class="col-12 d-flex flex-column">
        <button v-if:="hideChooseBtn()" v-on:click="pickPokemon" class="btn btn-primary my-2 rounded-0">Choose</button>
        <router-link :to="{name:`ShowPokemonSpecs`, params:{teamName:teamName, page:currentEditPage, selectedPokeId:pokemon.id}}">
          <button v-on:click="getPokemonSpec" class="col-12 btn btn-primary my-0 rounded-0 rounded-bottom">Detail</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
//import vue lib
import { defineProps, defineEmits, reactive, Ref, ref, provide } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"

//import interfaces
import IPokemon from "../interfaces/Pokemon"

//data vue lib
const store = useStore()
const route = useRoute()

//props
const props = defineProps({
	pokemon: {
		type:Object as ()=> IPokemon,
		required: true
	}
})

//data var
const teamName:Ref<string> = ref<string>(String(route.params.teamName))
const currentEditPage:Ref<number> = ref<number>(Number(route.params.page))
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

const getPokemonSpec = () => {
	store.dispatch("getPokemonSpecs", [`pokemon/${props.pokemon.id}`, props.pokemon.img])
}
</script>

<style lang="scss" scoped>
@import "../assets/css/components/PokemonCard.scss"
</style>

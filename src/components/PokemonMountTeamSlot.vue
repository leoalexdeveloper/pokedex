<template>
  <div class="pokemon-empty-slot-container card p-1 m-2 rounded bg-light d-flex d-column justify-content-center align-items-center">
    <h1 class="col-12 fs-6 bg-primary p-2 rounded-top text-light lead text-center">
      {{pokemon.name}}</h1>
    <object class="pokemon-empty-slot-img" :data="pokemon.img.mainImg" type="image/png">
      <img class="pokemon-empty-slot-img" :src="pokemon.img.altImg" alt="">
    </object>
    <button v-on:click="removeFromTeam(pokemon.id)" class="btn btn-danger">Remove</button>
    <div class="fs-6 lead text-dark"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import { useStore } from "vuex"
import IPokemon from "../interfaces/Pokemon"

const store = useStore()

const props = defineProps({
	pokemon: {
		type:Object as ()=> IPokemon,
		required:true
	}
})

const removeFromTeam = (pokemonId:number) => {
	const currentEditTeam = store.state.pokemons.currentEditTeam
	const selectedPokemon = currentEditTeam.find((pokemon:IPokemon) => pokemon.id === pokemonId)
	store.commit("removePokemonFromCurrentEditTeam", selectedPokemon)
}
</script>

<style lang="scss" scoped>
@import "../assets/css/components/PokemonMountTeamEmptySlot.scss";
</style>

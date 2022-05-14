<template>
  <div class="p-1 card rounded bg-light d-flex flex-column justify-content-center align-items-center m-2">
    <h1 class="col-12 fs-6 bg-primary p-1 rounded-top text-light lead text-center text-wrap">
      {{pokemon.name}}</h1>
    <object class="pokemon-empty-slot-img" :data="pokemon.img.mainImg" type="image/png">
      <img class="pokemon-empty-slot-img" :src="pokemon.img.altImg" alt="">
    </object>
    <button v-on:click="removeFromTeam()"
            v-if:="hasRemoveButton"
            class="btn-sm p-0 px-2 rounded btn-danger">
            Remove
    </button>
    <div class="fs-6 lead text-dark"></div>
  </div>
</template>

<script lang="ts" setup>
//imports vue lib
import { defineProps } from "vue"
import { useStore } from "vuex"

//imports interfaces
import IPokemon from "../interfaces/Pokemon"

//data lib var
const store = useStore()

//props
const props = defineProps({
	pokemon: {
		type:Object as ()=> IPokemon,
		required:true
	},
	hasRemoveButton:{
		type: Boolean,
		required:false,
		default: false
	}
})

//methods
const removeFromTeam = () => {
	const currentEditTeam = store.state.pokemons.currentEditTeam
	const selectedPokemon = currentEditTeam.find((pokemon:IPokemon) => pokemon.id === props.pokemon.id)
	store.commit("removePokemonFromCurrentEditTeam", selectedPokemon)
}
</script>

<style lang="scss" scoped>
@import "../assets/css/components/PokemonMountTeamEmptySlot.scss";
</style>

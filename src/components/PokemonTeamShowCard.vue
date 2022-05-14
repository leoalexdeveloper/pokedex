<template>
  <div class="d-flex flex-column justify-content-center align-itens-center m-2">
    <object class="pokemon-show-img img-thumbnail" :data="pokemon.img.mainImg" type="image/png">
        <img class="pokemon-show-img" :src="pokemon.img.altImg" :alt="pokemon.name">
    </object>
    <h1 class="col-12 rounded-bottom p-2 text-light fs-6 lead text-center bg-primary">{{pokemon.name}}</h1>
  </div>
</template>

<script lang="ts" setup>
//imports vue lib
import { defineProps } from "vue"

//imports intrerfaces
import IPokemon from "../interfaces/Pokemon"

//props
defineProps({
	pokemon:{
		type: Object as () =>IPokemon,
		required:true
	}
})
</script>

<style lang="scss" scoped>
@import "../assets/css/components/PokemonTeamShowCard.scss"
</style>

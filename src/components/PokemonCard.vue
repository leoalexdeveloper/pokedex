<template>
  <div>
    <div class="pick-pokemon-card card border p-2 rounded m-2">
      <h1 class="fs-5 text-center rounded-top bg-primary p-2 text-light lead">{{pokemon.name}}</h1>
      <object class="pick-pokemon-card-img img-fluid border p-2" :data="pokemon.img.mainImg" type="image/png">
          <img class="pick-pokemon-card-img img-fluid p-2" :src="pokemon.img.altImg" alt="" title="">
      </object>
      <div class="col-12 d-flex flex-column">
        <button class="btn btn-primary my-2">Choose</button>
        <button class="btn btn-primary my-1">Detail</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps} from "vue"
import IPokemon from "../interfaces/Pokemon"

defineProps({
	pokemon: {
		type:Object as ()=> IPokemon,
		required: true
	}
})
</script>

<style lang="sass" scoped>
@import "../assets/css/components/PokemonCard.scss"
</style>

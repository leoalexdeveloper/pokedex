<template>
  <div class="d-flex flex-row flex-wrap">
    <PokemonCard v-for:="pokemon in store.state.pokemons.pokemonList.results" :pokemon="pokemon"/>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex"

import PokemonCard from "./PokemonCard.vue"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = useStore()

</script>

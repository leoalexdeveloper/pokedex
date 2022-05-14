<template>
  <div class="container-fluid d-flex flex-row flex-wrap justify-content-center">
    <PokemonCard v-if:="!route.params.selectedPokeId"
                 v-for:="pokemon in pokemonList" :pokemon="pokemon"/>
    <router-view v-if:="route.params.selectedPokeId"
                  :key="route.params.selectedPokeId">
    </router-view>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
//imports vue lib
import { reactive, Ref, ref } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"

import IPokemon from "../interfaces/Pokemon"

//imports components
import PokemonCard from "./PokemonCard.vue"

//data vue lib
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = useStore()
const route = useRoute()

//data var
const pokemonList:IPokemon[] = reactive(store.state.pokemons.pokemonList.results)
</script>

<style lang="scss" scoped>
@import "../assets/css/components/PokemonPickBoard.scss"
</style>

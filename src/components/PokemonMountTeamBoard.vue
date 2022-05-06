<template>
  <div class="d-flex flex-column">
    <div class="pokemon-mount-team-board p-2 border rounded d-flex flex-row justify-content-between align-items-center position-sticky top-0 start-0">
      <div v-for:="(i, index) in maxPokemonsOnTeam">
        <div v-if:="currentEditTeam[index]">
          <PokemonMountTeamSlot :pokemon="currentEditTeam[index]"/>
        </div>
        <div v-else:="">
          <PokemonMountTeamEmptySlot />
        </div>
      </div>
    </div>
    <PokemonMountTeamOptionsBarVue />
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
import PokemonMountTeamEmptySlot from "./PokemonMountTeamEmptySlot.vue"
import PokemonMountTeamSlot from "./PokemonMountTeamSlot.vue"
import PokemonMountTeamOptionsBarVue from "./PokemonMountTeamOptionsBar.vue"

import { Ref, ref, reactive } from "vue"
import { useStore } from "vuex"

const store = useStore()
const maxPokemonsOnTeam:Ref<number> = ref<number>(store.state.pokemons.maxPokemonsOnTeam)
const currentEditTeam = reactive(store.state.pokemons.currentEditTeam)

</script>

<style lang="scss">
@import "../assets/css/components/PokemonMountTeamBoard.scss"
</style>

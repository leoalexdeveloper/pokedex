<template>
  <div class="col-12 border p-4">
    <div v-for:="team in savedTeams">
      {{team}}
      <PokemonTeamShowComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
import { reactive } from "vue"
import { useStore } from "vuex"

import PokemonTeamShowComponent from "../components/PokemonTeamShowComponent.vue"
import ITeam from "../interfaces/Team"
import IPokemon from "../interfaces/Pokemon"

const store = useStore()

const savedTeams:ITeam<IPokemon>[] = reactive(store.state.pokemons.savedTeams)

</script>

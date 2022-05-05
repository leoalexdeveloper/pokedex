<template>
  <div class="">
    <div class="card p-4 border"></div>
  {{store.state.pokemons.currentEditTeam}}
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex"

const store = useStore()


</script>

<style lang="scss" scoped>
@import "../assets/css/components/PokemonMountTeamEmptySlot.scss";
</style>

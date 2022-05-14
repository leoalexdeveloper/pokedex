<template>
  <div class="col-sm-12 col-md-12 col-lg-12 bg-light pokemon-mount-team-board d-flex flex-column position-sticky top-0 start-0 rounded overflow-hidden">
    <div class="p-2 rounded d-flex flex-row flex-wrap justify-content-center align-items-center">
      <div v-for:="(i, index) in maxPokemonsOnTeam">
        <div v-if:="currentEditTeam[index]">
          <PokemonMountTeamSlot :pokemon="currentEditTeam[index]" :hasRemoveButton="true"/>
        </div>
        <div v-else:="">
          <PokemonMountTeamEmptySlot />
        </div>
      </div>
    </div>
    <PokemonMountTeamOptionsBarVue />
    <button v-on:click.stop.prevent="minimizeMountBar"
            class="minimize-bar cursor col-12 bg-primary p-4 d-flex position-sticky bottom-0 start-0 d-flex justify-content-center align-items-center outline-0 border-0">
      <p class="rotateLeft90 h1 text-light p-0 position-absolute">
        &#x27B2;
      </p>
    </button>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
//imports vue lib
import { Ref, ref, reactive } from "vue"
import { useStore } from "vuex"

//imports components
import PokemonMountTeamEmptySlot from "./PokemonMountTeamEmptySlot.vue"
import PokemonMountTeamSlot from "./PokemonMountTeamSlot.vue"
import PokemonMountTeamOptionsBarVue from "./PokemonMountTeamOptionsBar.vue"

//data lib var
const store = useStore()

//data var
const maxPokemonsOnTeam:Ref<number> = ref<number>(store.state.pokemons.maxPokemonsOnTeam)
const currentEditTeam = reactive(store.state.pokemons.currentEditTeam)

//methods
const minimizeMountBar = () => {

	const parentContainer = document.querySelector(".pokemon-mount-team-board") as HTMLDivElement
	const currentElement = document.querySelector(".minimize-bar") as HTMLButtonElement

	const currentElementHeight = currentElement.getBoundingClientRect().height
	const parentContainerHeight = parentContainer.getBoundingClientRect().height

	if(currentElementHeight === parentContainerHeight){
		parentContainer.style.setProperty("height", "auto")
		currentElement.classList.toggle("rotate180Deg")
		return
	}
	parentContainer.style.setProperty("height", currentElementHeight + "px")
	currentElement.classList.toggle("rotate180Deg")
}
</script>

<style lang="scss">
@import "../assets/css/components/PokemonMountTeamBoard.scss";
@import "../assets/css/utils.scss";
</style>

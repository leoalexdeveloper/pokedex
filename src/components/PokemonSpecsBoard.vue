<template>
  <div class="col-12 p-5 position-relative rounded d-flex flex-wrap flex-column flex-sm-column flex-md-row justify-content-evenly">
    <button class="p-0 rounded fs-4 px-2 position-absolute top-0 end-0 m-2"
            v-on:click="router.back">Back&#x2718;</button>
    <div class="col-12 col-sm-12 col-md-5 d-flex fex-wralp flex-column">
      <div class="text-center mb-2 border d-flex align-items-center justify-content-center p-2 rounded"
      :style="{background:pokemonColor}">
        <object class="col-8 img-fluid m-auto" :data="pokemonSpecs[pokemonId]?.img.mainImg" type="image/png">
          <img class="col-8 img-fluid m-auto" :src="pokemonSpecs[pokemonId]?.img.altImg" alt="">
        </object>
      </div>
      <div class="p-2 mb-2 border rounded">
        <h1 class="col-12 rounded bg-primary text-light p-2 border">{{"Abilities"}}</h1>
        <div v-for:="ability in pokemonSpecs[pokemonId]?.abilities"
            class="mx-4">
          <div class="text-dark">{{Utils.capsFirstLetter(ability.ability.name)}}</div>
        </div>
      </div>

      <div class="p-2 mb-2 border ">
        <h1 class="col-12 rounded bg-primary text-light p-2 border">{{"Species"}}</h1>
        <div class="mx-4 text-dark">{{Utils.capsFirstLetter(String(pokemonSpecs[pokemonId]?.species.name))}}</div>
      </div>

      <div class="p-2 mb-2 border ">
        <h1 class="col-12 rounded bg-primary text-light p-2 border">{{"Types"}}</h1>
        <div class="mx-4 text-dark" v-for:="types in (pokemonSpecs[pokemonId]?.types)">
          <div>{{Utils.capsFirstLetter(types.type.name)}}</div>
        </div>
      </div>
    </div>
     <div class="col-12 col-sm-12 col-md-5 p-2 border">
          <h1 class="col-12 rounded bg-primary text-light p-2">{{"Stats"}}</h1>
          <div class="border p-2 m-2" v-for:="stat in (pokemonSpecs[pokemonId]?.stats)">
            <div class="text-dark">{{Utils.capsFirstLetter(stat.stat.name)}}</div>
            <div class="border bg-primary text-light rounded text-end p-0 lead fs-6"
                  :style="{width:stat.base_stat * 0.15 + `rem`}">{{stat.base_stat}}pt</div>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
//imports vue lib
import { reactive, Ref, ref, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"

//imports interfaces
import IPokemonAttrs from "../interfaces/PokemonAttrs"

//imports classes
import Utils from "../utils/Utils"

//imports configs
import { colours } from "../config/pokemonColors"

//data vue lib
const route = reactive(useRoute())
const store = reactive(useStore())
const router = reactive(useRouter())

//data var
const pokemonSpecs:IPokemonAttrs[] = reactive(store.state.pokemons.pokemonSpecs)
const pokemonId:Ref<number> = ref<number>(Number(route.params.selectedPokeId))

//methods
const pokemonColor = computed(()=>{
  type key = keyof typeof colours
  const colorIndex = <key>pokemonSpecs[pokemonId.value]?.types[0].type.name
  return colours[colorIndex]
})
</script>

<style lang="scss" scoped>
@import "../assets/css/components/PokemonSpecsBoard.scss";
</style>

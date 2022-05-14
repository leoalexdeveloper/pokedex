<template>
    <div class="col-12">
      <PokemonMountTeamBoard/>
      <router-view class="p-sm-0 p-lg-5  poistion-sticky top-0 start-0"
                    v-slot="{Component}">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="route.params.page"></component>
        </transition>
      </router-view>
      <PaginationComp v-on:paginate="callPaginatedPokemons"/>
    </div>
</template>

<script lang="ts" setup>
//imports vue libs
import { useStore } from "vuex"
import { useRoute } from "vue-router"

//imports components
import PaginationComp from "../components/PaginationComp.vue"
import PokemonMountTeamBoard from "../components/PokemonMountTeamBoard.vue"

//imports types
import type { TPaginationResult } from "../types/PaginationComp"

//data vue libs
const store = useStore()
const route = useRoute()

//methods
const callPaginatedPokemons  = ([offset, limit]:TPaginationResult)=> {
	store.dispatch("getPokemonListFromApi", `pokemon?limit=${limit}&offset=${offset}`)
	store.commit("setCurrentEditPage", Number(route.params.page))
}

</script>

<style lang="css" scoped>
.slide-enter-active,
.slide-leave-active{
  transition:opacity 1s, transform 1s, filter 1.5s;
}

.slide-enter-from{
  opacity:0;
  transform:translateX(-50%);
  filter: blur(0px)
}
.slide-leave-to{
opacity:0;
transform:translateX(100%);
filter: blur(20px);
}
</style>

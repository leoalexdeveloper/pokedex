<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">

              <div v-if:="firstConditional()">
                <router-link :to="{name:`CreateTeam`, params:{teamName:teamName, page:first()}}">
                  <li class="page-item"><a class="page-link" href="#">First</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">First</a></li>
              </div>

              <div v-if:="back10Conditional()">
                <router-link :to="{name:`CreateTeam`, params:{teamName:teamName, page:back10()}}">
                  <li class="page-item"><a class="page-link" href="#">Back10</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">Back10</a></li>
              </div>

              <div v-if:="previousConditional()">
                <router-link :to="{name:`CreateTeam`, params:{teamName:teamName, page:previous()}}">
                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">Previous</a></li>
              </div>

              <div v-if:="nextConditional()">
                <router-link :to="{name:`CreateTeam`, params:{teamName:teamName, page:next()}}">
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">Next</a></li>
              </div>

              <div v-if:="forward10Conditional()">
                <router-link :to="{name:`CreateTeam`, params:{teamName:teamName, page:forward10()}}">
                  <li class="page-item"><a class="page-link" href="#">Forward10</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">Forward10</a></li>
              </div>

              <div v-if:="lastConditional()">
                <router-link :to="{name:`CreateTeam`, params:{teamName:teamName, page:last()}}">
                  <li class="page-item"><a class="page-link" href="#">Last</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">Last</a></li>
              </div>

            </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ref, ref, onUpdated, onMounted, defineEmits, watch } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import type { TPaginationResult } from "../types/PaginationComp"
//emit
const emit = defineEmits(["paginate"], )

//data
const store = useStore()
const route = useRoute()

const teamName:Ref<string>          = ref(String(route.params.teamName))
const maxPokemonFromApi:Ref<number> = ref(store.state.pokemons.pokemonList.count)
const maxPokemonPerPage:Ref<number> = ref(store.state.pokemons.maxPokemonPerPage)
const totalPageNumber:Ref<number>   = ref(Math.round(maxPokemonFromApi.value / maxPokemonPerPage.value))
const selectedPage:Ref<number> = ref(0)

//watch
watch(selectedPage, ()=>{
	paginate()
})

//methods
const first     = () => 1
const back10    = () => Number(route.params.page) - 10
const previous  = () => Number(route.params.page) - 1
const next      = () => Number(route.params.page) + 1
const forward10 = () => Number(route.params.page) + 10
const last      = () => totalPageNumber.value

const paginate = () => {
	const offset:number            = (Number(route.params.page) * store.state.pokemons.maxPokemonPerPage) - store.state.pokemons.maxPokemonPerPage
	const limit:number             = store.state.pokemons.maxPokemonPerPage
	const result:TPaginationResult = [offset, limit]
	emit("paginate", result)
}

//conditional methods
const firstConditional     = () => Number(route.params.page) > 1
const back10Conditional    = () => Number(route.params.page) >= 10
const previousConditional  = () => Number(route.params.page) > 1
const nextConditional      = () => Number(route.params.page) < totalPageNumber.value
const forward10Conditional = () => Number(route.params.page) < totalPageNumber.value - 10
const lastConditional      = () => Number(route.params.page) < totalPageNumber.value

//hooks
onMounted(()=>{
	selectedPage.value = Number(route.params.page)
})

onUpdated(()=>{
	store.commit("setCurrentEditPage", Number(route.params.page))
})

</script>

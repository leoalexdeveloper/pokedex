<template>
    <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center position-sticky bottom-0 start-0">
        <nav aria-label="Page navigation example">
            <ul class="pagination">

              <div v-if:="!widthSize">
                <div v-if:="firstConditional()">
                  <router-link :to="{name:`ShowPickPokemons`, params:{teamName:teamName, page:first()}}">
                    <li class="page-item"><a class="page-link" href="#">First</a></li>
                  </router-link>
                </div>
                <div v-else:="">
                  <li disabled class="page-item"><a class="page-link" href="#">First</a></li>
                </div>
              </div>

              <div v-if:="back10Conditional()">
                <router-link :to="{name:`ShowPickPokemons`, params:{teamName:teamName, page:back10()}}">
                  <li class="page-item"><a class="page-link" href="#">Back10</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">Back10</a></li>
              </div>

              <div v-if:="previousConditional()">
                <router-link :to="{name:`ShowPickPokemons`, params:{teamName:teamName, page:previous()}}">
                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">Previous</a></li>
              </div>

              <li class="page-item"><a class="page-link" href="#">{{route.params.page}}</a></li>

              <div v-if:="nextConditional()">
                <router-link :to="{name:`ShowPickPokemons`, params:{teamName:teamName, page:next()}}">
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">Next</a></li>
              </div>

              <div v-if:="forward10Conditional()">
                <router-link :to="{name:`ShowPickPokemons`, params:{teamName:teamName, page:forward10()}}">
                  <li class="page-item"><a class="page-link" href="#">Forward10</a></li>
                </router-link>
              </div>
              <div v-else:="">
                <li disabled class="page-item"><a class="page-link" href="#">Forward10</a></li>
              </div>

              <div v-if:="!widthSize">
                <div v-if:="lastConditional()">
                  <router-link :to="{name:`ShowPickPokemons`, params:{teamName:teamName, page:last()}}">
                    <li class="page-item"><a class="page-link" href="#">Last</a></li>
                  </router-link>
                </div>
                <div v-else:="">
                  <li disabled class="page-item"><a class="page-link" href="#">Last</a></li>
                </div>
              </div>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */

//imports libs
import { Ref, ref, onUpdated, onMounted, defineEmits } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"

//imports types
import type { TPaginationResult } from "../types/PaginationComp"

//emits
const emit = defineEmits(["paginate"])

//data libs
const store = useStore()
const route = useRoute()

//data var
const teamName:Ref<string>          = ref(store.state.pokemons.currentTeamObject.name)
const maxPokemonFromApi:Ref<number> = ref(store.state.pokemons.pokemonList.count)
const maxPokemonPerPage:Ref<number> = ref(store.state.pokemons.maxPokemonPerPage)
const totalPageNumber:Ref<number>   = ref(Math.round(maxPokemonFromApi.value / maxPokemonPerPage.value))
const widthSize:Ref<boolean> = ref<boolean>(false)

//methods
const first     = () => 1
const back10    = () => Number(route.params.page) - 10
const previous  = () => Number(route.params.page) - 1
const next      = () => Number(route.params.page) + 1
const forward10 = () => Number(route.params.page) + 10
const last      = () => totalPageNumber.value

const paginate = () => {
	const offset:number            = (store.state.pokemons.currentEditPage * store.state.pokemons.maxPokemonPerPage) - store.state.pokemons.maxPokemonPerPage
	const limit:number             = store.state.pokemons.maxPokemonPerPage
	const result:TPaginationResult = [offset, limit]
	emit("paginate", result)
}

const updateVuexCurrentEditPage = () => {
	store.commit("setCurrentEditPage", Number(route.params.page))
}

//conditional methods
const firstConditional     = () => Number(route.params.page) > 1
const back10Conditional    = () => Number(route.params.page) > 10
const previousConditional  = () => Number(route.params.page) > 1
const nextConditional      = () => Number(route.params.page) < totalPageNumber.value
const forward10Conditional = () => Number(route.params.page) < totalPageNumber.value - 10
const lastConditional      = () => Number(route.params.page) < totalPageNumber.value

const returnWidth = () => {
	window.onresize = () => {
		widthSizeReturn()
	}
}

const widthSizeReturn = () => {
	if(window.innerWidth < 576){
		widthSize.value = true
	}else{
		widthSize.value = false
	}
}

//hooks
onMounted(()=>{
	returnWidth()
	widthSizeReturn()
})

onUpdated(()=>{
	updateVuexCurrentEditPage()
	widthSizeReturn()
	paginate()
})
</script>

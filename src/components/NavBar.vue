<template>
    <div>
        <nav class="nav-bar col-12 d-flex justify-content-end align-items-center">
            <ul class="col-3 d-flex justify-content-evenly border-3 list-unstyled mt-2">
                <NavBarBtnDefaultRoute path="/" title="Home" :classes="btnDefaultClases"/>
                <NavBarBtnDefaultRoute v-if:="!hasCurrentTeamObject" path="/create" title="Create Team" :classes="btnDefaultClases"/>
                <NavBarBtntRouteParams v-if:="hasCurrentTeamObject" :path="editTeamBtnPath" title="Edit Team" :classes="btnDefaultClases"/>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
//imports
import { reactive, computed } from "vue"
import { useStore } from "vuex"
import NavBarBtnDefaultRoute from "./NavBarBtnDefaultRoute.vue"
import NavBarBtntRouteParams from "./NavBarBtnRouteParams.vue"

import type { TPath } from "../types/NavBarBtnRouteParams"

//data
const store = useStore()
const currentTeamObject = reactive(store.state.pokemons.currentTeamObject)
const createTeamBtnPath = "/create"
const editTeamBtnPath:TPath = {name:"CreateTeam", params:{teamName:store.state.pokemons.currentTeamObject.name, page:store.state.pokemons.currentEditPage}}
const btnDefaultClases = "btn btn-primary"

const hasCurrentTeamObject = computed(()=>{
	return (Object.keys(currentTeamObject).length > 0) ? true : false
})
</script>

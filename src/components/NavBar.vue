<template>
    <div>
        <nav class="nav-bar col-12 d-flex justify-content-end align-items-center">
            <ul class="col-3 d-flex justify-content-evenly border-3 list-unstyled mt-2">
                <NavBarBtnDefaultRoute path="/" title="Home" :classes="btnDefaultClases"/>
                <NavBarBtnDefaultRoute v-if:="!hasCurrentTeamObject" path="/create" title="Create Team" :classes="btnDefaultClases"/>
                <NavBarBtntRouteParams v-if:="hasCurrentTeamObject" />
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

//data
const store = useStore()

const currentTeamObject = reactive(store.state.pokemons.currentTeamObject)
const btnDefaultClases = "btn btn-primary"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hasCurrentTeamObject = computed(()=>{
	return (Object.keys(currentTeamObject).length > 0) ? true : false
})
</script>

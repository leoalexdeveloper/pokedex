<template>
    <div>
        <nav class="nav-bar col-12 d-flex justify-content-end align-items-center">
            <ul class="col-3 d-flex justify-content-evenly border-3 list-unstyled mt-2">
                <NavBarBtnDefaultRoute path="/" title="Home" :classes="btnDefaultClases"/>
                <NavBarBtntRouteParams :path="editTeamBtnPath" title="Edit Team" :classes="btnDefaultClases"/>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
//imports
import NavBarBtnDefaultRoute from "./NavBarBtnDefaultRoute.vue"
import NavBarBtntRouteParams from "./NavBarBtnRouteParams.vue"

import type { TPath } from "../types/NavBarBtnRouteParams"

//data
const editTeamBtnPath:TPath = {name:"CreateTeam", params:{teamName:"nomeDoTime"}}
const btnDefaultClases = "btn btn-primary"
</script>
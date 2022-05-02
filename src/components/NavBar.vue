<template>
    <div>
        <nav class="nav-bar">
            <NavBarBtnDefaultRoute path="/" title="Home"/>
            <NavBarBtntRouteParams :path="editTeamBtnPath" title="Edit Team"/>
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

</script>
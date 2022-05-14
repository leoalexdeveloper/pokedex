<template>
    <div>
        <router-link :class="classes"
                      :to="{name:`ShowPickPokemons`, params:{teamName:store.state.pokemons.currentTeamObject?.name, page:store.state.pokemons.currentEditPage}}">
                      {{title}}</router-link>
    </div>
</template>

<script lang="ts" setup>
//imports vue lib
import { useStore } from "vuex"

//data vue lib
const store = useStore()

//data var
const classes = "btn btn-primary"
const title = "Edit Team"
</script>

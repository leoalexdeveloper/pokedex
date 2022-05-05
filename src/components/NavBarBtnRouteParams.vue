<template>
    <div>
        <router-link :class="classes"
                      :to="{name:`ShowPickPokemons`, params:{teamName:store.state.pokemons.currentTeamObject.name, page:store.state.pokemons.currentEditPage}}">
                      {{title}}</router-link>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex"

const store = useStore()

const classes = "btn btn-primary"
const title = "Edit Team"
</script>

<template>
    <div>
        <form class="form col-4 d-flex flex-column border p-4 m-auto mt-5">
            <label class="form-label fs-4 lead" for="">Team Name</label>
            <input v-model="teamName" class="form-control" type="text" placeholder="Insert your team name">
            <router-link :to="{name:'ShowPickPokemons', params:{teamName:teamName, page:1}}">
                <input v-on:click="submit" class="btn btn-primary mt-3" type="submit">
            </router-link>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { Ref, ref, defineEmits } from "vue"

const emit = defineEmits(["submitFormData"])

const teamName:Ref<string> = ref("")


const submit = () => {
	emit("submitFormData", teamName)
}
</script>

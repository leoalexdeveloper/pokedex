<template>
    <div class="w-75 m-auto">
        <form class="form col-sm-12 col-md-8 col-lg-6 d-flex flex-column border p-4 m-auto mt-5">
            <label class="form-label fs-4 lead" for="">Team Name</label>
            <input v-model="teamName" class="form-control" type="text" :placeholder="placeholder">
            <router-link :to="{name:'ShowPickPokemons', params:{teamName:teamName, page:1}}">
                <input v-on:click="submit" class="col-12 btn btn-primary mt-3" type="submit" value="Send">
            </router-link>
            <input v-if:="cancel" v-on:click.prevent.stop="cancelSubmit" class="btn btn-danger mt-3" type="submit" value="Cancel">
        </form>
    </div>
</template>

<script lang="ts" setup>
//import vue lib
import { Ref, ref, defineEmits, onMounted, defineProps } from "vue"

//emits
const emit = defineEmits(["submitFormData", "cancelSubmit"])

//props
defineProps({
	placeholder:{
		type:String,
		required:true
	},
	cancel:{
		type:Boolean,
		required:true,
		default:false
	}
})

//data var
const teamName:Ref<string> = ref("")

//methods
const submit = () => {
	emit("submitFormData", teamName.value)
}

const cancelSubmit = () => emit("cancelSubmit", true)

//hooks
onMounted(()=>{
	const inputText = document.querySelector("[type=text]") as HTMLInputElement
	inputText.focus()
})
</script>

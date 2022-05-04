<template>
    <div>
        <router-link :class="classes" :to="path">{{title}}</router-link>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
	path:{
		type:Object,
		required:true
	},
	title:{
		type:String,
		required:true
	},
	classes:{
		type:String,
		required:true
	}
})
</script>
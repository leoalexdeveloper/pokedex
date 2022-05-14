<template>
    <div>
        <router-link :class="classes" :to="path">{{title}}</router-link>
    </div>
</template>

<script lang="ts" setup>
//imports lib vue
import { defineProps } from "vue"

//props
defineProps({
	path:{
		type:String,
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

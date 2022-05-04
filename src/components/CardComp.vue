<template>
  <div>
    <div class="card">
      <h1>{{pokemon.name}}</h1>
      <object data="pokemon.img.mainImg" type="">
        <img src="pokemon.img.altImg" alt="">
      </object>
      <div class="">
        <button class="btn btn-primary">Choose</button>
        <button class="btn btn-primary">Detail</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import { useStore } from "vuex"

const store = useStore()

defineProps({
	pokemon: {
		type:Object,
		required: true
	}
})

</script>

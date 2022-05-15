<template>
  <div class="border p-5 text-dark lead d-flex flex-column">
    <p class="fs-1 lead bg-secondary text-light p-5 rounded">Page Not Found</p>
    <button class="col-2 btn btn-primary" v-on:click="router.back()">Back</button>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router"

const router = useRouter()


</script>

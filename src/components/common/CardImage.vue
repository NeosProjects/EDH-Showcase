<template>
  <div class="card p-0! min-h-0! flex-grow!">
    <img :src="img" class="h-55 rounded-t-3xl! object-cover"/>
    <div class="p-5">
      <div class="text-xl font-bold mb-2">{{ title }}</div>
      <div v-html="text" class="h-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    text: String
  }
}
</script>
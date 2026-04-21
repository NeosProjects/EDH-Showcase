<template>
  <section
    class="w-full h-fit rounded-4xl p-4 flex flex-col gap-8 relative"
    :class="left ? 'md:flex-row-reverse' :'md:flex-row'"
  >
    <div class="flex flex-col gap-4 md:w-5/10">
      <span class="text-4xl font-bold ">{{ title }}</span>
      <div v-html="text"></div>
    </div>
    <img class="md:w-5/10 bg-center rounded-4xl" :src="img"></img>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    img: String,
    left: Boolean
  }
}
</script>
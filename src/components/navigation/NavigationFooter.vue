<template>
  <nav
    class="w-full bg-primary-500 py-16"
  >
    <!-- Barre desktop -->
    <div class="flex justify-center md:justify-between items-center h-15 md:px-64">
      <RouterLink to="/" class="text-black font-bold bg-white p-4 rounded-4xl text-3xl mb-5xl select-none cursor-pointer flex items-center gap-3">
        <img class="h-[55px]" src="/public/imgs/logo-crop-EDH.jpg"></img>
        <span class="truncate">Collège De L'Hêtre</span>
      </RouterLink>
      <ul class=" hidden md:flex justify-center items-center pl-15">
        <a class="text-white cursor-pointer hover:underline" @click="scrollToTop">Revenir en haut de page</a>
        <Icon class="text-white ml-2" icon="chevron-up"></Icon>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>
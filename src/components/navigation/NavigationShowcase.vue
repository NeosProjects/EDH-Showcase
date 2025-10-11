<template>
  <nav
    class="w-full bg-white py-2 sticky top-0 z-50"
    :class="{ 'shadow-md': isScrolled }"
  >
    <!-- Barre desktop -->
    <div class="hidden md:flex justify-between items-center h-15 bg-white px-64">
      <RouterLink to="/" class="text-black font-bold text-4xl mb-5xl select-none cursor-pointer flex items-center gap-3">
        <img class="h-[55px]" src="/public/imgs/logo-crop-EDH.jpg"></img>
        <span class="truncate">Ecole De L'Hêtre</span>
      </RouterLink>
      <ul class="flex justify-first items-center pl-15">
        <li v-for="menu in menus" :key="menu.title" @mouseenter="menu.active = true" @mouseleave="menu.active = false" class="relative">
          <RouterLink :to="menu.link" class="text-secondary hover:text-primary pr-8 text-[18px] font-medium flex">
            <span class="truncate">{{ menu.title }}</span>
            <template v-if="menu.sections.length">
              <Icon v-if="!menu.active" icon="fa-chevron-down" class="ml-2 text-xs self-center"></Icon>
              <Icon v-else icon="fa-chevron-up" class="ml-2 text-xs self-center"></Icon>
            </template>
          </RouterLink>
          <div class="absolute left-0 top-full bg-white shadow-lg rounded-xl w-fit z-10" v-if="menu.active && menu.sections.length">
            <ul class="p-8 flex gap-8">
              <li v-for="section in menu.sections" :key="section.title" class="mb-2 min-w-[300px]">
                <div v-if="section.title" class="text-sm mb-1 text-gray-500">{{ section.title.toUpperCase() }}</div>
                <ul>
                  <li v-for="link in section.links" :key="link.name">
                    <RouterLink :to="link.link" @click="closeAllMenus()" class="h-24 text-secondary hover:text-primary flex items-center gap-2 px-4 py-4 rounded-xl hover:bg-tertiary-light transition-colors">
                      <Icon :icon="link.icon" class="text-xl text-gray-800 mr-4"></Icon>
                      <div>
                        <div class="whitespace-nowrap">{{ link.name }}</div>
                        <div v-if="link.underText" class="text-sm text-gray-600">{{ link.underText }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <!-- Barre mobile -->
    <div class="md:hidden flex justify-between items-center px-4 h-15 bg-white">
      <RouterLink to="/" class="text-black font-bold text-2xl select-none cursor-pointer flex items-center gap-2">
        <img class="h-[40px]" src="/public/imgs/logo-crop-EDH.jpg" />
        <span class="truncate">Ecole De L'Hêtre</span>
      </RouterLink>
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-secondary text-3xl focus:outline-none">
        <Icon icon="fa-bars" />
      </button>
    </div>
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40"
        @click="isMobileMenuOpen = false"
      ></div>
    </transition>
    <transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-lg z-50 flex flex-col gap-2 pt-8"
      >
        <button @click="isMobileMenuOpen = false" class="absolute top-4 right-4 text-secondary text-2xl">
          <Icon icon="fa-times" />
        </button>
        <ul class="flex flex-col gap-2 px-6">
          <li v-for="menu in menus" :key="menu.title">
            <RouterLink
              :to="menu.link || menu.sections[0]?.links[0]?.link"
              class="text-secondary hover:text-primary py-3 text-lg font-medium flex items-center gap-2"
              @click="isMobileMenuOpen = false"
            >
              <span>{{ menu.title }}</span>
            </RouterLink>
            <div v-if="menu.sections.length">
              <ul>
                <li v-for="section in menu.sections" :key="section.title">
                  <ul>
                    <li v-for="link in section.links" :key="link.name">
                      <RouterLink
                        :to="link.link"
                        class="flex items-center gap-2 px-2 py-2 rounded hover:bg-tertiary-light transition-colors"
                        @click="isMobileMenuOpen = false"
                      >
                        <Icon :icon="link.icon" class="text-xl text-gray-800" />
                        <span>{{ link.name }}</span>
                      </RouterLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </nav>

  <transition name="fade">
    <div
      v-if="isAnyMenuOpen"
      class="fixed inset-0 bg-black opacity-40 z-40"
    ></div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      menus: [
        { title: 'Pédagogie', link: '/pedagogie', active: false, sections: []},
        { title: 'Nos moyens', link: '', active: false, sections: [
          {title: '', links: [
            { name: 'L\'infrastructure', underText:'Au coeur de Toulouse', link: '/infrastructure', icon: 'fa-solid fa-building' },
            { name: 'L\'équipe pédagogique', underText:'Des profs en or', link: '/equipe', icon: 'fa-solid fa-users' },
            { name: 'Ouverture', underText:'Sur l\'international', link: '/ouverture-sur-le-monde', icon: 'fa-solid fa-earth' }
          ]}
        ]},
        { title: 'Informations', link: '', active: false, sections: [
          {title: '', links: [
            { name: 'Tarifs/Inscriptions', underText:'Pour tous les âges', link: '/inscriptions-tarifs', icon: 'fa-solid fa-pen-to-square' },
            { name: 'Nous trouver', underText:'A côté de Saint-Michel', link: '/nous-trouver', icon: 'fa-solid fa-map' },
            { name: 'Nous contacter', underText:'Toujours dispo', link: '/contact', icon: 'fa-solid fa-phone' }
          ]}
        ]},
      ]
    };
  },
  computed: {
    isAnyMenuOpen() {
      return this.menus.some(m => m.active && m.sections.length);
    }
  },
  methods: {
    handleScroll() {
      // Active la shadow si on a scrollé plus de 10px
      this.isScrolled = window.scrollY > 5;
    },
    closeAllMenus(){
      this.menus.forEach(menu => menu.active = false);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<template>
  <!-- Inscriptions -->
  <section
    class="card bg-primary-100"
  >
    <div class="flex flex-col gap-4 w-9/10">
      <span class="text-5xl font-bold ">Classes ouvertes !</span>
      <span class="text-xl">
        Cette année, l'école s'agrandit une fois de plus ! Désormais, les classes de 6ᵉ, 5ᵉ, 4ᵉ et 3ᵉ sont ouvertes aux inscriptions.
      </span>
      <button class="mt-4" @click="$router.push('/inscriptions-tarifs')">Inscrire mon enfant</button>
    </div>
  </section>
</template>
<template>
  <div class="px-4 md:px-64 pb-8">
    <!-- Où sommes-nous ? -->
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col gap-8 bg-white shadow-md mb-8">
      <span class="text-5xl font-bold mb-4">Où sommes-nous ?</span>
      <span class="text-xl mb-4">
        Notre collège est situé à 18 rue Saint Denis 31400 Toulouse, dans un environnement calme et accessible, proche des transports en commun.
      </span>
      <div class="w-full h-[600px] rounded-4xl overflow-hidden shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.9958501585675!2d1.4469630126037456!3d43.58580277098497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc7c6d50096b%3A0x4bf23331f36e4e04!2s18%20Rue%20Saint-Denis%2C%2031400%20Toulouse!5e0!3m2!1sfr!2sfr!4v1760185474146!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style="border:0;"
          :allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

    <!-- Inscriptions -->
    <section
      class="w-full h-fit bg-blue-50 rounded-4xl p-8 flex gap-8 relative shadow-md mb-8"
    >
      <div class="flex flex-col gap-4 w-9/10">
        <span class="text-5xl font-bold ">Classes ouvertes !</span>
        <span class="text-xl">
          Cette année, l'école s'agrandit une fois de plus ! Désormais, les classes de 6ᵉ, 5ᵉ et 4ᵉ sont ouvertes aux inscriptions.
        </span>
        <button class="bg-primary hover:!bg-primary-dark cursor-pointer text-white !w-fit py-4 px-8 font-bold text-xl rounded-4xl mt-4" @click="$router.push('/')">Inscrire mon enfant</button>
      </div>
    </section>
  </div>
</template>
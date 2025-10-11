<template>
  <div class="px-4 md:px-64 pb-8">
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col gap-8 bg-white shadow-md">
      <span class="text-5xl font-bold mb-4">Contact</span>
      <div class="flex flex-col gap-4 text-xl">
        <div class="flex items-center gap-4">
          <Icon icon="envelope" class="text-primary text-2xl" />
          <span>Email : <a href="mailto:contact@ecoledelhetre.fr" class="text-blue-600 hover:underline">ecoledelhetre@gmail.com</a></span>
        </div>
        <div class="flex items-center gap-4">
          <Icon icon="phone" class="text-primary text-2xl" />
          <span>Téléphone : <a href="tel:+33512345678" class="text-blue-600 hover:underline">06 13 30 45 14</a></span>
        </div>
        <div class="flex items-center gap-4">
          <Icon :icon="['fab', 'instagram']" class="text-primary text-2xl" />
          <span>Instagram : <a href="https://instagram.com/ecole_collegedelhetre" target="_blank" class="text-blue-600 hover:underline">@ecole_collegedelhetre</a></span>
        </div>
        <div class="flex items-center gap-4">
          <Icon :icon="['fab', 'facebook']" class="text-primary text-2xl" />
          <span>Facebook : <a href="https://www.facebook.com/ecolecollegedelhetre" target="_blank" class="text-blue-600 hover:underline">facebook.com/ecolecollegedelhetre</a></span>
        </div>
        <div class="flex items-center gap-4">
          <Icon :icon="['fab', 'youtube']" class="text-primary text-2xl" />
          <span>YouTube : <a href="https://youtube.com/@ecoledelhetre" target="_blank" class="text-blue-600 hover:underline">@ecoledelhetre</a></span>
        </div>
      </div>
    </section>

    <!-- Photo de l'équipe -->
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col items-center gap-4 bg-blue-50 shadow-md mt-8">
    <span class="text-5xl font-bold mb-2">On vous accueille avec le sourire</span>
      <img src="/public/imgs/class.jpg" alt="Photo de l'équipe" class="w-full rounded-4xl shadow object-cover" />
    </section>
  </div>
</template>
<template>
  <div class="px-4 md:px-64 pb-8">
    <!-- Le bâtiment -->
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col md:flex-row gap-8 relative shadow-md mb-8">
      <div class="flex flex-col gap-4 md:w-5/10">
        <span class="text-5xl font-bold">Le bâtiment</span>
        <span class="text-xl">
          Notre collège est installé dans un bâtiment lumineux et sécurisé au coeur de Toulouse, pensé pour le bien-être et l’épanouissement des élèves.<br/><br/>
          Les espaces sont conçus pour favoriser la convivialité, la concentration et l’ouverture sur l’extérieur, avec des zones dédiées à la détente, au travail et à la créativité.<br/><br/>
          L’établissement bénéficie d’un accès facile, d’espaces verts et d’équipements adaptés à tous les besoins scolaires et extrascolaires.
        </span>
      </div>
      <img class="md:w-5/10 bg-center rounded-4xl object-cover" src="/public/imgs/class.jpg" alt="Photo du bâtiment" />
    </section>

    <!-- Les différentes salles -->
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col gap-8 bg-white shadow-md">
      <span class="text-5xl font-bold mb-4">Les différentes salles</span>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="flex flex-col items-center bg-blue-50 rounded-4xl p-6 shadow transition hover:scale-105">
          <img src="/public/imgs/class.jpg" class="w-full h-40 object-cover rounded-2xl mb-4" alt="Salle de 6ème" />
          <span class="font-bold text-xl mb-2">Salle de 6<sup>e</sup></span>
          <span class="text-lg text-center">Une salle dédiée aux élèves de 6<sup>e</sup>, équipée pour favoriser l’apprentissage et la cohésion de groupe.</span>
        </div>
        <div class="flex flex-col items-center bg-blue-50 rounded-4xl p-6 shadow transition hover:scale-105">
          <img src="/public/imgs/class.jpg" class="w-full h-40 object-cover rounded-2xl mb-4" alt="Salle de 5ème" />
          <span class="font-bold text-xl mb-2">Salle de 5<sup>e</sup></span>
          <span class="text-lg text-center">Un espace adapté aux besoins des élèves de 5<sup>e</sup>, propice au travail et à l’entraide.</span>
        </div>
        <div class="flex flex-col items-center bg-blue-50 rounded-4xl p-6 shadow transition hover:scale-105">
          <img src="/public/imgs/class.jpg" class="w-full h-40 object-cover rounded-2xl mb-4" alt="Salle de 4ème" />
          <span class="font-bold text-xl mb-2">Salle de 4<sup>e</sup></span>
          <span class="text-lg text-center">Une salle moderne pour les élèves de 4<sup>e</sup>, favorisant l’autonomie et la réussite scolaire.</span>
        </div>
        <div class="flex flex-col items-center bg-blue-50 rounded-4xl p-6 shadow transition hover:scale-105">
          <img src="/public/imgs/class.jpg" class="w-full h-40 object-cover rounded-2xl mb-4" alt="Salle de repos" />
          <span class="font-bold text-xl mb-2">Salle de repos</span>
          <span class="text-lg text-center">Un espace calme dédié à la détente, à la lecture et au bien-être des élèves.</span>
        </div>
        <div class="flex flex-col items-center bg-blue-50 rounded-4xl p-6 shadow transition hover:scale-105">
          <img src="/public/imgs/class.jpg" class="w-full h-40 object-cover rounded-2xl mb-4" alt="Salle à manger" />
          <span class="font-bold text-xl mb-2">Salle à manger</span>
          <span class="text-lg text-center">Un lieu convivial pour partager les repas dans une ambiance chaleureuse.</span>
        </div>
        <div class="flex flex-col items-center bg-blue-50 rounded-4xl p-6 shadow transition hover:scale-105">
          <img src="/public/imgs/class.jpg" class="w-full h-40 object-cover rounded-2xl mb-4" alt="Salle de théâtre" />
          <span class="font-bold text-xl mb-2">Salle de théâtre</span>
          <span class="text-lg text-center">Un espace dédié à l’expression artistique, aux spectacles et aux ateliers de théâtre.</span>
        </div>
      </div>
    </section>
  </div>
</template>
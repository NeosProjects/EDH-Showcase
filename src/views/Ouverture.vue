<template>
  <div class="px-4 md:px-64">
    <!-- Ouverture sur le monde -->
    <section class="card mb-8">
      <span class="text-4xl font-bold mb-4">L'ouverture sur le monde</span>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="card items-center bg-primary-100">
          <Icon icon="fa-earth" class="text-primary text-4xl mb-2"/>
          <span class="font-bold text-xl mb-2">Langues vivantes</span>
          <span class="text-lg text-center">
            L'anglais et l'espagnol sont enseignés dès le collège. Nos enseignants, parfaitement bilingues, collaborent avec leurs homologues étrangers pour enrichir les pratiques pédagogiques.
          </span>
        </div>
        <div class="card items-center bg-primary-100">
          <Icon icon="fa-school" class="text-primary text-4xl mb-2"/>
          <span class="font-bold text-xl mb-2">Jumelage international</span>
          <span class="text-lg text-center">
            Nos classes sont jumelées avec des établissements américains, espagnols et estoniens, dont l'école Emili Kool. Ces partenariats favorisent les échanges et l'ouverture culturelle.
          </span>
        </div>
        <div class="card items-center bg-primary-100">
          <Icon icon="fa-trophy" class="text-primary text-4xl mb-2"/>
          <span class="font-bold text-xl mb-2">Défis et échanges</span>
          <span class="text-lg text-center">
            Nous organisons régulièrement des défis sportifs et culturels avec nos écoles partenaires, encourageant la coopération, le partage et l'esprit d'équipe au-delà des frontières.
          </span>
        </div>
        <div class="card items-center bg-primary-100">
          <Icon icon="fa-lightbulb" class="text-primary text-4xl mb-2"/>
          <span class="font-bold text-xl mb-2">Méthodes pédagogiques</span>
          <span class="text-lg text-center">
            Notre pédagogie s'inspire des approches américaines (accueil, intégration, gestion des émotions, « take a break ») et estoniennes. L'Estonie, reconnue pour ses excellents résultats aux tests PISA, démontre qu'un environnement inclusif et innovant favorise la réussite de tous les élèves.
          </span>
        </div>
      </div>
    </section>

    <OpenClasses />    
  </div>
</template>

<script setup>
import OpenClasses from '@/components/common/OpenClasses.vue';
</script>
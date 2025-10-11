<template>
  <div class="px-4 md:px-64 pb-8 flex flex-col gap-8">
    <!-- Présentation du collège -->
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col gap-6 bg-white shadow-md">
      <span class="text-5xl font-bold mb-2">Tarifs & Inscriptions</span>
      <div class="flex flex-col gap-4 text-xl">
        <span>
          Le collège de l'Hêtre est un établissement hors contrat « Éducation Nationale », ce qui nous offre une liberté pédagogique et organisationnelle.<br/><br/>
          Notre indépendance financière nous permet d’appliquer nos propres méthodes et projets éducatifs, grâce aux inscriptions, aux frais d’adhésion et aux dons.
        </span>
        <div class="flex flex-row gap-8 mt-4">
          <div class="flex flex-col items-center bg-blue-50 rounded-4xl p-6 shadow w-full">
            <Icon icon="chalkboard-teacher" class="text-primary text-4xl mb-2"/>
            <span class="font-bold text-xl mb-2">Liberté pédagogique</span>
            <span class="text-lg text-center">Un enseignement adapté, innovant et centré sur l’élève.</span>
          </div>
          <div class="flex flex-col items-center bg-blue-50 rounded-4xl p-6 shadow w-full">
            <Icon icon="hand-holding-usd" class="text-primary text-4xl mb-2"/>
            <span class="font-bold text-xl mb-2">Indépendance financière</span>
            <span class="text-lg text-center">Le collège s’autofinance grâce aux inscriptions et aux dons.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tarifs -->
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col gap-6 bg-blue-50 shadow-md">
      <span class="text-4xl font-bold mb-2">Frais d’inscription scolaire 2025/2026</span>
      <div class="flex flex-col gap-4 text-xl">
        <div class="flex flex-row gap-8">
          <div class="flex flex-col items-center bg-white rounded-4xl p-6 shadow w-full">
            <Icon icon="user-graduate" class="text-primary text-4xl mb-2"/>
            <span class="font-bold text-xl mb-2">Tarif annuel</span>
            <span class="text-lg text-center">5 650,00€ par enfant (élémentaire ou collège)</span>
          </div>
          <div class="flex flex-col items-center bg-white rounded-4xl p-6 shadow w-full">
            <Icon icon="file-invoice-dollar" class="text-primary text-4xl mb-2"/>
            <span class="font-bold text-xl mb-2">Frais de dossier</span>
            <span class="text-lg text-center">500,00€ (non inclus dans le tarif annuel)</span>
          </div>
        </div>
        <span>
          Le règlement peut s’effectuer en paiement comptant ou par échelonnement jusqu’à 10 mensualités.
        </span>
      </div>
    </section>

    <!-- Modalités d'inscription -->
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col gap-6 bg-white shadow-md">
      <span class="text-4xl font-bold mb-2">Comment inscrire votre enfant ?</span>
      <div class="flex flex-col gap-4 text-xl">
        <span>
          Vous souhaitez inscrire votre enfant ? Rien de plus simple, contactez-nous.
        </span>
        <span>
          Après votre prise de contact, nous organiserons un entretien avec votre enfant pour mieux vous connaître et répondre à toutes vos questions.
        </span>
        <div class="flex justify-center mt-4">
          <router-link to="/contact" class="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-4xl text-xl transition">
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
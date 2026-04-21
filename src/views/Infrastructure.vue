<template>
  <div class="px-4 md:px-64 flex flex-col gap-8">
    <section class="card">
      <TextImage 
        title="Le bâtiment"
        text="Notre collège est installé dans un bâtiment lumineux et sécurisé au coeur de Toulouse, pensé pour le bien-être et l'épanouissement des élèves.<br/><br/>
          Les espaces sont conçus pour favoriser la convivialité, la concentration et l'ouverture sur l'extérieur, avec des zones dédiées à la détente, au travail et à la créativité.<br/><br/>
          L'établissement bénéficie d'un accès facile, d'espaces verts et d'équipements adaptés à tous les besoins scolaires et extrascolaires."
        img="/imgs/class.jpg"
      />
    </section>

    <!-- Les différentes salles -->
    <section class="">
      <div class="text-4xl font-bold mb-4">Les différentes salles</div>
        <div class="grid md:grid-cols-3 gap-8">
          <CardImage
            img="/imgs/class.jpg"
            title="Salle de 6<sup>e</sup>"
            :text="`Une salle dédiée aux élèves de 6<sup>e</sup>, équipée pour favoriser l'apprentissage et la cohésion de groupe.`"
          />
          <CardImage
            img="/imgs/class.jpg"
            title="Salle de 5<sup>e</sup>"
            :text="`Un espace adapté aux besoins des élèves de 5<sup>e</sup>, propice au travail et à l'entraide.`"
          />
          <CardImage
            img="/imgs/class.jpg"
            title="Salle de 4<sup>e</sup>"
            :text="`Une salle moderne pour les élèves de 4<sup>e</sup>, favorisant l'autonomie et la réussite scolaire.`"
          />
          <CardImage
            img="/imgs/class.jpg"
            title="Salle de repos"
            :text="`Un espace calme dédié à la détente, à la lecture et au bien-être des élèves.`"
          />
          <CardImage
            img="/imgs/class.jpg"
            title="Salle à manger"
            :text="`Un lieu convivial pour partager les repas dans une ambiance chaleureuse.`"
          />
          <CardImage
            img="/imgs/class.jpg"
            title="Salle de théâtre"
            :text="`Un espace dédié à l'expression artistique, aux spectacles et aux ateliers de théâtre.`"
          />
        </div>
    </section>
  </div>
</template>

<script setup>
import TextImage from '@/components/common/TextImage.vue';
import CardImage from '@/components/common/CardImage.vue';
</script>
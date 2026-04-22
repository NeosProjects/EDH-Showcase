<template>
  <div class="px-4 md:px-64">
    <section class="card mb-8 flex flex-col gap-4">
      <span class="text-4xl font-bold mb-4">Notre équipe</span>
      <div
        v-for="(member, index) in teamMembers"
        :key="member.name"
        :class="[
          'card md:flex-row! items-center p-0! bg-primary-100',
          index % 2 === 0 ? 'md:flex-row!' : 'md:flex-row-reverse!',
        ]"
      >
        <div class="w-64 md:pb-8 pt-8 flex flex-col gap-2 items-center justify-center">
          <img :src="member.img" class="w-36 h-36 rounded-full object-cover" />
          <div class="flex flex-col items-center">
            <span class="font-bold text-xl">{{ member.name }}</span>
            <span class="text-gray-700 text-center">{{ member.profession }}</span>
          </div>
        </div>
        <div class="w-full h-full p-4 text-xl" v-html="member.description">
        </div>
      </div>
    </section>

    <OpenClasses />
  </div>
</template>

<script>
import OpenClasses from '@/components/common/OpenClasses.vue';

export default {
  components: {
    OpenClasses
  },
  data() {
    return {
      teamMembers: [
        {
          name: 'Marie',
          profession: 'Fondatrice',
          img: '/imgs/logo-EDH.jpg',
          description:
            "Description",
        },
        {
          name: 'Genaro',
          profession: 'Directeur Adjoint',
          img: '/imgs/team/',
          description:
            "Description",
        },
        {
          name: 'Georgina',
          profession: 'Prof. Anglais',
          img: '/imgs/team/english.png',
          description:
            "Anglophone de naissance et passionnée par l'enseignement, j'apporte mon expérience internationale à l'apprentissage de l'anglais.<br> Titulaire d'un Master en environnement et enrichie par de nombreux voyages, je transmets l'anglais comme une ouverture sur le monde.<br> Ma pédagogie repose sur la confiance, la bienveillance et le plaisir d'apprendre.<br> À travers le jeu et l'échange, chaque élève progresse à son rythme et gagne en confiance."
        },
        {
          name: 'Carine',
          profession: 'Prof. Zumba',
          img: '/imgs/team/zumba.png',
          description:
            "Carine, prof de Zumba depuis 10 ans. Le cours a pour mission de décompresser, s'amuser mais aussi apprendre des chorégraphies endiablées dans une ambiance de bienveillance et de plaisir partagé. Les musiques choisies sont actuelles et variées. Les chorégraphies sont basées sur des pas simples et répétitifs afin de monter en cardio et transpirer!! Le mot d'ordre reste le fun et le lâcher prise 💃🏻💃🏻💃🏻",
        },
        {
          name: 'Geneviève',
          profession: 'Prof. Art',
          img: '/imgs/team/art.png',
          description:
            "Geneviève, Peintre et Professeur d'arts plastiques. Mon ambition est de faire grandir la confiance des enfants et la mise en pratique des Arts quelque soit le support. Je m'efforce également de développer leur culture générale en leur proposant de travailler sur différents peintres et techniques connus.",
        },
        {
          name: 'Mara',
          profession: 'Prof. Histoire',
          img: '/imgs/team/',
          description:
            "Description",
        },
        {
          name: 'Néo',
          profession: 'Prof. Programmation',
          img: '/imgs/team/programmation.jpg',
          description:
            "Description",
        },
        {
          name: 'Marie-Céline',
          profession: 'Prof. Chant',
          img: '/imgs/team/sing.png',
          description:
            "Passionnée par la voix et la transmission. J'accompagne les enfants dans un cadre bienveillant et joyeux. Timide de nature j'ai découvert que le chant est un précieux allié pour s'exprimer, prendre confiance en soi et dépasser ses peurs. Mon désir est d'aider les enfants à croire en eux, à oser prendre leur place et à révéler leurs talents. Grâce à la musique et à l'apprentissage de chants je propose un espace où chacun peut s'épanouir et laisser briller sa petite lumière.",
        },
        {
          name: 'Nathalie',
          profession: 'Prof. Math/Physique-Chimie',
          img: '/imgs/team/',
          description:
            "Enseignante depuis plus de 15 ans en sciences, diplômée en relation d'aide et sophrologie, j'adapte ma pédagogie à chaque enfant. Les petits effectifs de l'école permettent un lien privilégié et une attention personnalisée. Ma philosophie: chaque enfant a du talent! J'aide chacun à le découvrir, à progresser à son rythme, et à prendre confiance. L'école est pour moi un lieu d'apprentissage, mais aussi de découverte de soi et des autres, dans un cadre sécurisant et bienveillant.",
        },
        {
          name: 'Theo',
          profession: 'Prof. Musique',
          img: '/imgs/team/music.png',
          description:
            "Musicien diplômé du conservatoire et d'un master en médiation de la musique, j'accompagne les enfants dans leur aventure musicale avec passion. J'adapte mon enseignement à chaque personnalité et rythme, en privilégiant une approche vivante et participative. La théorie devient accessible, la créativité est encouragée, et chacun trouve un espace pour s'exprimer. Mon enseignement s'inscrit dans la philosophie du collège alternatif, tout en gardant la possibilité de rejoindre un cursus classique. Pour moi, la musique est avant tout un langage et une ouverture sur le monde.",
        },
        {
          name: 'Prénom',
          profession: 'Profession',
          img: '/imgs/team/',
          description:
            "Description",
        },
      ],
    }
  },
}
</script>

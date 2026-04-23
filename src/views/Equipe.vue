<template>
  <div class="px-4 md:px-64">
    <section class="card mb-8 flex flex-col gap-4">
      <span class="text-4xl font-bold mb-4">Notre équipe</span>
      <div
        v-for="(member, index) in teamMembers"
        :key="member.name"
        :class="[
          'card items-center p-0! bg-primary-100',
          index == 0 ? 'md:flex-col!' : (index % 2 === 1 ? 'md:flex-row!' : 'md:flex-row-reverse!'),
        ]"
      >
        <div class="w-64 md:pb-8 pt-8 flex flex-col gap-2 items-center justify-center">
          <img :src="member.img" class="w-36 h-36 rounded-full object-cover" />
          <div class="flex flex-col items-center">
            <span class="font-bold text-xl">{{ member.name }}</span>
            <span class="text-gray-700 text-center">{{ member.profession }}</span>
          </div>
        </div>
        <div class="w-full h-full p-4 text-xl">
          <div
            :class="{ 
              'h-42 text-ellipsis overflow-y-hidden': !expandedMembers[member.name] && isDescriptionLong(member.description),
              'h-fit': expandedMembers[member.name] || !isDescriptionLong(member.description)
            }"
            v-html="member.description"
          ></div>
          <span
            v-if="isDescriptionLong(member.description)"
            @click="toggleExpanded(member.name)"
            class="text-primary-500 hover:underline mt-4 font-semibold cursor-pointer"
          >
            {{ expandedMembers[member.name] ? 'Voir moins' : 'Voir plus' }}
          </span>
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
      expandedMembers: {}, // Objet pour tracker les états expansés
      teamMembers: [
        {
          name: 'Marie & Julien',
          profession: 'Fondateurs',
          img: '/imgs/team/fondateur.png',
          description:
            "Il y a des moments dans la vie où tout bascule.<br><br>Pour nous, ce moment a été le jour où l'on nous a annoncé que notre fille, Clotilde, ne pourrait pas suivre un système classique. Qu'il n'y avait “qu'une seule voie”. Qu'elle irait “droit vers l'échec scolaire”. Que son handicap était trop lourd pour entrer dans les cases.<br>Ces mots-là, nous ne les oublierons jamais. Ils auraient pu nous briser. Ils ont, au contraire, réveillé quelque chose en nous.<br>Nous avons refusé de la voir définie par un diagnostic.<br>Refusé de croire que son avenir était tracé.<br>Refusé qu'on mette une limite à sa lumière.<br><br>Ce que certains appelaient une faiblesse… nous est apparu comme une force, un appel, un point de départ.<br><br>Car ce sont nos épreuves qui nous transforment le plus profondément.<br><br>Elles nous traversent, nous sculptent, nous réinventent.<br><br>Alors, nous avons fait un choix.<br>Celui de quitter un système qui ne correspondait pas à notre enfant.<br>Et sans le savoir, nous sommes entrés dans l'une des plus grandes transformations de notre vie.<br><br>Nous avons créé un chemin là où il n'existait pas.<br>Nous avons fondé le Collège de l'Hêtre : un espace, un refuge.<br>Un lieu où chaque enfant est accueilli tel qu'il est.<br>Un lieu où la différence n'est pas un obstacle… mais une richesse.<br>Comme le disait Viktor Frankl : « Donne un sens à ta vie. » Transformer une épreuve en moteur, un chaos en lumière… c'est là que le cœur grandit le plus.<br>Aujourd'hui, ce que nous avons construit, nous l'avons pensé pour accueillir des collégiens tels qu'ils sont, et leur montrer qu'il n'existe pas un seul chemin pour grandir, apprendre et réussir.<br>Si vous cherchez un lieu où votre enfant sera compris, respecté et encouragé à révéler son potentiel, alors peut-être que ce chemin commence ici.",
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
            "Anglophone de naissance et professeure d'anglais passionnée, je mets mon expérience internationale et mon parcours universitaire au service de l'apprentissage des élèves. Titulaire d'un Master en environnement et enrichie par de nombreux voyages, j'ai à cœur de transmettre l'anglais comme une véritable ouverture sur le monde.Ma pédagogie repose sur la confiance, la bienveillance et le plaisir d'apprendre.<br><br>J'accompagne les élèves dans le développement de toutes les compétences essentielles : compréhension orale, compréhension écrite, expression écrite et expression orale. À travers le jeu, l'échange et des méthodes interactives, chacun progresse à son rythme, gagne en aisance et développe sa confiance.<br><br>Mon objectif est de faire de l'anglais une langue vivante, accessible et motivante pour tous."
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
            "Peintre et Professeur d'arts plastiques. Mon ambition est de faire grandir la confiance des enfants par la mise en pratique des Arts quelque soit le support. Je m'efforce également de développer leur culture générale en leur proposant de travailler sur différents peintres et techniques connus. Ces créations sont accompagnées de beaucoup d'échanges où les enfants parfois se confient ou expriment oralement des sentiments ou des pensées … mon cours se veut convivial et ouvert à la créativité. Je l'ai pensé comme une bulle d'oxygène où on s'exprime sans jugement et dans la bienveillance totale. Chacun a un talent…. À nous de découvrir où on peut s'exprimer …",
        },
        {
          name: 'Mara',
          profession: 'Prof. Histoire',
          img: '/imgs/team/history.png',
          description:
            "Formée à l'archéologie et à la médiation culturelle, j'enseigne l'histoire et la littérature, avec une idée simple : rendre le savoir concret et accessible à tous les élèves. Dans mes cours, les élèves ne restent pas en position d'écoute. Ils enquêtent, expérimentent, lisent et mettent en scène. Le petit effectif permet également des mises en situation plus poussées, comme des jeux de rôle autour de moments clés de l'histoire. Mon objectif est de partir du vécu des élèves : de leurs expériences ou de leurs centres d'intérêt pour élaborer des activités qui les aident à comprendre et à progresser à leur propre rythme.",
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
          img: '/imgs/team/math.png',
          description:
            "Enseignante depuis plus de 15 ans dans les matières scientifiques, diplomée en relation d'aide et sophrologie, j ai à coeur d'adapter ma pédagogie à chaque enfant. Les petits effectifs des classes de l'école de l'Hêtre me permettent réellement d'établir un lien privilégié avec chacun. Ma philosophie : vos enfants ont du talent! Au travers des apprentissages scolaires, je m'applique à leur faire prendre conscience de ces talents et de les aider à les développer. Là où parfois ils ont des difficultés, je vais adapter ma pédagogie pour qu'ils puissent accéder à une meilleure compréhension et pas à pas progresser. Je propose également des cours particuliers au sein de l'école en complément pour accompagner aux devoirs et renforcer les notions apprises en classe. Je consois l'école comme un lieu d'apprentissage certe, mais surtout comme un lieu de décourverte de soi, des autres et du monde qui nous entoure. Un cadre sécurisant, respectueux et bienveillant pour chacun est le socle de ma pédagogie.",
        },
        {
          name: 'Theo',
          profession: 'Prof. Musique',
          img: '/imgs/team/music.png',
          description:
            "Fort d'un parcours musical riche et éclectique, diplômé du conservatoire et d'un master en médiation de la musique, j'accompagne les enfants dans leur aventure musicale depuis deux ans avec passion et engagement. Parce que chaque enfant est unique, je tente de m'adapter au mieux à chaque personnalité, chaque sensibilité et rythme d'apprentissage. Loin du cours magistral traditionnel, je propose une approche vivante et participative où l'élève devient acteur de son propre parcours. La culture & la théorie musicale sont rendues accessibles et vivantes, des ateliers créatifs viennent libérer l'imagination et développer l'écoute et un espace d'expression où argumenter, questionner et créer a toute sa place. Ainsi, mon enseignement s'inscrit pleinement dans la philosophie du collège alternatif tout en maintenant une passerelle avec les cursus traditionnels, afin que chaque élève puisse, s'il le souhaite, rejoindre ou réintégrer une formation classique à tout moment. La musique n'est pas seulement un savoir-faire -- c'est un langage, une façon d'être au monde.",
        },
        {
          name: 'Samira',
          profession: 'Prof. Histoire/Geo./Litterature',
          img: '/imgs/team/litterature.png',
          description:
            "Je suis Samira et j'ai le plaisir d'accompagner vos enfants à l'école de l'Hêtre. Ingénieure pédagogique de formation, initialement formée en psychopédagogie ( méthode ABA, art thérapie...) j'exerce depuis plus de dix ans avec une conviction forte : l'élève est au cœur de l'enseignement... Comment me direz-vous ? En prenant le temps... Le temps de discuter avec lui, de ses passions, de ses difficultés, de ses envies... Rentrer dans son univers, c'est le moment le plus enchanteur et passionnant de mon métier, le découvrir et parvenir à se faire confiance mutuellement. J'interviens également au sein de l'école en accompagnement individuel afin de renforcer l'estime de soi des élèves et consolider leurs apprentissages. Je souligne aussi que la progression de l'élève est possible grâce à la coopération des parents en nous partageant des informations capitales pour mieux comprendre l'enfant dans toute sa globalité. Donc merci à vous de nous faire confiance.<br><br>Mon mot d'ordre : Ludique. Ateliers vivants : L'enfant est acteur de ses apprentissages, je m'appuie sur ses passions Humour, anecdotes : pauses détentes avec mes élèves pour casser le rythme trop long du cours... (Basée sur la méthode Pairing)"
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
  methods: {
    isDescriptionLong(description) {
      // Supprimer les balises HTML et compter les mots
      const plainText = description.replace(/<[^>]*>/g, '');
      const wordCount = plainText.trim().split(/\s+/).length;
      return wordCount > 100; // Seuil : plus de 100 mots
    },
    toggleExpanded(memberName) {
      this.expandedMembers[memberName] = !this.expandedMembers[memberName];
      console.log(this.expandedMembers);
    }
  }
}
</script>

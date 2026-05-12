<template>
  <div class="px-4 md:px-64 flex flex-col gap-8">
    <!-- Hero -->
    <section
      class="w-full h-[450px] bg-[url('/imgs/college/group.png')] bg-cover bg-center rounded-4xl p-8 flex flex-col items-left justify-center gap-2 relative"
    >
      <div class="absolute inset-0 bg-black opacity-50 rounded-4xl"></div>
      <div class="relative z-10 flex flex-col gap-2">
        <span class="text-5xl font-bold text-white">Votre enfant mérite le meilleur</span>
        <span class="text-xl text-white">Rejoignez l'aventure !</span>
      </div>
    </section>

    <!-- Qui sommes-nous ? -->
    <TextImage 
      title="Qui sommes-nous ?"
      text="Le collège de l'Hêtre est un établissement privé associatif accueillant les collégiens jusqu'à la fin du collège.
          <br/><br/>
          Créé par des enseignants, des professionnels et des parents engagés, il place la bienveillance, la confiance en soi et l'ouverture sur le monde au cœur de son projet pédagogique.
          <br/><br/>
          Ce projet, fondé sur des expériences pédagogiques et personnelles, bénéficie du soutien de chefs d'entreprise et de donateurs apportant expertise et financements."

      img="/imgs/college/prof.png"
    />
    
    <!-- Philosophie -->
    <TextImage 
      title="Notre philosophie"
      text="
Au Collège de l'Hêtre, nous sommes convaincus qu'un enfant ne peut pleinement apprendre que lorsqu'il se sent reconnu, valorisé et libre d'exprimer sa singularité.<br><br>

Depuis bientôt quatre ans, notre structure accompagne des élèves aux profils variés : enfants atypiques, profils HPI, troubles dys, TSA, hypersensibilité… Mais aussi des enfants simplement en quête d'un cadre plus humain, plus respectueux de leur rythme et de leur manière d'apprendre.<br><br>

Au fil des années, une évidence s'est imposée à nous :<br>
<strong>l'ouverture artistique transforme profondément les enfants.</strong><br><br>

Les neurosciences démontrent aujourd'hui que les activités artistiques stimulent les connexions neuronales, renforcent la mémoire, l'attention, la confiance en soi et les capacités d'apprentissage.<br>
La danse développe la coordination, la concentration et l'intégration corporelle.<br>
Le chant et la musique favorisent le langage, l'écoute et la régulation émotionnelle.<br>
Le théâtre aide l'enfant à prendre sa place, à s'exprimer et à développer son intelligence relationnelle.<br>
Les projets créatifs comme le podcast, le court-métrage, le codage ou l'écriture permettent aux élèves de donner du sens à leurs idées, d'oser créer et de découvrir leurs talents.<br><br>

Chez certains enfants dys ou atypiques, ces approches deviennent même de véritables leviers d'apprentissage et d'épanouissement.<br><br>

C'est pourquoi l'art n'est pas une activité “en plus” dans notre établissement :<br>
<strong>c'est notre ADN.</strong><br><br>

Notre ambition est de proposer un collège où les enfants peuvent expérimenter, créer, explorer et développer leur potentiel dans un environnement bienveillant et stimulant.<br><br>

Nous suivons le programme de l'Éducation nationale avec sérieux et exigence.<br>
Mais nous croyons profondément qu'il ne suffit pas de transmettre un programme : il faut transmettre d'une manière adaptée à chaque collégien.<br><br>

Nos enseignants s'attachent donc à respecter le rythme de l'élève, à valoriser ses réussites et à l'aider à retrouver confiance dans ses capacités.<br><br>

Le Collège de l'Hêtre est un lieu pensé pour des adolescents curieux, créatifs, sensibles et passionnés.<br><br>
Pour ceux qui aiment chanter, danser, jouer, imaginer, coder, écrire, filmer, inventer.<br><br>

Parce que nous croyons qu'un adolescent qui crée est un adolescent qui grandit.<br><br>

<strong>Créer pour apprendre.<br><br>

S'exprimer pour grandir.<br>
Être soi pour réussir.</strong>"

      img=""
      :left="true"
    />

    <!-- Inscriptions -->
    <OpenClasses />

    <!-- Objectifs -->
    <section
      class="w-full h-fit rounded-4xl flex flex-col gap-6 py-4"
    >
      <span class="text-4xl font-bold h-fit">Nos objectifs</span>
      <div class="flex flex-col md:flex-row gap-8">
        <CardImage 
          img="/imgs/college/prof2.png"
          title="D'apprentissage"
          text="<span>Faciliter l'apprentissage en recherchant la forme la plus adaptée pour chaque enfant.</span>
            <span>Donner le goût des études et des apprentissages en y apportant du sens.</span>"
        />

        <CardImage 
          img="/imgs/college/group3.png"
          title="Réussite personnelle"
          text="<span>Favoriser la confiance en soi.</span>
            <span>Susciter la motivation.</span>
            <span>Développer l'autonomie.</span>
            <span>Favoriser l'épanouissement.</span>"
        />

        <CardImage 
          img="/imgs/college/game.png"
          title="Citoyens"
          text="<span>Encourager et contribuer à l'ouverture sur le monde tout en gardant sa place.</span>
            <span>Former des citoyens du monde qui font preuve d'intégrité morale et de responsabilité sociale.</span>"
        />
      </div>
    </section>

    <!-- Pour tous les profils -->
    <section
      class="card bg-primary-100"
    >
      <div class="w-full overflow-x-auto md:hidden">
        <div class="w-full grid grid-cols-1 gap-x-8 gap-y-8">
          <div>
            <div class="pr-8 text-4xl font-bold text-left mb-6">Vos inquiétudes ?</div>
            <div class="flex flex-col gap-4">
              <div class="py-4 text-xl">"Mon adolescent a des <b>difficultés d'apprentissage</b>"</div>
              <div class="py-4 text-xl">"Mon adolescent est <b>précoce</b>"</div>
              <div class="py-4 text-xl">"Mon adolescent est atteint de <b>troubles</b> dys"</div>
            </div>
          </div>
          <div>
            <div class="text-4xl font-bold text-left mb-6">Notre responsabilité</div>
            <div class="flex flex-col gap-4">
              <div class="py-4 text-xl">Il pourra grandir dans un environnement <b>bienveillant</b> et stimulant.</div>
              <div class="py-4 text-xl">Notre pédagogie adaptée vise à permettre son <b>épanouissement</b> et à lui donner de meilleures chances de réussite.</div>
              <div class="py-4 text-xl">Nous proposons un <b>enseignement</b> adapté pour remédier aux difficultés d'apprentissage liées aux troubles cognitifs.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full overflow-x-auto hidden md:block">
        <table class="min-w-full bg-transparent">
          <thead>
            <tr>
              <th class="pr-8 text-4xl font-bold text-left mb-6 align-top w-1/2">
                Vos inquiétudes ?
              </th>
              <th class="text-4xl font-bold text-left mb-6 align-top w-1/2">
                Notre responsabilité
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-4 text-xl align-top">"Mon adolescent a des <b>difficultés d'apprentissage</b>"</td>
              <td class="py-4 text-xl align-top">Il pourra grandir dans un environnement <b>bienveillant</b> et stimulant.</td>
            </tr>
            <tr>
              <td class="py-4 text-xl align-top">"Mon adolescent est <b>précoce</b>"</td>
              <td class="py-4 text-xl align-top">Notre pédagogie adaptée vise à permettre son <b>épanouissement</b> et à lui donner de meilleures chances de réussite.</td>
            </tr>
            <tr>
              <td class="py-4 text-xl align-top">"Mon adolescent est atteint de <b>troubles</b> dys"</td>
              <td class="py-4 text-xl align-top">Nous proposons un <b>enseignement</b> adapté pour remédier aux difficultés d'apprentissage liées aux troubles cognitifs.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <OpenClasses />

    <section class="card text-xl space-y-4">
      <span class="text-4xl font-bold mb-4">Qu'en pensent les parents ?</span>
      <div v-for="(temoignage, index) in temoignages" :key="index">
        <span class="font-bold">{{ temoignage.name }}</span>
        <span>&nbsp;-&nbsp;</span>
        <span>
          <div
            :class="{ 
              'h-42 text-ellipsis overflow-y-hidden': !expandedTestimonials[index] && isDescriptionLong(temoignage.text),
              'h-fit': expandedTestimonials[index] || !isDescriptionLong(temoignage.text)
            }"
            class="pl-4"
            v-html="temoignage.text"
          ></div>
          <span
            v-if="isDescriptionLong(temoignage.text)"
            @click="toggleExpanded(index)"
            class="text-primary-500 hover:underline ml-4 font-semibold cursor-pointer"
          >
            {{ expandedTestimonials[index] ? 'Voir moins' : 'Voir plus' }}
          </span>
        </span>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OpenClasses from '@/components/common/OpenClasses.vue';
import TextImage from '@/components/common/TextImage.vue';
import CardImage from '@/components/common/CardImage.vue';

const expandedTestimonials = ref({});

const temoignages = [
  {
    name: "Un parent",
    text: "En tant que maman de trois enfants, j'ai vécu un tournant majeur avec ma dernière fille. Profil neuroatypique HPI, elle a longtemps grandi loin des bancs de l'école, en instruction en famille. Et puis, un jour, c'est elle qui a pris cette décision courageuse : elle a voulu pousser la porte de l'École de l'Hêtre à Toulouse. Depuis trois ans maintenant — soit quasiment depuis la création de l'école — nous vivons une aventure humaine qui a tout changé. Une structure éducative unique, Au-delà de leur rôle de créateurs, Marie Zévaco et Julien ont porté ma fille et ce projet avec une énergie et une humanité hors du commun. Ensemble, ils ont bâti bien plus qu'une structure éducative : ils ont créé un cadre aussi rassurant que celui d'une maison. Ma fille a pu surmonter ses peurs, reprendre confiance en elle et vivre une vie d'élève épanouie, entourée d'amis précieux et courageux aussi comme Clotilde, Tim, Tahina et Jean. Une transformation partagée, Marie et Julien réussissent ce tour de force : mettre une étincelle dans les yeux des enfants, mais aussi dans ceux des parents. Je peux en témoigner personnellement : il y a eu une véritable transformation en moi aussi (mais ça, je le garde secret !). Voir son enfant s'épanouir et redevenir actrice de sa vie est un soulagement qui change tout le quotidien d'une maman. Des projets qui ouvrent le monde, Marie déploie une énergie incroyable pour proposer des expériences marquantes : Rencontres inspirantes : Des autrices comme Linda (aventure au long cours) ou Alexandra (outil de lecture de soi) pour aider les enfants à croire en leurs rêves et leurs potentiels. Expression & Art : Théâtre, sport, gospel, et même un moment inoubliable avec le parrain de l'école, Eyal, à l'Olympia. Culture Urbaine : Des échanges créatifs avec les artistes Ceet Fouad et Jazzu. Découverte du terrain : Des reptiles de Philippe Gillet aux rencontres avec les militaires de Francazal ou la gendarmerie. Porter l'espoir au-delà de l'école. Aujourd'hui, Victoria ne se contente plus de suivre une scolarité, elle se projette enfin vers l'avenir. Elle rêve désormais de sauver des vies en devenant chirurgienne et de faire de l'humanitaire. Je pense que Victoria pourra faire résonance à l'École de l'Hêtre et porter un message de créativité, d'espoir et de lumière un peu partout. L'École de l'Hêtre est un lieu rare. Je remercie avant tout Marie Zévaco et Julien pour leur magie et leur regard si précieux. On ne lâche rien, c'est le mot d'ordre !"
  },
  {
    name: "Une maman",
    text: "Je voulais simplement vous dire merci du fond du cœur. Grâce à vous deux, et à tout ce que vous faites à l'école, Alyssa a pu réussir à se réadapter à l'école classique. Et ce n'est pas rien. Marie, ce que toi et Julien avez créé est vraiment exceptionnel. C'est un lieu sûr, bienveillant, qui donne une voix aux enfants qu'on n'entend pas toujours. Ce que vous faites est précieux et cela a fait toute la différence pour Alyssa. Merci infiniment pour tout ce que vous avez fait pour elle. Je vous suis profondément reconnaissante. Avec toute ma gratitude, Nusha"
  },
  {
    name: "Une autre maman",
    text: "Avant d'intégrer l'école de l'Hêtre, notre fils était en grande difficulté dans le système scolaire classique. Malgré tous ses efforts, ses difficultés n'étaient pas suffisamment pris en compte, ce qui impactait fortement sa confiance en lui et son envie d'apprendre. Le choix de cette école a été un tournant décisif pour toute notre famille. Dès les premières semaines, nous avons vu un changement profond. Notre fils a retrouvé le sourire, l'envie d'aller à l'école et surtout le plaisir d'apprendre. L'équipe pédagogique fait un travail remarquable : chaque enfant est compris dans sa singularité, accompagné avec bienveillance, tout en étant encouragé avec exigence à progresser. Ici, les apprentissages sont adaptés, structurés et réellement efficaces. Les enfants avec des troubles dys, TSA ou HPI peuvent avancer à leur rythme, reprendre confiance en leurs capacités et développer leur potentiel dans un cadre sécurisant et stimulant. Aujourd'hui, notre fils est épanoui, heureux et fier de lui. Il a retrouvé confiance et avance sereinement dans ses apprentissages, ce qui semblait impossible auparavant.Non seulement cette école a transformé notre fils,mais elle l'a mis dans un cadre exigeant de réussite scolaire. Nous recommandons cette école sans hésitation à toutes les familles qui cherchent une solution adaptée pour leur enfant atypique. C'est bien plus qu'une école : c'est un lieu où les enfants peuvent enfin se révéler,grandir et être heureux tout en visant une réussite scolaire ambitieuse."
  }
];

function isDescriptionLong(description) {
  const plainText = description.replace(/<[^>]*>/g, '');
  const wordCount = plainText.trim().split(/\s+/).length;
  return wordCount > 100;
}

function toggleExpanded(index) {
  expandedTestimonials.value[index] = !expandedTestimonials.value[index];
}
</script>
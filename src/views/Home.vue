<template>
  <div class="px-4 md:px-64 flex flex-col gap-8">
    <!-- Hero -->
    <section
      class="w-full h-[450px] bg-[url('/imgs/class.jpg')] bg-cover bg-center rounded-4xl p-8 flex flex-col items-left justify-center gap-2 relative"
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

      img="/imgs/class.jpg"
    />
    
    <!-- Philosophie -->
    <TextImage 
      title="Notre philosophie"
      text="Notre collège est axé sur l'adolescent en tant qu'être à part entière, mais également sur l'adolescent membre d'un groupe.<br/><br/>
          Nous partons du principe que les mêmes méthodes d'apprentissage des connaissances ne sont pas adaptées à tous les adolescents.<br/><br/>
          Notre attachement à l'ouverture sur le monde et notre approche individuelle permettront à votre adolescent de s'épanouir et de découvrir tout son potentiel."

      img="/imgs/class.jpg"
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
          img="/imgs/class.jpg"
          title="D'apprentissage"
          text="<span>Faciliter l'apprentissage en recherchant la forme la plus adaptée pour chaque enfant.</span>
            <span>Donner le goût des études et des apprentissages en y apportant du sens.</span>"
        />

        <CardImage 
          img="/imgs/class.jpg"
          title="Réussite personnelle"
          text="<span>Favoriser la confiance en soi.</span>
            <span>Susciter la motivation.</span>
            <span>Développer l'autonomie.</span>
            <span>Favoriser l'épanouissement.</span>"
        />

        <CardImage 
          img="/imgs/class.jpg"
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
              <div class="py-4 text-xl">"Mon adolescent est <b>EXPAT</b>"</div>
            </div>
          </div>
          <div>
            <div class="text-4xl font-bold text-left mb-6">Notre responsabilité</div>
            <div class="flex flex-col gap-4">
              <div class="py-4 text-xl">Il pourra grandir dans un environnement <b>bienveillant</b> et stimulant.</div>
              <div class="py-4 text-xl">Notre pédagogie adaptée vise à permettre son <b>épanouissement</b> et à lui donner de meilleures chances de réussite.</div>
              <div class="py-4 text-xl">Nous proposons un <b>enseignement</b> adapté pour remédier aux difficultés d'apprentissage liées aux troubles cognitifs.</div>
              <div class="py-4 text-xl">Il bénéficiera d'un apprentissage en <b>langues étrangères</b> et d'une ouverture sur l'international.</div>
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
            <tr>
              <td class="py-4 text-xl align-top">"Mon adolescent est <b>EXPAT</b>"</td>
              <td class="py-4 text-xl align-top">Il bénéficiera d'un apprentissage en <b>langues étrangères</b> et d'une ouverture sur l'international.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Nos valeurs -->
    <section class="card">
      <span class="text-4xl font-bold mb-3">Nos valeurs</span>
      <span class="text-xl mb-8">
        Nous désirons insuffler aux enfants nos valeurs de respect, d'esprit d'équipe, de bienveillance et d'internationalisme.
      </span>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Bloc 1 -->
        <div class="card bg-primary-100 mb-0!">
          <span class="font-bold text-xl text-primary">Nous respectons et apprécions :</span>
          <ul class="list-disc pl-6 text-lg">
            <li>Nous-mêmes et notre famille</li>
            <li>Les autres cultures et religions</li>
            <li>L'environnement</li>
            <li>La propriété d'autrui</li>
            <li>Tous les membres de notre communauté</li>
            <li>Les lois et les traditions des sociétés dans lesquelles nous vivons et travaillons</li>
          </ul>
        </div>
        <!-- Bloc 2 -->
        <div class="card bg-primary-100 mb-0!">
          <span class="font-bold text-xl text-primary">Nous accueillons tout le monde, où qu'il se trouve :</span>
          <ul class="list-disc pl-6 text-lg">
            <li>Nous apprécions notre diversité</li>
            <li>Nous sommes ouverts d'esprit</li>
            <li>Nous sommes compréhensifs</li>
            <li>Nous nous efforçons de toujours collaborer avec les autres</li>
            <li>Nous célébrons l'internationalisme</li>
          </ul>
        </div>
        <!-- Bloc 3 -->
        <div class="card bg-primary-100 mb-0!">
          <span class="font-bold text-xl text-primary">Nous nous efforçons d'être une communauté inclusive :</span>
          <ul class="list-disc pl-6 text-lg">
            <li>Nous nous soutenons et nous nous encourageons mutuellement</li>
            <li>Nous valorisons l'empathie et la bienveillance</li>
            <li>Nous avons une responsabilité sociale envers autrui</li>
            <li>Nous sommes généreux</li>
            <li>Nous sommes fiers de notre communauté scolaire</li>
          </ul>
        </div>
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
    text: "Avant d'intégrer l'école de l'Hêtre, notre fils était en grande difficulté dans le système scolaire classique. Malgré tous ses efforts, ses difficultés n'étaient pas suffisamment pris en compte, ce qui impactait fortement sa confiance en lui et son envie d'apprendre. Le choix de cette école a été un tournant décisif pour toute notre famille. Dès les premières semaines, nous avons vu un changement profond. Notre fils a retrouvé le sourire, l'envie d'aller à l'école et surtout le plaisir d'apprendre. L'équipe pédagogique fait un travail remarquable : chaque enfant est compris dans sa singularité, accompagné avec bienveillance, tout en étant encouragé avec exigence à progresser. Ici, les apprentissages sont adaptés, structurés et réellement efficaces. Les enfants avec des troubles dys, TSA ou TDAH peuvent avancer à leur rythme, reprendre confiance en leurs capacités et développer leur potentiel dans un cadre sécurisant et stimulant. Aujourd'hui, notre fils est épanoui, heureux et fier de lui. Il a retrouvé confiance et avance sereinement dans ses apprentissages, ce qui semblait impossible auparavant.Non seulement cette école a transformé notre fils,mais elle l'a mis dans un cadre exigeant de réussite scolaire. Nous recommandons cette école sans hésitation à toutes les familles qui cherchent une solution adaptée pour leur enfant atypique. C'est bien plus qu'une école : c'est un lieu où les enfants peuvent enfin se révéler,grandir et être heureux tout en visant une réussite scolaire ambitieuse."
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
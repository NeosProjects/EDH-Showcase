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
      <div class="w-full overflow-x-auto">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8">
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

    <section class="card text-xl">
      <span class="text-4xl font-bold mb-4">Qu'en pensent les parents ?</span>
      <div>
        <span class="font-bold">Anonyme</span>
        <span>&nbsp;-&nbsp;</span>
        <span>"Mon enfant.... Lorem ipsum"</span>
      </div>
    </section>
  </div>
</template>

<script setup>
import OpenClasses from '@/components/common/OpenClasses.vue';
import TextImage from '@/components/common/TextImage.vue';
import CardImage from '@/components/common/CardImage.vue';
</script>
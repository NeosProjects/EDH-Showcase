<template>
  <div class="px-4 md:px-64 flex flex-col gap-8">
    <!-- Hero -->
    <section
      class="w-full h-[450px] bg-[url('/public/imgs/class.jpg')] bg-cover bg-center rounded-4xl p-8 flex flex-col items-left justify-center gap-2 relative"
    >
      <div class="absolute inset-0 bg-black opacity-50 rounded-4xl"></div>
      <div class="relative z-10 flex flex-col gap-2">
        <span class="text-5xl font-bold text-white">Votre enfant mérite le meilleur</span>
        <span class="text-xl text-white">Rejoignez l'aventure !</span>
      </div>
    </section>

    <!-- Qui sommes-nous ? -->
    <section
      class="w-full h-fit rounded-4xl p-8 flex flex-col md:flex-row gap-8 relative"
    >
      <div class="flex flex-col gap-4 md:w-5/10">
        <span class="text-5xl font-bold ">Qui sommes-nous ?</span>
        <span class="text-xl">
          L'école de l'Hêtre est un établissement privé associatif accueillant les collégiens jusqu'à la fin du collège.
          <br/><br/>
          Créé par des enseignants, des professionnels et des parents engagés, il place la bienveillance, la confiance en soi et l'ouverture sur le monde au cœur de son projet pédagogique.
          <br/><br/>
          Ce projet, fondé sur des expériences pédagogiques et personnelles, bénéficie du soutien de chefs d'entreprise et de donateurs apportant expertise et financements.
        </span>
      </div>
      <img class="md:w-5/10 bg-center rounded-4xl" src="/public/imgs/class.jpg"></img>
    </section>
    
    <!-- Philosophie -->
    <section
      class="w-full rounded-4xl p-8 flex flex-col md:flex-row-reverse gap-8 relative"
    >
      <div class="flex flex-col gap-4 md:w-5/10">
        <span class="text-5xl font-bold ">Notre philosophie</span>
        <span class="text-xl">
          Notre école est axée sur l’adolescent en tant qu’être à part entière, mais également sur l'adolescent membre d’un groupe.<br/><br/>
          Nous partons du principe que les mêmes méthodes d’apprentissage des connaissances ne sont pas adaptées à tous les adolescents.<br/><br/>
          Notre attachement à l’ouverture sur le monde et notre approche individuelle permettront à votre adolescent de s’épanouir et de découvrir tout son potentiel.
        </span>
      </div>
      <img class="md:w-5/10 bg-center rounded-4xl" src="/public/imgs/class.jpg"></img>
    </section>

    <!-- Inscriptions -->
    <section
      class="w-full h-fit bg-blue-50 rounded-4xl p-8 flex gap-8 relative shadow-md"
    >
      <div class="flex flex-col gap-4 w-9/10">
        <span class="text-5xl font-bold ">Classes ouvertes !</span>
        <span class="text-xl">
          Cette année, l'école s'agrandit une fois de plus ! Désormais, les classes de 6ᵉ, 5ᵉ et 4ᵉ sont ouvertes aux inscriptions.
        </span>
        <button class="bg-primary hover:!bg-primary-dark cursor-pointer text-white !w-fit py-4 px-8 font-bold text-xl rounded-4xl mt-4" @click="$router.push('/')">Inscrire mon enfant</button>
      </div>
    </section>

    <!-- Objectifs -->
    <section
      class="w-full h-fit rounded-4xl p-8 flex flex-col gap-8"
    >
      <span class="text-5xl font-bold h-fit">Nos objectifs</span>
      <div class="md:h-[450px] flex flex-col md:flex-row gap-8">
        <!-- Card -->
        <div class="flex flex-col flex-grow shadow-md gap-4 w-full rounded-4xl transition duration-300 hover:scale-102 pb-4 md:pb-0">
          <img class="w-full h-1/2 bg-center rounded-t-4xl" src="/public/imgs/class.jpg"></img>
          <div class="px-4 flex flex-col gap-4">
            <span class="font-bold text-xl">D'apprentissage</span>
            <span>Faciliter l’apprentissage en recherchant la forme la plus adaptée pour chaque enfant.</span>
            <span>Donner le goût des études et des apprentissages en y apportant du sens.</span>
          </div>
        </div>
        <!-- Card -->
        <div class="flex flex-col flex-grow shadow-md gap-4 w-full rounded-4xl transition duration-300 hover:scale-102 pb-4 md:pb-0">
          <img class="w-full h-1/2 bg-center rounded-t-4xl" src="/public/imgs/class.jpg"></img>
          <div class="px-4 flex flex-col gap-4">
            <span class="font-bold text-xl">Réussite personnelle</span>
            <span>Favoriser la confiance en soi.</span>
            <span>Susciter la motivation.</span>
            <span>Développer l’autonomie.</span>
            <span>Favoriser l’épanouissement.</span>
          </div>
        </div>
        <!-- Card -->
        <div class="flex flex-col flex-grow shadow-md gap-4 w-full rounded-4xl transition duration-300 hover:scale-102 pb-4 md:pb-0">
          <img class="w-full h-1/2 bg-center rounded-t-4xl" src="/public/imgs/class.jpg"></img>
          <div class="px-4 flex flex-col gap-4">
            <span class="font-bold text-xl">Citoyens</span>
            <span>Encourager et contribuer à l’ouverture sur le monde tout en gardant sa place.</span>
            <span>Former des citoyens du monde qui font preuve d’intégrité morale et de responsabilité sociale.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pour tous les profils -->
    <section
      class="w-full h-fit bg-blue-50 rounded-4xl p-8 gap-8 relative shadow-md hidden md:flex"
    >
      <div class="w-full overflow-x-auto">
        <table class="min-w-full table-auto border-collapse">
          <thead>
        <tr>
          <th class="pr-8 text-5xl font-bold text-left align-top min-w-1/2">Vos inquiétudes ?</th>
          <th class="text-5xl font-bold text-left align-top min-w-1/2">Notre responsabilité</th>
        </tr>
          </thead>
          <tbody>
        <tr class="align-top">
          <td class="py-4 text-xl">"Mon adolescent a des difficultés d’apprentissage"</td>
          <td class="py-4 text-xl">Il pourra grandir dans un environnement bienveillant et stimulant.</td>
        </tr>
        <tr class="align-top">
          <td class="py-4 text-xl">"Mon adolescent est précoce"</td>
          <td class="py-4 text-xl">Notre pédagogie adaptée vise à permettre son épanouissement et à lui donner de meilleures chances de réussite.</td>
        </tr>
        <tr class="align-top">
          <td class="py-4 text-xl">"Mon adolescent est atteint de troubles dys"</td>
          <td class="py-4 text-xl">Nous proposons un enseignement adapté pour remédier aux difficultés d’apprentissage liées aux troubles cognitifs.</td>
        </tr>
        <tr class="align-top">
          <td class="py-4 text-xl">"Mon adolescent est EXPAT"</td>
          <td class="py-4 text-xl">Il bénéficiera d’un apprentissage en langues étrangères et d’une ouverture sur l’international.</td>
        </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Nos valeurs -->
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col gap-8 bg-white shadow-md">
      <span class="text-5xl font-bold">Nos valeurs</span>
      <span class="text-xl">
        Nous désirons insuffler aux enfants nos valeurs de respect, d’esprit d’équipe, de bienveillance et d’internationalisme.
      </span>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Bloc 1 -->
        <div class="flex flex-col gap-4 bg-blue-50 rounded-4xl p-6 shadow">
          <span class="font-bold text-2xl text-primary">Nous respectons et apprécions :</span>
          <ul class="list-disc pl-6 text-lg">
            <li>Nous-mêmes et notre famille</li>
            <li>Les autres cultures et religions</li>
            <li>L’environnement</li>
            <li>La propriété d’autrui</li>
            <li>Tous les membres de notre communauté</li>
            <li>Les lois et les traditions des sociétés dans lesquelles nous vivons et travaillons</li>
          </ul>
        </div>
        <!-- Bloc 2 -->
        <div class="flex flex-col gap-4 bg-blue-50 rounded-4xl p-6 shadow">
          <span class="font-bold text-2xl text-primary">Nous accueillons tout le monde, où qu'il se trouve :</span>
          <ul class="list-disc pl-6 text-lg">
            <li>Nous apprécions notre diversité</li>
            <li>Nous sommes ouverts d’esprit</li>
            <li>Nous sommes compréhensifs</li>
            <li>Nous nous efforçons de toujours collaborer avec les autres</li>
            <li>Nous célébrons l’internationalisme</li>
          </ul>
        </div>
        <!-- Bloc 3 -->
        <div class="flex flex-col gap-4 bg-blue-50 rounded-4xl p-6 shadow">
          <span class="font-bold text-2xl text-primary">Nous nous efforçons d'être une communauté inclusive :</span>
          <ul class="list-disc pl-6 text-lg">
            <li>Nous nous soutenons et nous nous encourageons mutuellement</li>
            <li>Nous valorisons l’empathie et la bienveillance</li>
            <li>Nous avons une responsabilité sociale envers autrui</li>
            <li>Nous sommes généreux</li>
            <li>Nous sommes fiers de notre communauté scolaire</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Inscriptions -->
    <section
      class="w-full h-fit bg-blue-50 rounded-4xl p-8 flex gap-8 relative shadow-md mb-8"
    >
      <div class="flex flex-col gap-4 w-9/10">
        <span class="text-5xl font-bold ">Classes ouvertes !</span>
        <span class="text-xl">
          Cette année, l'école s'agrandit une fois de plus ! Désormais, les classes de 6ᵉ, 5ᵉ et 4ᵉ sont ouvertes aux inscriptions.
        </span>
        <button class="bg-primary hover:!bg-primary-dark cursor-pointer text-white !w-fit py-4 px-8 font-bold text-xl rounded-4xl mt-4" @click="$router.push('/')">Inscrire mon enfant</button>
      </div>
    </section>
  </div>
</template>

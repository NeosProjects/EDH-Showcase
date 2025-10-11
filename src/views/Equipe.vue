<template>
  <div class="px-64 pb-8">
    <section class="w-full h-fit rounded-4xl p-8 flex flex-col gap-8 bg-blue-50 shadow-md">
      <span class="text-5xl font-bold mb-4">Notre équipe</span>
      <div
        v-for="(member, index) in teamMembers"
        :key="member.name"
        :class="[
          'w-full h-full shadow bg-white rounded-4xl flex gap-8 items-center',
          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
        ]"
      >
        <div class="w-64 py-8 flex flex-col gap-2 items-center justify-center">
          <img :src="member.img" class="w-24 h-24 rounded-full object-cover" />
          <div class="flex flex-col items-center">
            <span class="font-bold text-xl">{{ member.name }}</span>
            <span class="text-gray-700">{{ member.profession }}</span>
          </div>
        </div>
        <div class="w-full h-full p-8 text-xl">
          {{ member.description }}
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

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          name: 'Marie',
          profession: 'Directrice',
          img: '/public/imgs/logo-EDH.jpg',
          description:
            'Notre directrice blablabla... bcezkj dezjk dzn klzen lez nez jez jxzlkzxan xzan xaznjxklzaxn zjkla ce vezj bcss cbhds bhcj bzhqbchs jk cbsqhjk bcsjk bshjkcbd shochui dzebhd azbhlazbh labhc jks blcbh sdbfezuip bp dbahlbslwcbuezi',
        },
        {
          name: 'Marie',
          profession: 'Directrice',
          img: '/public/imgs/logo-EDH.jpg',
          description:
            'Notre directrice blablabla... bcezkj dezjk dzn klzen lez nez jez jxzlkzxan xzan xaznjxklzaxn zjkla ce vezj bcss cbhds bhcj bzhqbchs jk cbsqhjk bcsjk bshjkcbd shochui dzebhd azbhlazbh labhc jks blcbh sdbfezuip bp dbahlbslwcbuezi',
        },
        {
          name: 'Marie',
          profession: 'Directrice',
          img: '/public/imgs/logo-EDH.jpg',
          description:
            'Notre directrice blablabla... bcezkj dezjk dzn klzen lez nez jez jxzlkzxan xzan xaznjxklzaxn zjkla ce vezj bcss cbhds bhcj bzhqbchs jk cbsqhjk bcsjk bshjkcbd shochui dzebhd azbhlazbh labhc jks blcbh sdbfezuip bp dbahlbslwcbuezi',
        },
      ],
    }
  },
}
</script>
